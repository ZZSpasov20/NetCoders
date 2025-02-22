package org.cfhackathon.netcoders.repositories;

import org.cfhackathon.netcoders.models.Favorites;
import org.cfhackathon.netcoders.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FavoritesRepository extends JpaRepository<Favorites, Long> {
    Optional<Favorites> findByUser(User user);
}
