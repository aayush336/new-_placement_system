package dev.aayush.placement_system.payloads;

import java.sql.Date;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor

public class UserDto {
	
	private int id;
	private String name;
	private String email;
	private String password;
	private String interview_exp;
	private Date dob;
	private boolean passed;
	private String course;
	private Date course_start;
	private Date course_end;
	private String gender; 
	private boolean placed;
	private String company;
	private int work_exp;
	private float class10Score; 
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getInterviewExp() {
		return interview_exp;
	}
	public void setInterviewExp(String interviewExp) {
		this.interview_exp = interviewExp;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public boolean isPassed() {
		return passed;
	}
	public void setPassed(boolean passed) {
		this.passed = passed;
	}
	public String getCourse() {
		return course;
	}
	public void setCourse(String course) {
		this.course = course;
	}
	public Date getCourse_start() {
		return course_start;
	}
	public void setCourse_start(Date course_start) {
		this.course_start = course_start;
	}
	public Date getCourse_end() {
		return course_end;
	}
	public void setCourse_end(Date course_end) {
		this.course_end = course_end;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public boolean isPlaced() {
		return placed;
	}
	public void setPlaced(boolean placed) {
		this.placed = placed;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public int getWork_exp() {
		return work_exp;
	}
	public void setWork_exp(int work_exp) {
		this.work_exp = work_exp;
	}
	public float getClass10Score() {
		return class10Score;
	}
	public void setClass10Score(float class10Score) {
		this.class10Score = class10Score;
	}
	public float getClass12Score() {
		return class12Score;
	}
	public void setClass12Score(float class12Score) {
		this.class12Score = class12Score;
	}
	public float getGradScore() {
		return gradScore;
	}
	public void setGradScore(float gradScore) {
		this.gradScore = gradScore;
	}
	public float getPostGradScore() {
		return postGradScore;
	}
	public void setPostGradScore(float postGradScore) {
		this.postGradScore = postGradScore;
	}
	private float class12Score;
	private float gradScore;
	private float postGradScore;
}
