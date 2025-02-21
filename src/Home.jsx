import Profile from './components/profile'
import Skills from './components/Skills'
import About from './components/About'
import Chatbot from './components/chatbot'
import Image from './components/Image'


export default function Home() {
    return (
        <div className='home'>
            <Profile/>
            <Skills />
            <About/>
            <Chatbot/>
            <Image/>
        </div>
    )
}