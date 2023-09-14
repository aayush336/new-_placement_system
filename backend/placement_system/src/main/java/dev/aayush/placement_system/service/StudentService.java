package dev.aayush.placement_system.service;

import java.util.List;

import dev.aayush.placement_system.model.Student;

public interface StudentService {

	List<Student> get();
	
	Student get(int id);
	
	Student save(Student student);
	void delete(int id);
	
}
