package org.cfhackathon.netcoders.controllers;

import org.cfhackathon.netcoders.models.DTOs.ReturnJson;
import org.cfhackathon.netcoders.models.DTOs.LoginRequest;
import org.cfhackathon.netcoders.models.User;
import org.cfhackathon.netcoders.services.AuthService;
import org.cfhackathon.netcoders.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;
    private final UserService userService;

    @Autowired
    public AuthController(AuthService authService, UserService userService) {
        this.authService = authService;
        this.userService = userService;
    }

    @PostMapping("/register")
    public ReturnJson<Void> register(@RequestBody User user) {
        userService.saveUser(user);
        return ReturnJson.success(null, "User registered successfully");
    }

    @PostMapping("/login")
    public ReturnJson<String> login(@RequestBody LoginRequest loginRequest) {
        if(authService.authenticate(loginRequest.getEmail(), loginRequest.getPassword())){
            return ReturnJson.success(authService.generateToken(loginRequest.getEmail()), "User logged in successfully");
        }
        return ReturnJson.failure("Invalid email or password");
    }
}