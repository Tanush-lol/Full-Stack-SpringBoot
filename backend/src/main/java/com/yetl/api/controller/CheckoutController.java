package com.yetl.api.controller;

import java.util.Map;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {
    @PostMapping
    public Map<String, String> createCheckout(@RequestBody Map<String, Object> payload) {
        return Map.of(
            "status", "pending",
            "message", "Stripe session would be created here",
            "cartSize", String.valueOf(payload.getOrDefault("items", "0"))
        );
    }
}
