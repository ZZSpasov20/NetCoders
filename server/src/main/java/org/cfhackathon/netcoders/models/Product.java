package org.cfhackathon.netcoders.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Products")
@Getter
@Setter
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Name", nullable = false)
    private String name;

    @Column(name = "Brand", nullable = false)
    private String brand;

    @Column(name = "Type", nullable = false)
    private String type; // Hardcoded categories (e.g., "Beverages", "Dairy", etc.)

    @Column(name = "Price", nullable = false)
    private String priceType; // ("Affordable", "Reasonable", "Pricey")
}
