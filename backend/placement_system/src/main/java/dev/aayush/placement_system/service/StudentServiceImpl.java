package dev.aayush.placement_system.service;

import java.util.List;
import java.util.stream.Collectors;

import org.aspectj.weaver.patterns.ThisOrTargetAnnotationPointcut;
import org.hibernate.grammars.hql.HqlParser.NthSideClauseContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.aayush.placement_system.exception.*;
import dev.aayush.placement_system.Dao.StudentDao;
import dev.aayush.placement_system.model.Student;
import dev.aayush.placement_system.payloads.UserDto;
import jakarta.transaction.Transactional;
import lombok.Getter;
import lombok.Setter;

@Service
@Getter
@Setter
public class StudentServiceImpl implements StudentService {
	
	@Autowired
	private StudentDao studentDao;	
	
	@Override
	public UserDto createUser(UserDto studentDto) {
		// TODO Auto-generated method stub
		Student student = dtoToStudent(studentDto);
		Student saved = this.studentDao.save(student);
		return this.studentToDto(saved);
	}

	@Override
	public UserDto updateUser(UserDto studentDto, Integer student_id) {
		
		Student student = this.studentDao.findById(student_id).orElseThrow((() ->new ResourceNotFoundException("Student"," id ",student_id)));
		// TODO Auto-generated method stub
		
		student.setName(studentDto.getName());
		student.setPassword(studentDto.getPassword());
		student.setEmail(studentDto.getEmail());
		student.setInterview_exp(studentDto.getInterviewExp());
		student.setDob(studentDto.getDob());
		student.setPassed(studentDto.isPassed());
		student.setCourse(studentDto.getCourse());
		student.setCourse_start(studentDto.getCourse_start());
		student.setCourse_end(studentDto.getCourse_end());
		student.setGender(studentDto.getGender());
		student.setPlaced(studentDto.isPlaced());
		student.setCompany(studentDto.getCompany());
		student.setWork_exp(studentDto.getWork_exp());
		student.setClass10Score(studentDto.getClass10Score());
		student.setClass12Score(studentDto.getClass12Score());
		student.setGradScore(studentDto.getGradScore());
		student.setPostGradScore(studentDto.getPostGradScore());
		
		Student updateStudent = this.studentDao.save(student);
		UserDto userDto1 = this.studentToDto(updateStudent);
		return userDto1;
		}

	@Override
	public UserDto getUserById(Integer student_id) {
		// TODO Auto-generated method stub
		Student student  = this.studentDao.findById(student_id).orElseThrow(()-> new ResourceNotFoundException("User","Id",student_id));	
		return this.studentToDto(student);
	}

	@Override
	public List<UserDto> getAllUser() {
		// TODO Auto-generated method stub
		List<Student>  students = this.studentDao.findAll();
		List<UserDto>studentDtos =students.stream().map(student->this.studentToDto(student)).collect(Collectors.toList());
		
		return studentDtos ;
		
	}

	@Override
	public void deleteUser(Integer stud_id) {
		Student student=this.studentDao.findById(stud_id).orElseThrow(()-> new ResourceNotFoundException("User","Id" , stud_id));
	    	this.studentDao.delete(student);
	}
	
	//in this method we are fetching and storing the data from User Dto in 
	public Student dtoToStudent(UserDto studentDto) {
		Student st = new Student();
		st.setId(studentDto.getId());
		st.setName(studentDto.getName());
		st.setPassword(studentDto.getPassword());
		st.setEmail(studentDto.getEmail());
		st.setInterview_exp(studentDto.getInterviewExp());
		st.setDob(studentDto.getDob()); // Set date of birth
	    st.setPassed(studentDto.isPassed()); // Set passed status
	    st.setCourse(studentDto.getCourse()); // Set course
	    st.setCourse_start(studentDto.getCourse_start()); // Set course start date
	    st.setCourse_end(studentDto.getCourse_end()); // Set course end date
	    st.setGender(studentDto.getGender()); // Set gender
	    st.setPlaced(studentDto.isPlaced()); // Set placed status
	    st.setCompany(studentDto.getCompany()); // Set company
	    st.setWork_exp(studentDto.getWork_exp()); // Set work experience
	    st.setClass10Score(studentDto.getClass10Score()); // Set class 10 score
	    st.setClass12Score(studentDto.getClass12Score()); // Set class 12 score
	    st.setGradScore(studentDto.getGradScore()); // Set graduation score
		st.setPostGradScore(studentDto.getPostGradScore()); // Set post-graduation score

		
		return st;
	}
	public UserDto studentToDto(Student st) {
		UserDto dto = new UserDto();
		dto.setId(st.getId());
		dto.setName(st.getName());
		dto.setPassword(st.getPassword());
		dto.setEmail(st.getEmail());
		dto.setInterviewExp(st.getInterview_exp());
		dto.setDob(st.getDob()); // Set date of birth
	    dto.setPassed(st.isPassed()); // Set passed status
	    dto.setCourse(st.getCourse()); // Set course
	    dto.setCourse_start(st.getCourse_start()); // Set course start date
	    dto.setCourse_end(st.getCourse_end()); // Set course end date
	    dto.setGender(st.getGender()); // Set gender
	    dto.setPlaced(st.isPlaced()); // Set placed status
	    dto.setCompany(st.getCompany()); // Set company
	    dto.setWork_exp(st.getWork_exp()); // Set work experience
	    dto.setClass10Score(st.getClass10Score()); // Set class 10 score
	    dto.setClass12Score(st.getClass12Score()); // Set class 12 score
	    dto.setGradScore(st.getGradScore()); // Set graduation score
	    dto.setPostGradScore(st.getPostGradScore()); // Set post-graduation score
		return dto;			
	}
	
}
