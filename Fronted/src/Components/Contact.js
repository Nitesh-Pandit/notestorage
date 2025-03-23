import React from 'react'
import "../css/contact.css";

export default function Contact() {
  return (
        <div className="contact-container">
        <div className="contact-card">
            <div className="left-panel">
                <h2>Write us</h2>
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="AdMike"/>
                <label for="email">E-mail</label>
                <input type="email" id="email" placeholder="admike@domain.com"/>
                <div className="checkbox">
                    <input type="checkbox" id="robot-check" style={{width:"30%",marginTop: "16px"}}/>
                    <label for="robot-check" style={{ width:"100%" }}>I am not a robot</label>
                </div>
            </div>
            <div className="right-panel">
                <label for="message">Message</label>
                <textarea id="message" placeholder="Write text here..."></textarea>
                <button type="submit" className="roo"style={{height:"50px"}}>SEND MESSAGE</button>
            </div>
        </div>
        </div>
  )
}
