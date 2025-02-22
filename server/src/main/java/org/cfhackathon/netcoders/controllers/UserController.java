package org.cfhackathon.netcoders.controllers;

import org.cfhackathon.netcoders.models.DTOs.ReturnJson;
import org.cfhackathon.netcoders.models.DTOs.UserResponse;
import org.cfhackathon.netcoders.models.User;
import org.cfhackathon.netcoders.services.AuthService;
import org.cfhackathon.netcoders.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    private final UserService userService;
    private final AuthService authService;

    @Autowired
    public UserController(UserService userService, AuthService authService) {
        this.userService = userService;
        this.authService = authService;
    }

    @GetMapping("/all")
    public ReturnJson<List<User>> getAll(Authentication authentication) {
        List<User> users = userService.listUsers();
        return ReturnJson.success(users);
    }

    @GetMapping("/current")
    public ReturnJson<UserResponse> getCurrent(Authentication authentication){
        UserResponse userResponse = new UserResponse();
        User user = authService.getUserByToken(authentication);
        userResponse.setId(user.getId());
        userResponse.setEmail(user.getEmail());
        userResponse.setFirstName(user.getFirstName());
        userResponse.setLastName(user.getLastName());
        return ReturnJson.success(userResponse);
    }

    @PutMapping(value = "/current")
    public ReturnJson<User> update(@RequestBody User updatedUser, Authentication authentication) {
        updatedUser.setId(authService.getUserByToken(authentication).getId());
        return ReturnJson.success(userService.updateUser(updatedUser));
    }

    @DeleteMapping("/current")
    public ReturnJson<Void> delete(Authentication authentication){
        userService.deleteUser(authService.getUserByToken(authentication));
        return ReturnJson.success();
    }


}
