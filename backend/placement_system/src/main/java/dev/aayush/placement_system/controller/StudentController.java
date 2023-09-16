package dev.aayush.placement_system.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.aayush.placement_system.model.Student;
import dev.aayush.placement_system.payloads.ApiResponse;
import dev.aayush.placement_system.payloads.UserDto;
import dev.aayush.placement_system.service.StudentService;

@RestController
@RequestMapping("/api/students")
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	
	//get all user
//	@RequestMapping("/students")
//	public List<Student> get(){
//		return studentService.get();
//	}
	
	//Post: create user
	@PostMapping("/create_student")
	public ResponseEntity<UserDto> createStudent(@RequestBody UserDto studentDto){
		UserDto createUserDto = this.studentService.createUser(studentDto);
		
		return new ResponseEntity<>(createUserDto,HttpStatus.CREATED);
	}
	
	//PUT :  update user
	@PutMapping("/{userId}")
	public ResponseEntity<UserDto> updateStudent(@RequestBody UserDto studentDto,@PathVariable("userId") Integer userId){
		UserDto updatedStudent = this.studentService.updateUser(studentDto, userId);
		return ResponseEntity.ok(updatedStudent);
	}
	//Delete: remove user
	@DeleteMapping("/{userId}")
	public ResponseEntity<ApiResponse> DeleteStudent(@PathVariable("userId") Integer userId){
		 this.studentService.deleteUser(userId);
		 return new ResponseEntity<ApiResponse>(new ApiResponse("User with user id "+userId+" deleted Successully",true), HttpStatus.OK);
	}
	//get: get all user
	@GetMapping("/get_students")
	public ResponseEntity<List<UserDto>> getAllStudents(){
		return ResponseEntity.ok(this.studentService.getAllUser());
	}
	
	//get: get all user
	@GetMapping("/{studentId}")
	public ResponseEntity<UserDto> getAllStudents(@PathVariable Integer studentId){
		return ResponseEntity.ok(this.studentService.getUserById(studentId));
	}
	
}