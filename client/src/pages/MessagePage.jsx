import React from "react";
import AnimatedText from "./AnimatedText";
import "./MessagePage.css";

const MessagePage = () => {
    const message = `Dear Tutorium Admin,
  
A tutor just created a new tutorial service. Review it for approval. Below are the details:

Tutorial Title: 
Category: 
Cost: 
Description: 
School: 
Date Created: 
Name: 
Email:
Number: 

Best regards,  
The Tutorium Team  

[Customer service email: tutorium.customer@gmail.com. Email us here.]`;

    return (
        <main className="message-container">
            <div className="message-box">
                <h1 className="message-title">Message from Tutorium</h1>
                <div className="message-content">
                    <pre className="message-pre">
                        <AnimatedText text={message} />
                    </pre>
                </div>
            </div>
        </main>
    );
};

export default MessagePage;
