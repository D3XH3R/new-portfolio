import {motion} from 'framer-motion'

export default function About() {
    return (
        <motion.div className="about common-styles"
        initial={{
            x: '-60%',
            opacity: 0
        }}
        animate={{
            x: '0%',
            opacity:1
        }}
        transition={{
            duration: .7,
            delay: .2,
        }}
        >
            <h3>
                About
            </h3>
            <p>👋 Hi, I&apos;m Hassan, a Computer Science student with a strong interest in programming, cybersecurity, and financial technology. I love building projects that solve real-world problems and continuously expanding my skill set.</p>
            <h5>What I do ?</h5>
            <ul>
                <li>Develop web applications using React, JS, and modern web technologies.</li>
                <li>Build and optimize Python projects, including automation and data analysis.</li>
                <li>Explore cybersecurity and ethical hacking.</li>
                <li>Work on crypto arbitrage bots to analyze and capitalize on market opportunities.</li>
            </ul>
            <h5>Hobbies & Interests</h5>
            <ul>
                <li>
                    ♟️ Chess enthusiast
                </li>
                <li>🎬 Watching series (Classroom of the Elite is a favorite)</li>
                <li>🚀 Always learning and working on new tech projects</li>
            </ul>
        </motion.div>
    )
}