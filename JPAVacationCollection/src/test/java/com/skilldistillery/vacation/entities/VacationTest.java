package com.skilldistillery.vacation.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class VacationTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Vacation vaca;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPAVacationCollection");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		vaca = em.find(Vacation.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		vaca = null;
	}

	@Test
	void test_Vacation_basic_mapping() {
		assertNotNull(vaca);
		assertEquals("Amsterdam", vaca.getProvince());
	}
//	
//	@Test
//	void test_Vacation_Comment_OneToMany() {
//		assertNotNull(vaca);
//		assertTrue(vaca.getComments().size() > 0);
//		assertEquals(1, vaca.getComments().size());
//	}

}
