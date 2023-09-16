package dev.aayush.placement_system.Dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import dev.aayush.placement_system.model.Student;


@Repository
@EnableJpaRepositories
public interface StudentDao extends JpaRepository<Student, Integer>{
	
    Optional<Student> findOneByEmailAndPassword(String email, String password);

    Student findByEmail(String email);

}
