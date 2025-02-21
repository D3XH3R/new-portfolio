import { useState } from "react";
import {motion} from 'framer-motion'  //? 16:00

export default function ChatBot() {
    const [visibility, setVisibility] = useState(false)
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState({
        question: '',
    })
    function inputHandle(event) {
        setInput(prevInput => ({...prevInput, [event.target.name]: event.target.value}))
    }


        
    const handleSend = (event) => {
        event.preventDefault()
        input.question = input.question.toLowerCase()
        if (!input.question.trim()) return;
    
        const userMessage = { text: input.question, sender: "user" };
        let botResponse = {
          text:"Sorry, I don't have an answer to that.",
          sender: "bot",
        };
        if (input.question.includes('projects')) {
            botResponse.text= "I've accomplished many web and python projects, including arbitrage bot and this portfolio site!"
        } else if(input.question.includes('hobbies')) {
            botResponse.text = "I'm chess enthusiast, I also love coding, watching series(SnowFall) best series ever."
        } else if(input.question.includes('live') || input.question.includes('country')) {
            botResponse.text = "I'm from unrecognized country named Somaliland."
        } else if(input.question.includes('job') || input.question.includes('work')) {
            botResponse.text = "sure, I currently working as a freelancer, and I'm ready for any job opportunity."
        }
         else if(input.question.includes('old') || input.question.includes('age')) {
            botResponse.text = "20."
        }
    
        setMessages([...messages, userMessage, botResponse]);
        setInput(prevInput => ({...prevInput, question: ''}));
      };
      function toggle() {
        setVisibility(prevState => !prevState)
      }
    return (
        <motion.div className="chatbotContainer"
        initial={{
            y: '70%',
            opacity: 0
        }}
        animate={{
            y: '0%',
            opacity:1
        }}
        transition={{
            duration: 3,
            delay:.3,
            type: 'spring',
            damping:35
        }}>
            <div className="svg" onClick={toggle}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z"/></svg></div>
            <div className={visibility ? "chat-dialog show" : "chat-dialog"}>
                <div className="message-dialog">
                    {messages.map((msg, index) => (
                        <div key={index} className={msg.sender}>
                            {msg.text}
                        </div>
                    ))}
                </div>
                <form>
                    <input type="text" value={input.question} name="question" placeholder="What can i help ?" onChange={inputHandle}/>
                    <button className="send"onClick={handleSend}><svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="white"><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"/></svg></button>
                </form>
            </div>
        </motion.div>
    )
}