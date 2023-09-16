package dev.aayush.placement_system.service;

import java.util.List;

import dev.aayush.placement_system.model.Student;
import dev.aayush.placement_system.payloads.ApiResponse;
import dev.aayush.placement_system.payloads.LoginDto;
import dev.aayush.placement_system.payloads.LoginMessage;
import dev.aayush.placement_system.payloads.UserDto;

public interface StudentService {

	UserDto createUser(UserDto student);
	UserDto updateUser(UserDto student,Integer student_id);
	UserDto getUserById(Integer student_id);
	List<UserDto> getAllUser();
	void deleteUser(Integer user_id);
	ApiResponse loginStudent(LoginDto logindto);
}
