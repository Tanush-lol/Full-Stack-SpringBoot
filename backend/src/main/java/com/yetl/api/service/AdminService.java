package com.yetl.api.service;

import com.yetl.api.model.Product;
import com.yetl.api.repository.ProductRepository;
import java.math.BigDecimal;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    private final ProductRepository productRepository;

    public AdminService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Map<String, Object> getInventorySnapshot() {
        List<Product> products = productRepository.findAll();
        int totalStock = products.stream().mapToInt(Product::getStockAvailable).sum();
        int totalSold = products.stream().mapToInt(Product::getStockSold).sum();
        BigDecimal totalProfit = products.stream()
            .map(Product::getProfitGenerated)
            .reduce(BigDecimal.ZERO, BigDecimal::add);
        return Map.of(
            "totalStock", totalStock,
            "totalSold", totalSold,
            "totalProfit", totalProfit,
            "products", products
        );
    }

    public Map<String, Object> getRevenuePanel() {
        List<Product> products = productRepository.findAll();
        List<Product> bestSellers = products.stream()
            .sorted(Comparator.comparingInt(Product::getStockSold).reversed())
            .limit(5)
            .toList();
        BigDecimal netProfit = products.stream()
            .map(Product::getProfitGenerated)
            .reduce(BigDecimal.ZERO, BigDecimal::add);
        return Map.of(
            "bestSellers", bestSellers,
            "netProfit", netProfit
        );
    }
}
