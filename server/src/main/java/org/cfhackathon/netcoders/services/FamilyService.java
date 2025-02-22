package org.cfhackathon.netcoders.services;

import org.cfhackathon.netcoders.models.Family;
import org.cfhackathon.netcoders.models.User;
import org.cfhackathon.netcoders.repositories.FamilyRepository;
import org.cfhackathon.netcoders.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class FamilyService {

    private final FamilyRepository familyRepository;
    private final UserRepository userRepository;
    private final AuthService authService;

    @Autowired
    public FamilyService(FamilyRepository familyRepository, UserRepository userRepository, AuthService authService) {
        this.familyRepository = familyRepository;
        this.userRepository = userRepository;
        this.authService = authService;
    }

    // Create a new family
    public Family createFamily(Authentication authentication, String familyName) {
        User user = authService.getUserByToken(authentication);
        if (user.getFamily() != null) {
            throw new RuntimeException("User already belongs to a family.");
        }

        Family family = new Family();
        family.setFamilyName(familyName);
        familyRepository.save(family);

        user.setFamily(family);
        userRepository.save(user);

        return family;
    }

    // Join an existing family
    public Family joinFamily(Authentication authentication, Long familyId) {
        User user = authService.getUserByToken(authentication);
        if (user.getFamily() != null) {
            throw new RuntimeException("User already belongs to a family.");
        }

        Optional<Family> familyOptional = familyRepository.findById(familyId);
        if (familyOptional.isEmpty()) {
            throw new RuntimeException("Family not found.");
        }

        Family family = familyOptional.get();
        user.setFamily(family);
        userRepository.save(user);

        return family;
    }

    // Leave the current family
    public void leaveFamily(Authentication authentication) {
        User user = authService.getUserByToken(authentication);
        if (user.getFamily() == null) {
            throw new RuntimeException("User is not part of any family.");
        }

        user.setFamily(null);
        userRepository.save(user);
    }

    // Get user's current family
    public Family getUserFamily(Authentication authentication) {
        User user = authService.getUserByToken(authentication);
        if (user.getFamily() == null) {
            throw new RuntimeException("User is not part of any family.");
        }
        return user.getFamily();
    }
}
