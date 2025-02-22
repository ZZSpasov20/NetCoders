package org.cfhackathon.netcoders.repositories;

import org.cfhackathon.netcoders.models.Family;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FamilyRepository extends JpaRepository<Family, Long> {
}
