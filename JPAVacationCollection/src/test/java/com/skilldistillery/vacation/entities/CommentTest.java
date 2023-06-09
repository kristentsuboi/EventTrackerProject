//package com.skilldistillery.vacation.entities;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.junit.jupiter.api.Assertions.assertNotNull;
//
//import javax.persistence.EntityManager;
//import javax.persistence.EntityManagerFactory;
//import javax.persistence.Persistence;
//
//import org.junit.jupiter.api.AfterAll;
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.BeforeAll;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//
//class CommentTest {
//
//	private static EntityManagerFactory emf;
//	private EntityManager em;
//	private Comment comment;
//
//	@BeforeAll
//	static void setUpBeforeClass() throws Exception {
//		emf = Persistence.createEntityManagerFactory("JPAVacationCollection");
//	}
//
//	@AfterAll
//	static void tearDownAfterClass() throws Exception {
//		emf.close();
//	}
//
//	@BeforeEach
//	void setUp() throws Exception {
//		em = emf.createEntityManager();
//		comment = em.find(Comment.class, 1);
//	}
//
//	@AfterEach
//	void tearDown() throws Exception {
//		em.close();
//		comment = null;
//	}
//
//	@Test
//	void test_Comment_basic_mapping() {
//		assertNotNull(comment);
//		assertEquals("Kristen", comment.getName());
//		assertEquals(1, comment.getVacation().getId());
//	}
//	
//	@Test
//	void test_Comment_Vacation_ManyToOne() {
//		assertNotNull(comment);
//		assertEquals("Amsterdam", comment.getVacation().getProvince());
//	}
//
//}
