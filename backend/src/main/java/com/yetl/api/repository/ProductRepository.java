package com.yetl.api.repository;

import com.yetl.api.model.Product;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByStyleIgnoreCase(String style);
    List<Product> findByNameContainingIgnoreCase(String name);
}
