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
public class CommentServiceImpl implements CommentService {

	@Autowired
	private CommentRepository commentRepo;
	@Autowired
	private VacationRepository vacaRepo;
	
	@Override
	public List<Comment> getCommentsForVacation(int vacaId) {
		if (!vacaRepo.existsById(vacaId)) {
			return null;
		}
		List<Comment> comments = commentRepo.findByVacation_Id(vacaId);
		return comments;
	}

	@Override
	public Comment addCommentToVaca(int vacaId, Comment comment) {
		Optional<Vacation> optVaca = vacaRepo.findById(vacaId);
		if (optVaca.isPresent()) {
			comment.setVacation(optVaca.get());
			commentRepo.saveAndFlush(comment);
			return comment;
		}
		return null;
	}

	@Override
	public void deleteCommentById(int vacaId, int commentId) {
		Optional<Vacation> optVaca = vacaRepo.findById(vacaId);
		if (optVaca.isPresent()) {
			Optional<Comment> optComment = commentRepo.findById(commentId);
			Comment comment = optComment.get();
			commentRepo.delete(comment);
		}
	}
}
