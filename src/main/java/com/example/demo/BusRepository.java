package com.example.demo;

import com.example.demo.Bus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

@SuppressWarnings("unused")
public interface BusRepository extends JpaRepository<Bus, Long> {
    List<Bus> findBySourceAndDestination(String source, String destination);
}
