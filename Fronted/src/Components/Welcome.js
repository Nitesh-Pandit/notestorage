import React from 'react';
import "../css/styles1.css";
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <div>
       <section class="section">
        <div class="text-content">
            <h1><span>weL</span>Come,</h1>
            <p>Our notebook on cloud - safe and secure</p>
            <p>"An online web platform designed for you to effortlessly create, edit, upload, and organize your notes securely in the cloud. Whether you're a student, professional, or someone who loves jotting down ideas, iNotebook helps you stay organized without any hassle. With a user-friendly interface and powerful features, you can access your notes anytime, anywhere. Your data remains private and encrypted, ensuring complete security. Get started today and experience the ease of digital note-taking. For more details, check out our About Page and see how iNotebook can enhance your productivity!". <a href="#">About Page</a>.
            </p>
            <Link to="/notesDashboard" class="button"  style={{width:"250px"}}>
                Create New Note
            </Link>
        </div>

        <div class="image-content">
            <img src="/images/nitesh2.png" alt="iNotebook illustration"/>
        </div>
    </section>
    
    </div>
  )
}
