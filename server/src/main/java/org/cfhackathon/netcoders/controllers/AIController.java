package org.cfhackathon.netcoders.controllers;

import org.cfhackathon.netcoders.models.Product;
import org.cfhackathon.netcoders.models.Favorites;
import org.cfhackathon.netcoders.models.Family;
import org.cfhackathon.netcoders.models.User;
import org.cfhackathon.netcoders.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ai")
public class AIController {

    private final AIService aiService;
    private final ProductService productService;
    private final FavoritesService favoritesService;
    private final FamilyService familyService;
    private final UserService userService;
    private final AuthService authService;

    @Autowired
    public AIController(AIService aiService, ProductService productService, FavoritesService favoritesService, FamilyService familyService, UserService userService, AuthService authService) {
        this.aiService = aiService;
        this.productService = productService;
        this.favoritesService = favoritesService;
        this.familyService = familyService;
        this.userService = userService;
        this.authService = authService;
    }

    // Analyze product trends across all users
    @GetMapping("/trends")
    public String analyzeProductTrends() {
        List<Product> products = productService.getAllProducts();
        return aiService.analyzeTrends(products, "Analyze and provide trends on which product categories are most popular.");
    }

    // Analyze favorite product trends
    @GetMapping("/favorites")
    public String analyzeFavorites(Authentication authentication) {
        Favorites favorites = favoritesService.getFavorites(authentication);
        return aiService.analyzeTrends(favorites.getProducts(), "Analyze the user's favorite products and suggest insights.");
    }

    // Analyze family buying behaviors
    @GetMapping("/family-trends")
    public String analyzeFamilyTrends(Authentication authentication) {
        Family family = familyService.getUserFamily(authentication);
        return aiService.analyzeTrends(family.getMembers(), "Analyze what products families tend to buy based on their members.");
    }

    // Get AI-powered personalized recommendations
    @GetMapping("/recommendations")
    public String getRecommendations(Authentication authentication) {
        User user = authService.getUserByToken(authentication);
        return aiService.analyzeTrends(user, "Based on the user's preferences, suggest new products they might like.");
    }
}
