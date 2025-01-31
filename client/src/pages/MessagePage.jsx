import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AnimatedText from "./AnimatedText";
import "./MessagePage.css";

const MessagePage = () => {
    const { messageID } = useParams();
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {
        const fetchMessage = async () => {
            if (!messageID) return;

            try {
                const response = await fetch(
                    `https://tutorium-tutors-backend.onrender.com/message/fetchMessage?messageID=${messageID}`,
                    { method: "GET" }
                );
                const data = await response.text();

                if (response.ok && data) {
                    setMessage(data);
                } else {
                    setMessage("Message not found.");
                }
            } catch (error) {
                console.error("Error fetching message:", error);
                setMessage("Failed to fetch message.");
            } finally {
                setLoading(false); // Set loading to false when fetch completes
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
                        {loading ? "Loading message..." : <AnimatedText text={message} />}
                    </pre>
                </div>
            </div>
        </main>
    );
};

export default MessagePage;


