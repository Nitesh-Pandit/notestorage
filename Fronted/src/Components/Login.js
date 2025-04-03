
import React ,{useState}from 'react'
import "../css/styles2.css";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email, password: user.password }),
      });
  
      const text = await response.text(); // Get raw response
      console.log("Raw response from server:", text); // Debugging
  
      try {
        const data = JSON.parse(text); // Try parsing JSON
        if (response.ok) {
          alert("Login successful!");
          navigate("/dashboard"); // Redirect
        } else {
          alert(data.message); // Show backend error message
        }
      } catch (jsonError) {
        console.error("JSON Parse Error:", jsonError);
        alert("Invalid server response. Please try again.");
      }
  
    } catch (error) {
      console.error("Network Error:", error);
      alert("Something went wrong. Please check your connection.");
    }
  };
  

  
  return (
    <div>
       <div className="container2 d-flex">
        <div className="left-panel w-50" >
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{marginLeft:"40px",marginRight:"40px",marginTop:"-30px"}}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img src="/images/image5.webp" className="d-block w-100 h-50 rounded " alt="Slide 1"/>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/image6.webp" className="d-block w-100 h-50 rounded" alt="Slide 2"/>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/goo.webp" className="d-block w-100 h-50 rounded" alt="Slide 3"/>
                    </div>
                </div>
               
            </div>
        </div>
       <div className="right-panel w-50 d-flex align-items-center justify-content-center text-white" style={{background: "transparent",boxShadow:"0px 0px 20px rgba(0, 0, 0, 0.2)"}}>
            <div className="form-container w-75 ">
                <h2>Login Now</h2>
                <p>Don't have account? <a href="login.html" className="text-warning">SignUp</a></p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="email" name="email" className="form-control" placeholder="Email" value={user.email} onChange={handleChange}required/>
                    </div>
                    <div className="mb-3">
                        <input type="password" name="password" className="form-control" placeholder="Enter your password" value={user.password} onChange={handleChange}  required/>
                    </div>
                    <button type="submit" className="btn btn-warning w-100">Login Now</button>
                </form>
                <div className="text-center mt-3">Or register with</div>
                  <div className="d-flex justify-content-between mt-3">
                                     <button className="btn btn-light w-48"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiufjMBMPwlCuWDLiEEd_e9Z6jHGRi8kP7oA&s" width="20" alt='Google' /> Google</button>
                    <button className="btn btn-light w-48"><img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" width="20" alt="Facebook"/> Facebook</button>
                </div>
                </div>
            </div>
            </div>
    </div>
  )
}
