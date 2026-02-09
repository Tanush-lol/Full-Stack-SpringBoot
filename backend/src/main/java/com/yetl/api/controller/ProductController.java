package com.yetl.api.controller;

import com.yetl.api.model.Product;
import com.yetl.api.repository.ProductRepository;
import java.util.Comparator;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/style/{style}")
    public List<Product> getByStyle(@PathVariable String style) {
        return productRepository.findByStyleIgnoreCase(style);
    }

    @GetMapping("/search")
    public List<Product> search(@RequestParam String name) {
        return productRepository.findByNameContainingIgnoreCase(name);
    }

    @GetMapping("/bestsellers")
    public List<Product> bestSellers() {
        return productRepository.findAll().stream()
            .sorted(Comparator.comparingInt(Product::getStockSold).reversed())
            .toList();
    }
}
