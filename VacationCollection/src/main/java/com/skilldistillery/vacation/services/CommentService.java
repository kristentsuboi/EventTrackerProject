package com.skilldistillery.vacation.services;

import java.util.List;

import com.skilldistillery.vacation.entities.Comment;

public interface CommentService {
	List<Comment> getCommentsForVacation(int vacaId);
	Comment addCommentToVaca(int vacaId, Comment comment);
	void deleteCommentById(int vacaId, int commentId);

}
