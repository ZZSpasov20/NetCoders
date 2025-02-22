package org.cfhackathon.netcoders.controllers;

import org.cfhackathon.netcoders.models.DTOs.ReturnJson;
import org.cfhackathon.netcoders.models.Product;
import org.cfhackathon.netcoders.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // Create a new product
    @PostMapping("/create")
    public ReturnJson<Product> createProduct(@RequestBody Product product) {
        Product savedProduct = productService.createProduct(product);
        return ReturnJson.success(savedProduct, "Product created successfully");
    }

    // Get all products
    @GetMapping("/all")
    public ReturnJson<List<Product>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return ReturnJson.success(products);
    }

    // Get product by ID
    @GetMapping("/{id}")
    public ReturnJson<Product> getProductById(@PathVariable Long id) {
        Optional<Product> product = productService.getProductById(id);
        return product.map(ReturnJson::success)
                .orElseGet(() -> ReturnJson.failure("Product not found"));
    }

    // Get products by type
    @GetMapping("/type/{type}")
    public ReturnJson<List<Product>> getProductsByType(@PathVariable String type) {
        List<Product> products = productService.getProductsByType(type);
        return ReturnJson.success(products);
    }

    // Get products by priceType
    @GetMapping("/priceType/{priceType}")
    public ReturnJson<List<Product>> getProductsByPriceType(@PathVariable String priceType) {
        List<Product> products = productService.getProductsByPriceType(priceType);
        return ReturnJson.success(products);
    }

    // Delete product
    @DeleteMapping("/delete/{id}")
    public ReturnJson<Void> deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return ReturnJson.success(null, "Product deleted successfully");
    }
}
