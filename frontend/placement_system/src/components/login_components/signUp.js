import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import SignUp_bg from '../../assests/register_bg.jpg';
import axios from 'axios';

function SignUp() {
    const [firstname,setFirstName]=useState("");
    const [lastname,setLastName]=useState("");
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [gender,setGender]=useState("");
    const [dob,setDob]=useState("");
    const [email,setEmail]=useState("");
    const [course,setCourse]=useState("");
    const [startDate,setStartDate]=useState("");
    const [endDate,setEndDate]=useState("");
    const [class10Score,setClass10] = useState("");
    const [class12Score,setClass12] = useState("");
    const [gradScore,setGradScore] = useState("");
    const [postGradScore,setPostGrad] = useState("");

    // State variables for error messages
  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    gender: '',
    dob: '',
    course: '',
    startDate: '',
    endDate: '',
    class10Score: '',
    class12Score: '',
    gradScore: '',
    postGradScore: '',
  });

    const navigate =useNavigate();
    function gotoLogin(){
        navigate('/login');
    }
    const combinedUsername = `${firstname}_${lastname}`;
          
    async function save(event) {
      event.preventDefault();

       // Validation checks
    const validationErrors = {};
    if (!firstname) {
      validationErrors.firstname = 'First name is required';
    }
    if (!lastname) {
      validationErrors.lastname = 'Last name is required';
    }
    if (!email) {
      validationErrors.email = 'Email is required';
    }
    if (!password) {
      validationErrors.password = 'Password is required';
    }
    if (!gender) {
      validationErrors.gender = 'Gender is required';
    }
    if (!dob) {
      validationErrors.dob = 'Date of birth is required';
    }
    if (!course) {
      validationErrors.course = 'Course is required';
    }
    if (!startDate) {
      validationErrors.startDate = 'Course start date is required';
    }
    if (!endDate) {
      validationErrors.endDate = 'Course end date is required';
    }
    if (!class10Score) {
      validationErrors.class10Score = 'Class 10th score is required';
    }
    if (!class12Score) {
      validationErrors.class12Score = 'Class 12th score is required';
    }
    if (!gradScore) {
      validationErrors.gradScore = 'Graduation CGPA is required';
    }
    if (!postGradScore) {
      validationErrors.postGradScore = 'Master CGPA is required';
    }

    // Set validation errors
    setErrors(validationErrors);


      try {
        await axios.post("http://localhost:8080/api/students/create_student", {

          name:combinedUsername, 
          email:email,
          password:password,
          dob:dob,
          course:course,
          course_start:startDate,
          course_end:endDate,
          class10Score:class10Score,
          class12Score:class12Score,
          gradScore:gradScore,
          postGradScore:postGradScore,
          gender:gender           
        });
        alert("Employee Registation Successfully");
        navigate('/dashboard');
      } catch (err) {
        alert(err);
      }
    }

    


  return (

    
    <div className='grid  grid-cols-2 sm:grid-cols2 h-screen w-full'>
        <div className='bg-bg-color-primary flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto drop-shadow-lg p-4 rounded-lg bg-white'>
                
                <h2 className='p-2 text-4xl font-bold text-center text-bg-color-secondary'>Sign Up</h2>
                <form class="w-full max-w-lg">
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                          First Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                                id="grid-first-name" 
                                type="text" 
                                placeholder="Jane"
                                value={lastname}
                                onChange={(event) => {
                                  setLastName(event.target.value);
                                }}/>
                        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                          Last Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                      </div>
                    </div>
                    
                    <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/3 px-3 ml-8 mb-6 md:mb-0">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                        GENDER
                      </label>
                      <div class="relative">
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="grid-state"
                                onChange={(event)=>{setGender(event.target.value)}}>
                          <option value={"Male"}>MALE</option>
                          <option value={"Female"}>FEMALE</option>
                          <option value={"Other"}>OTHER</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>

                    <div class="w-full mx-4 md:w-1/2 px-3 mb-6 md:mb-0">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Date of birth
                      </label>
                      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                              id="grid-first-name" 
                              type="date"
                              placeholder="date"
                              onChange={(event) => {
                                setDob(event.target.value);
                              }}/>
                      <p class="text-red-500 text-xs italic">Pick your DOB!</p>
                    </div>
                  </div>



                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left" for="grid-email">
                          Email
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="grid-email" 
                                type="email" 
                                placeholder="person@mail.com"
                                onChange={(event) => {
                                  setEmail(event.target.value);
                                }}/>
                        <p class="text-gray-600 text-xs italic">Please enter a valid email address!</p>
                      </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left" for="grid-password">
                          Password
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="grid-password" 
                                type="password" 
                                placeholder="******************"
                                onChange={(event)=>{
                                  setPassword(event.target.value);
                                }}/>
                        <p class="text-gray-600 text-xs italic">Please Enter the Password</p>
                      </div>
                    </div>

                    
                      <div class="w-full  px-3 mb-6 md:mb-0 ">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2  text-left"  for="grid-state">
                          COURSE
                        </label>
                        <div class="relative">
                          <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="grid-state"
                            onChange={(event)=>{
                              setCourse(event.target.value);
                            }}>
                            <option value={"MCA"}>MCA</option>
                            <option value={"BTech_CS"}>BTECH(CS)</option>
                            <option value={"Bech_AIDS"}>BTECH(AIDS)</option>
                            <option value={"BTech_EXTC"}>BTECH(EXTC)</option>
                          </select>
                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>
                        </div>
                      </div>
                      
                      <div class="flex flex-wrap -mx-3 mb-6 mt-4">
                      <div class="flex w-full px-3 mb-6 md:mb-0">
                      <div class="w-5/6 pr-1">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                          Course Start
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                              id="grid-first-name" 
                              type="date" 
                              placeholder="date"
                              onChange={(event) => {
                                setStartDate(event.target.value);
                              }}/>
                        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                      </div>
                      <div class="w-5/6 pl-1">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                          Course End
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              id="grid-first-name" 
                              type="date" 
                              placeholder="date"
                              onChange={(event) => {
                                setEndDate(event.target.value);
                              }}/>
                        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                      </div>
                    </div>
                  </div>

                      <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="class10Score">
                      Class 10th Score
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="class10Score" type="number" step="0.01" placeholder="Enter your Class 10th Score"
                      onChange={(event)=>{
                        setClass10(event.target.value);
                      }}/>
                  </div>

                  <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="class12Score">
                      Class 12th Score
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="class12Score" type="number" step="0.01" placeholder="Enter your Class 12th Score"
                      onChange={(event)=>{
                        setClass12(event.target.value);
                      }}/>
                  </div>

                  <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="graduationCGPA">
                      Graduation CGPA
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="graduationCGPA" type="number" step="0.01" placeholder="Enter your Graduation CGPA"
                      onChange={(event)=>{
                        setGradScore(event.target.value);
                      }}/>

                  </div>

                  <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="masterCGPA">
                      Master CGPA (Till Now)
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="masterCGPA" type="number" step="0.01" placeholder="Enter your Master CGPA (Till Now)"
                      onChange={(event)=>{
                        setPostGrad(event.target.value);
                      }}/>
                  </div>

                      
                    
                </form>
                <div>
                    <button className='rounded-lg px-8 py-2 mt-2 bg-chocolate-brown text-white'
                      onClick={save}
                    >Submit</button>
                </div>
                <div className='grid grid-cols-2 mt-8'>
                    <div className ='flex p-2'>
                    <p className ='flex-1'>Already member?</p>
                    </div>
                    <div className ='flex p-2'>
                    <p className ='flex-1 hover:text-2xl text-bg-color-secondary ' onClick={gotoLogin}>Login</p>
                    </div> 
                </div>
                            

            </form>
        </div>

        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover'src={SignUp_bg} alt="Background Image"/>
        </div>
    </div>
  )
}

export default SignUp