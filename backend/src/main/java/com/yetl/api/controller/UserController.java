package com.yetl.api.controller;

import com.yetl.api.model.UserAccount;
import com.yetl.api.repository.UserAccountRepository;
import com.yetl.api.service.UserService;
import jakarta.validation.Valid;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;
    private final UserAccountRepository userAccountRepository;

    public UserController(UserService userService, UserAccountRepository userAccountRepository) {
        this.userService = userService;
        this.userAccountRepository = userAccountRepository;
    }

    @PostMapping("/register")
    public UserAccount register(@Valid @RequestBody UserAccount userAccount) {
        return userService.register(userAccount);
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> payload) {
        String email = payload.getOrDefault("email", "");
        boolean exists = userAccountRepository.findByEmail(email).isPresent();
        return Map.of("status", exists ? "ok" : "not_found");
    }

    @PostMapping("/{id}/cart")
    public UserAccount addCartItem(@PathVariable Long id, @RequestBody Map<String, String> payload) {
        return userService.addCartItem(id, payload.getOrDefault("item", ""));
    }

    @PostMapping("/{id}/wishlist")
    public UserAccount toggleWishlist(@PathVariable Long id, @RequestBody Map<String, String> payload) {
        return userService.updateWishlist(id, payload.getOrDefault("item", ""));
    }

    @GetMapping("/{id}")
    public UserAccount getUser(@PathVariable Long id) {
        return userAccountRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("User not found"));
    }
}
