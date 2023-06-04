package com.skilldistillery.vacation.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.vacation.entities.Comment;
import com.skilldistillery.vacation.services.CommentService;

@RestController
@RequestMapping("api")
public class CommentController {
	
	@Autowired
	private CommentService commentService;
	
	@GetMapping("vacations/{vacaId}/comments")
	public List<Comment> listCommentsForVacation(@PathVariable Integer vacaId, HttpServletResponse res){
		List<Comment> comments = commentService.getCommentsForVacation(vacaId);
		if (comments == null) {
			res.setStatus(404);
		}
		return comments;
	}
	@PostMapping("vacations/{vacaId}/comments")
	public Comment addCommentToPost(@PathVariable int vacaId, @RequestBody Comment comment, HttpServletResponse res) {
		Comment newComment = commentService.addCommentToVaca(vacaId, comment);
		if (newComment == null) {
			res.setStatus(404);
		}
		return newComment;
	}
	@DeleteMapping("vacations/{vacaId}/comments/{commentId}")
	public void deleteCommentById(@PathVariable int vacaId, @PathVariable int commentId, HttpServletResponse res) {
		try {
			commentService.deleteCommentById(vacaId, commentId);
			res.setStatus(200);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			res.setStatus(404);
		}
	}

}
