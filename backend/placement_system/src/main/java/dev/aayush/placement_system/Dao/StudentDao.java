package dev.aayush.placement_system.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.aayush.placement_system.model.Student;

public interface StudentDao extends JpaRepository<Student, Integer>{
	
	
}
