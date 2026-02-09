package com.yetl.api.service;

import com.yetl.api.model.UserAccount;
import com.yetl.api.repository.UserAccountRepository;
import java.time.LocalDateTime;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserAccountRepository userAccountRepository;

    public UserService(UserAccountRepository userAccountRepository) {
        this.userAccountRepository = userAccountRepository;
    }

    public UserAccount register(UserAccount userAccount) {
        userAccount.setJoinedAt(LocalDateTime.now());
        return userAccountRepository.save(userAccount);
    }

    public UserAccount addCartItem(Long userId, String item) {
        UserAccount user = userAccountRepository.findById(userId)
            .orElseThrow(() -> new IllegalArgumentException("User not found"));
        user.getCartItems().add(item);
        return userAccountRepository.save(user);
    }

    public UserAccount updateWishlist(Long userId, String item) {
        UserAccount user = userAccountRepository.findById(userId)
            .orElseThrow(() -> new IllegalArgumentException("User not found"));
        if (user.getWishlist().contains(item)) {
            user.getWishlist().remove(item);
        } else {
            user.getWishlist().add(item);
        }
        return userAccountRepository.save(user);
    }
}
