    import React,{ Component } from "react";
    import axios from "axios";
    import { useNavigate } from "react-router-dom";
    
    
    import './SurveyComponent.css';
    // Import Font Awesome in your component file
    import 'font-awesome/css/font-awesome.min.css';


    export class SurveyComponent extends Component {
      
        
        constructor(props){
            super(props);
            this.state = {
                firstName : '',
                middleName : '',
                lastName : '',
                dateOfBirth : '',
                gender: 'male',
                course : '',
                course_start : '',
                course_end : '',
                passed: '',
                isHovered: false,
                isClicked: false,
                showMessage: false,
                work_exp:'',
                placed:'',
                company:'',
                interview_exp:'',
                email:'',
                class10Score:'',
                class12Score:'',
                gradScore:'',
                postGradScore:'',
            };
        }
        

        handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
        [name]: value,
        });

    };
        // Mouse events
        handleMouseEnter = () => {
            this.setState({ isHovered: true });
            this.setState({showMessage:true});
        };
        
        handleMouseLeave = () => {
            this.setState({ isHovered: false });
            this.setState({showMessage:false});
        };
        handleClick=()=>{
            this.setState((prevState) => ({
                showMessage: !prevState.showMessage, // Toggle message visibility
            }));
        }
        //Submit 
        handleSubmit = (event) => {
            const navigate = useNavigate();
            event.preventDefault();
            // You can handle the form submission here, e.g., send data to a server or display it.
            const { firstName, middleName, lastName ,dateOfBirth,gender,course,email,course_start,course_end,passed,placed,interview_exp,company,work_exp,class10Score,class12Score,gradScore,postGradScore} = this.state;
            console.log(`Name: ${firstName} ${middleName} ${lastName}`);
            console.log(`dob:  ${dateOfBirth}`);
            console.log(`gender:${gender}`);
            console.log(`selected course:${course} Completed? ${passed}`);
            console.log(`email:${email}`);
            console.log(`Start date : ${course_start}` + `End date : ${course_end}`);
            console.log(`Placed:${placed}, ${company}`);
            console.log(`Interview Expereience:${interview_exp}`);
            console.log(`work:${work_exp}`);
            console.log(`class10Score:${class10Score} class12Score:${class12Score} gradScore:${gradScore} postgradScore:${postGradScore}`);
            
            //Formatting Date
            function formatDate(inputDate) {
				  const parts = inputDate.split('/'); // Split the input date string by '/'
				  if (parts.length === 3) {
				    const [month, day, year] = parts;
				    // Create a new Date object with the components in the correct order (year, month, day)
				    const date = new Date(`${year}-${month}-${day}`);
				    // Format the date as "dd/mm/yyyy"
				    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
				    return formattedDate;
				  }
				  // Handle invalid input
				  return inputDate;
				}
            
            
            //Creating an object containing the data to be send to backend.
            const dataToSend =  {
                name: this.state.firstName+ this.state.middleName + this.state.lastName,
                dob: formatDate(this.state.dateOfBirth),
                gender: this.state.gender,
                course: this.state.course,
                email: this.state.email,
                course_start: formatDate(this.state.course_start),
                course_end: formatDate(this.state.course_end),
                passed: this.state.passed,
                placed: this.state.placed,
                interview_exp: this.state.interview_exp,
                company: this.state.company,
                work_exp: this.state.work_exp,
                class10Score: this.state.class10Score,
                class12Score: this.state.class12Score,
                gradScore: this.state.gradScore,
                postGradScore: this.state.postGradScore
            };
            //Sending the data by using post request to backend server
            const apiUrl = process.env.REACT_APP_API_URL;

            axios.post('http://localhost:8080/api/students',dataToSend)
            .then(function (response) {
                console.log("Succesfully sent!! "+response.data)
                navigate("/dashboard")
            })
            .catch((err)=>{console.error("Error Sending data to backend server =====>",err);});


        };


        render() {

            const { inputValue, showMessage } = this.state;


            return(
            <div className="background-group p-5">
            <div className="p-5 md:container md:mx-auto border-group bg-slate-50 m-5" > 
                <h1 className="md:container md:mx-auto bg-red-900  text-4xl p-5 font-abc rounded-md text-cyan-50 text-center" >Vesit Placement Cell</h1>
                <hr className="h-1 bg-black m-1"/>
                <h2 className="h-12 text-2xl font-abc text-center">Placement Form</h2>
                <form onSubmit={this.handleSubmit}>
                

                <h4>Name</h4>
                <div className="nameGroup">
                    
                    <div className="grid grid-rows-2 p-2">
                        <input className="text-box"
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                        />
                        <label>First Name</label>
                    </div>

                    <div className="grid grid-rows-2 p-2">
                        <input className="text-box"
                        type="text"
                        name="middleName"
                        value={this.state.middleName}
                        onChange={this.handleInputChange}
                        />
                        <label>Middle Name</label>
                    </div>

                    <div className="grid grid-rows-2 p-2 ">
                        <input className="text-box"
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        /> 
                        <label>Last Name</label>
                    </div>
                </div>

                <div className="dob_gender_Course_group my-5">
                    <div className="grid grid-rows-2 p-2">
                    <h4>Date of Birth?</h4>
                        <input 
                        type="date"
                        name="dateOfBirth"
                        className="text-box p-2"
                        value={this.state.dateOfBirth}
                        
                        onChange={this.handleInputChange}
                        />
                    </div>

                    <div className="grid grid-rows-2 p-2">
                    <h4>Gender?</h4>
                        <select 
                        name="gender"
                        className="text-box p-2"
                        value={this.state.gender}
                        onChange={this.handleInputChange}
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div className="grid grid-rows-2 p-2">
                    <h4>Course Pursuing?</h4>
                    <select 
                    name="course"
                    className="text-box p-2"
                    value={this.state.course}
                    onChange={this.handleInputChange}
                    >
                        <option value="BTech-EXTC">BTech-EXTC</option>
                        <option value="BTech-AIDS">BTech-AIDS</option>
                        <option value="BTech-CS">BTech-CS</option>
                        <option value="MCA">MCA</option>
                    </select>
                    </div>
                </div>

                <div className="email_Group  p-2">
                    <div className="Email text-center grid grid-cols-2">
                        <h4>Email</h4>
                        <div>
                            <input className="border-2 rounded-md shadow-sm w-full "
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            />
                            
                        </div>

                    </div>
                </div>


                <div className="duration_courseCompleted_Group">
                    <div className="Duration text-center">
                        <h4 className="text-center">Duration?</h4>
                        <div>
                            <label>Start Date</label>
                            <input 
                            type="date" 
                            name= "course_start" 
                            className="text-box p-2"
                            value={this.state.course_start}
                            onChange={this.handleInputChange}/>   
                            
                            <label>End Date</label>
                            <input 
                            type="date" 
                            className="text-box p-2"
                            name= "course_end" 
                            value={this.state.course_end}
                            onChange={this.handleInputChange}/>   

                        </div>         
                    </div>
                    <div className="courseCompletedGroup ">
                        <div className="text-center">
                        <h4 className="text-center">Course Completed?</h4>
                            <div className="radio-button-container">
                                <label>
                                <input
                                type="radio"   
                                name="passed"
                                value='true'                 
                                checked={this.state.passed==='true'}
                                onChange={this.handleInputChange}
                                />
                                <span className="custom-radio-button"></span>
                                Completed
                                </label>

                                <label>
                                <input
                                type="radio"  
                                name="passed"
                                value ='false'                   
                                checked={this.state.passed==='false'}
                                onChange={this.handleInputChange}
                                />
                                <span className="custom-radio-button"></span>
                                Pursuing
                                </label>                  
                            </div>    
                        </div>
                    </div>     
                </div>

            

                <div className="MarksGroup border-2 border-slate-700 rounded-md shadow-sm -space-y-px p-2 m-3">
                
                <div className="grid grid-cols-2">
                <h4 >Update your Scores</h4>
                <i className="fa fa-info-circle"  
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                        onClick={this.handleClick}
                        />
                </div>
                

                    <div className="class10 grid-cols-3">
                        <label>Class Xth: </label>
                        <input type="text" 
                        className="text-box m-2" 
                        name="class10Score"
                        value={this.state.class10Score}
                        onChange={this.handleInputChange}
                        />
                        {showMessage && <div className="message">Please Enter in Perecentage Format</div>}
                    </div>
                
                        
                        <div className="class12 grid-cols-3">
                        <label>Class XIIth: </label>
                        <input type="text" 
                        className="text-box m-2" 
                        name="class12Score"
                        value={this.state.class12Score}
                        onChange={this.handleInputChange}
                        />
                       
                        {showMessage && <div className="message">Please Enter in Perecentage Format</div>}

                    </div>
                
                        
                        <div className="grad">
                        <label>Graduation: </label>
                        <input type="text" 
                        className="text-box m-2" 
                        name="gradScore"
                        value={this.state.gradScore}
                        onChange={this.handleInputChange}
                        />
                        {showMessage && <div className="message">Please Enter in CGPA Format</div>}

                        </div>
                
                        
                        <div className="post-grad">
                        <label>Post-Graduation: </label>
                        <input type="text" 
                        className="text-box m-2" 
                        name="postGradScore"
                        value={this.state.postGradScore}
                        onChange={this.handleInputChange}
                        />
                        {showMessage && <div className="message">Please Enter in CGPA Format</div>}
                    </div>
                
                </div>

                <div className="workExpGroup grid grid-cols-2">
                <h4>Do You have any Previous Work Expereince?</h4>

                    <input type="number"
                    className="border-2 rounded-md shadow-sm p-5"
                    name="work_exp"
                    value={this.state.work_exp}
                    onChange={this.handleInputChange}
                    min="0"
                    max="30"
                    step="1"
                    
                    />
                </div>

                <div className="placedStatus_Companies_group mt-4">

                    <div className="placedStatus">
                        <h4>Did You Get Placed?</h4>
                        <div className="radio-button-container">
                            <label>
                            <input
                            type="radio"
                            name="placed"
                            value='true'                
                            checked={this.state.placed==='true'}
                            onChange={this.handleInputChange}
                            />
                            <span className="custom-radio-button"></span>
                            Placed
                            </label>

                            <label>
                            <input
                            type="radio"              
                            name="placed"
                            value='false'
                            checked={this.state.placed==='false'}
                            onChange={this.handleInputChange}
                            />
                            <span className="custom-radio-button"></span>
                            Not Placed
                            </label>
                        </div>
                    </div>
                
                    <div className="companiesGroup">
                    <h4>Enter the Company Name</h4>
                        <div>
                        <input 
                            type="text"
                            name="company"
                            className="text-box"
                            value={this.state.company}
                            onChange={this.handleInputChange}
                            />
                        </div>
                    </div>

                </div>
            

                <div className="InterviewExp">
                    <h4>Please tell us about your Interview Expereince / About How you Prepared?</h4>
                    <div className="bigText">
                    <textarea 
                        type="text"
                        name="interview_exp"
                        className="border-2 rounded-md shadow-sm w-full h-40 text-clip"
                        placeholder="Enter Your Text Here(Please make sure it under 300 words)" 
                        value={this.state.interview_exp}
                        onChange={this.handleInputChange}
                        />
                    </div>
                </div>

                <div className="Submit-button text-center ">
                    <button type="submit" className="py-3 px-8 bg-green-400 text-white font-abc text-center">Submit</button>
                </div>
                </form>
            </div>
            </div>
            );
            
        }
    }
    export default SurveyComponent;