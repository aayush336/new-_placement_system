package dev.aayush.placement_system.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import dev.aayush.placement_system.payloads.ApiResponse;

//Using this we will handle the exception globally

@RestControllerAdvice
public class GlobalExpceptionHandler {
	
	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<ApiResponse> resouceNotFoundExceptionHandler(ResourceNotFoundException ex){
		String msg = ex.getMessage();
		ApiResponse apiResp =new ApiResponse(msg,false);
		return new ResponseEntity<ApiResponse>(apiResp,HttpStatus.NOT_FOUND);
	}

}
