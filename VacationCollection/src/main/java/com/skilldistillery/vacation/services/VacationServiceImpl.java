package com.skilldistillery.vacation.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.vacation.entities.Comment;
import com.skilldistillery.vacation.entities.Vacation;
import com.skilldistillery.vacation.repositories.CommentRepository;
import com.skilldistillery.vacation.repositories.VacationRepository;

@Service
public class VacationServiceImpl implements VacationService {
	@Autowired
	private VacationRepository vacaRepo;
	
	@Autowired
	private CommentRepository commentRepo;

	@Override
	public List<Vacation> listAllVacations() {
		return vacaRepo.findAll();
	}

	@Override
	public Vacation getVacation(int vacaId) {
		Vacation vaca = null;
		Optional<Vacation> vacaOpt = vacaRepo.findById(vacaId);
		if (vacaOpt.isPresent()) {
			vaca = vacaOpt.get();
		}
		return vaca;
	}

	@Override
	public Vacation create(Vacation newVaca) {
		Vacation vaca = vacaRepo.saveAndFlush(newVaca);
		return vaca;
	}

	@Override
	public Vacation update(int vacaId, Vacation vaca) {
		Optional<Vacation> optVaca = vacaRepo.findById(vacaId);
		Vacation updated = optVaca.get();
		if (updated != null) {
			updated.setCountry(vaca.getCountry());
			updated.setProvince(vaca.getProvince());
			updated.setImageUrl(vaca.getImageUrl());
			updated.setName(vaca.getName());
			updated.setDescription(vaca.getDescription());
		}
		return vacaRepo.saveAndFlush(updated);
	}

	@Override
	public boolean delete(int vacaId) {
		Optional<Vacation> optVaca = vacaRepo.findById(vacaId);
		if (optVaca.isPresent()) {
			Vacation vaca = optVaca.get();
			for (Comment comment : vaca.getComments()) {
				commentRepo.delete(comment);
			}
			vacaRepo.delete(vaca);
		}
		return true;
	}

}
