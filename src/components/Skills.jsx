import {motion} from 'framer-motion'
export default function Skills() {
    return (
        <motion.div className="skills common-styles"
        initial={{
            x: '30%',
            opacity: 0
        }}
        animate={{
            x: '0%',
            opacity:1
        }}
        transition={{
            duration: 3,
            type: 'spring',
            damping:25
        }}
        >
            <h3>Skills</h3>
            <ul>
                <li><span>React:</span> I used react to build so many projects including this portfolio site.</li>
                <li><span>Python:</span> Arbitrage bot, is the project I build it with pure python with some libraries.</li>
                <li><span>JS:</span> One of the basics of web dev, I uses it to build a web based projects including the backend.</li>
                <li><span>Bootstrap:</span> For polishing websites along with <span className="css">CSS</span>.</li>
                <li><span>PHP:</span> For the backend.</li>
            </ul>
        </motion.div>
    )
}