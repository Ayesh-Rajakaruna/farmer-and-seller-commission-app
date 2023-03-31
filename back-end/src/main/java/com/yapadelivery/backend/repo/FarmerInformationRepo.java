package com.yapadelivery.backend.repo;

import com.yapadelivery.backend.entity.FarmerInformation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FarmerInformationRepo extends JpaRepository<FarmerInformation, Long> {
    Optional <FarmerInformation> findByUserEmail(String userEmail);
}
