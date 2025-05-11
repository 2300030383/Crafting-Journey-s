package com.example.CRAFTING_JOURNEYS;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<Registartion, Long> {
    Optional<Registartion> findByEmail(String email);
}