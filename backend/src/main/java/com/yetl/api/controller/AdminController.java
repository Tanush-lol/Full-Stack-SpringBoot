package com.yetl.api.controller;

import com.yetl.api.service.AdminService;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping("/inventory")
    public Map<String, Object> inventory() {
        return adminService.getInventorySnapshot();
    }

    @GetMapping("/revenue")
    public Map<String, Object> revenue() {
        return adminService.getRevenuePanel();
    }
}
