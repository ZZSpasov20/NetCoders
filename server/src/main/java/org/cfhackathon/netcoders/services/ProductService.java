package org.cfhackathon.netcoders.services;

import org.cfhackathon.netcoders.models.Product;
import org.cfhackathon.netcoders.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // Create a new product and determine priceType
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    // Get all products
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Get all bought products (Newest first)
    public List<Product> getBoughtProducts() {
        return productRepository.findByBoughtDateIsNotNullOrderByBoughtDateDesc();
    }

    // Get all unbought products
    public List<Product> getUnboughtProducts() {
        return productRepository.findByBoughtDateIsNull();
    }

    public Product buyProduct(Long productId) {
        Product product = productRepository.findById(productId).orElseThrow(() -> new RuntimeException("Product not found"));
        product.setBoughtDate(LocalDateTime.now());
        return productRepository.save(product);
    }

    // Get a single product by ID
    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    // Get products by type
    public List<Product> getProductsByType(String type) {
        return productRepository.findByType(type);
    }

    // Get products by priceType
    public List<Product> getProductsByPriceType(String priceType) {
        return productRepository.findByPriceType(priceType);
    }

    // Delete a product
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
