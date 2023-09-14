package dev.aayush.placement_system.Dao;

import java.util.List;

import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import dev.aayush.placement_system.model.Student;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;

@Repository
public class StudentDaoImpl implements StudentDao {
	
	@PersistenceContext
	private EntityManager entityManager;
	
	@Override
	public List<Student> get() {
		// TODO Auto-generated method stub
		Session currentSession = entityManager.unwrap(Session.class);
		Query query =currentSession.createQuery("from Student",Student.class);
		List<Student> list =  query.getResultList();
		return list;
		}

	@Override
	public Student get(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Student save(Student student) {
		Session currentSession = entityManager.unwrap(Session.class);
	    currentSession.save(student);
	    return student;
		
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		
	}
	
	

}
