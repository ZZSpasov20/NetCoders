package org.cfhackathon.netcoders.services;

import org.cfhackathon.netcoders.models.Favorites;
import org.cfhackathon.netcoders.models.Product;
import org.cfhackathon.netcoders.models.User;
import org.cfhackathon.netcoders.repositories.FavoritesRepository;
import org.cfhackathon.netcoders.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class FavoritesService {
    private final FavoritesRepository favoritesRepository;
    private final ProductRepository productRepository;
    private final AuthService authService;

    @Autowired
    public FavoritesService(FavoritesRepository favoritesRepository, ProductRepository productRepository, AuthService authService) {
        this.favoritesRepository = favoritesRepository;
        this.productRepository = productRepository;
        this.authService = authService;
    }

    // Get the user's favorite products
    public Favorites getFavorites(Authentication authentication) {
        User user = authService.getUserByToken(authentication);
        return favoritesRepository.findByUser(user).orElseGet(() -> createFavorites(user));
    }

    // Create a new Favorites list if the user doesn't have one
    private Favorites createFavorites(User user) {
        Favorites favorites = new Favorites();
        favorites.setUser(user);
        return favoritesRepository.save(favorites);
    }

    // Add a product to favorites
    public Favorites addFavorite(Authentication authentication, Long productId) {
        User user = authService.getUserByToken(authentication);
        Favorites favorites = getFavorites(authentication);

        Optional<Product> productOpt = productRepository.findById(productId);
        if (productOpt.isEmpty()) {
            throw new RuntimeException("Product not found");
        }

        if (!favorites.getProducts().contains(productOpt.get())) {
            favorites.getProducts().add(productOpt.get());
            favoritesRepository.save(favorites);
        }

        return favorites;
    }

    // Remove a product from favorites
    public Favorites removeFavorite(Authentication authentication, Long productId) {
        User user = authService.getUserByToken(authentication);
        Favorites favorites = getFavorites(authentication);

        favorites.getProducts().removeIf(product -> product.getId().equals(productId));
        return favoritesRepository.save(favorites);
    }
}
