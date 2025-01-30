import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AnimatedText from "./AnimatedText";
import "./MessagePage.css";

const MessagePage = () => {
    const { messageID } = useParams();
    const [message, setMessage] = useState("Fetching message...");

    useEffect(() => {
        const fetchMessage = async () => {
            if (!messageID) return; // Ensure messageID exists

            try {
                const response = await fetch(
                    `https://tutorium-tutors-backend.onrender.com/message/fetchMessage?messageID=${messageID}`,
                    {
                        method: "GET",  
                        mode: "cors",   
                    }
                );
                const data = await response.text();

                if (response.ok && data.message) {
                    setMessage(data.message);
                } else {
                    setMessage("Message not found.");
                }
            } catch (error) {
                console.error("Error fetching message:", error);
                setMessage("Failed to fetch message.");
            }
        };

        fetchMessage();
    }, [messageID]);

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
