package org.cfhackathon.netcoders.repositories;

import org.cfhackathon.netcoders.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByType(String type);
    List<Product> findByPriceType(String priceType);
}
