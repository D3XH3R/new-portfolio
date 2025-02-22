import Profile from './components/profile'
import Skills from './components/Skills'
import About from './components/About'
import Chatbot from './components/chatbot'
import Image from './components/Image'

import {motion} from 'framer-motion'


export default function Home() {
    return (
        <motion.div className='home'
        initial={{
            border: 0,
            borderRadius:0
        }}
        animate={{
            border: "1px solid #00adb5",
            borderRadius: "10px",
        }}
        transition={{
            delay: 1,
        }}
        >
            <Profile/>
            <Skills />
            <About/>
            <Chatbot/>
            <Image/>
        </motion.div>
    )
}