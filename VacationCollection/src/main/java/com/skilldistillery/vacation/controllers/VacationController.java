package com.skilldistillery.vacation.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.vacation.entities.Vacation;
import com.skilldistillery.vacation.services.VacationService;

@RestController
@RequestMapping("api")
public class VacationController {
	@Autowired
	private VacationService vacaService;

	@GetMapping("vacations")
	public List<Vacation> listAllVacations() {
		return vacaService.listAllVacations();
	}

	@GetMapping("vacations/{vacaId}")
	public Vacation getVacation(@PathVariable int vacaId, HttpServletResponse res) {
		Vacation vaca = vacaService.getVacation(vacaId);
		if (vaca == null) {
			res.setStatus(404);
		}
		return vaca;
	}
	@PostMapping("vacations")
	public Vacation addVacation(@RequestBody Vacation vaca, HttpServletResponse res, HttpServletRequest req) {
		Vacation newVaca = vacaService.create(vaca);
		res.setStatus(200);
		StringBuffer url = req.getRequestURL();
		url.append("/").append(newVaca.getId());
		res.setHeader("location", url.toString());
		return newVaca;
	}
	
	@PutMapping("vacations/{vacaId}")
	public Vacation update(@RequestBody Vacation vaca, @PathVariable int vacaId, HttpServletResponse res) {
		Vacation updated = vacaService.update(vacaId, vaca);
		return updated;
	}
	
	@DeleteMapping("vacations/{vacaId}")
	public boolean deleteVacation(@PathVariable int vacaId, HttpServletResponse res) {
		boolean deleted = vacaService.delete(vacaId);
		if (deleted) {
			res.setStatus(204);
		}
		return deleted;
	}
}
