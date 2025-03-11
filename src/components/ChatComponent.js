// src/components/Chatbot.js

import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const handleSend = async () => {
        if (input.trim() === "") return;

        const newMessage = { text: input, sender: "user" };
        setMessages([...messages, newMessage]);

        try {
            const response = await axios.post(
                "https://api.openai.com/v1/chat/completions",
                {
                    model: "gpt-3.5", // or "gpt-3.5-turbo"
                    messages: [{ role: "user", content: input }],
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                    },
                }
            );

            const botMessage = {
                text: response.data.choices[0].message.content,
                sender: "bot",
            };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error("Error:", error);
        }

        setInput("");
    };

    return (
        <div className="flex flex-col w-full max-w-md h-96 border border-gray-300 rounded-lg p-4 bg-white mx-auto mt-8">
            <div className="flex-grow overflow-y-auto mb-4 space-y-2">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`p-2 rounded-lg max-w-xs ${msg.sender === "user"
                                ? "bg-blue-100 self-end text-right"
                                : "bg-red-100 self-start text-left"
                            }`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="flex">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => (e.key === "Enter" ? handleSend() : null)}
                    className="flex-grow p-2 border border-gray-300 rounded-l-lg"
                />
                <button
                    onClick={handleSend}
                    className="p-2 bg-blue-500 text-white rounded-r-lg"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
