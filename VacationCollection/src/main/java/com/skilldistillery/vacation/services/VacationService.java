package com.skilldistillery.vacation.services;

import java.util.List;

import com.skilldistillery.vacation.entities.Vacation;

public interface VacationService {
	
	List<Vacation> listAllVacations();
	Vacation getVacation(int vacaId);
	Vacation create(Vacation newVaca);
	Vacation update(int vacaId, Vacation vaca);
	boolean delete(int vacaId);

}
