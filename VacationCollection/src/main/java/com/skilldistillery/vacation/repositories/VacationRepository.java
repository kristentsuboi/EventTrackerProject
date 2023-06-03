package com.skilldistillery.vacation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.vacation.entities.Vacation;

public interface VacationRepository extends JpaRepository<Vacation, Integer> {

}
