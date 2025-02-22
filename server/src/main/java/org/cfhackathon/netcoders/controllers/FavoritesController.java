package org.cfhackathon.netcoders.controllers;

import org.cfhackathon.netcoders.models.DTOs.ReturnJson;
import org.cfhackathon.netcoders.models.Favorites;
import org.cfhackathon.netcoders.services.FavoritesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/favorites")
public class FavoritesController {

    private final FavoritesService favoritesService;

    @Autowired
    public FavoritesController(FavoritesService favoritesService) {
        this.favoritesService = favoritesService;
    }

    // Get user's favorite products
    @GetMapping
    public ReturnJson<Favorites> getFavorites(Authentication authentication) {
        Favorites favorites = favoritesService.getFavorites(authentication);
        return ReturnJson.success(favorites);
    }

    // Add a product to favorites
    @PostMapping("/add/{productId}")
    public ReturnJson<Favorites> addFavorite(Authentication authentication, @PathVariable Long productId) {
        Favorites favorites = favoritesService.addFavorite(authentication, productId);
        return ReturnJson.success(favorites, "Product added to favorites");
    }

    // Remove a product from favorites
    @PostMapping("/remove/{productId}")
    public ReturnJson<Favorites> removeFavorite(Authentication authentication, @PathVariable Long productId) {
        Favorites favorites = favoritesService.removeFavorite(authentication, productId);
        return ReturnJson.success(favorites, "Product removed from favorites");
    }
}
