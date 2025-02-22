package org.cfhackathon.netcoders.controllers;

import org.cfhackathon.netcoders.models.DTOs.ReturnJson;
import org.cfhackathon.netcoders.models.Family;
import org.cfhackathon.netcoders.services.FamilyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/family")
public class FamilyController {

    private final FamilyService familyService;

    @Autowired
    public FamilyController(FamilyService familyService) {
        this.familyService = familyService;
    }

    // Create a new family
    @PostMapping("/create")
    public ReturnJson<Family> createFamily(Authentication authentication, @RequestParam String familyName) {
        Family family = familyService.createFamily(authentication, familyName);
        return ReturnJson.success(family, "Family created successfully");
    }

    // Join an existing family
    @PostMapping("/join/{familyId}")
    public ReturnJson<Family> joinFamily(Authentication authentication, @PathVariable Long familyId) {
        Family family = familyService.joinFamily(authentication, familyId);
        return ReturnJson.success(family, "Successfully joined the family");
    }

    // Leave the current family
    @PostMapping("/leave")
    public ReturnJson<Void> leaveFamily(Authentication authentication) {
        familyService.leaveFamily(authentication);
        return ReturnJson.success(null, "Successfully left the family");
    }

    // Get the user's current family
    @GetMapping("/my-family")
    public ReturnJson<Family> getMyFamily(Authentication authentication) {
        Family family = familyService.getUserFamily(authentication);
        return ReturnJson.success(family);
    }
}
