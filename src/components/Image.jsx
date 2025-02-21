import {motion} from 'framer-motion'

export default function Image() {
    return (
        <motion.div className="image"
        initial={{
            opacity: 0,
            scale:0.4
        }}
        animate={{
            opacity:1,
            scale:1
        }}
        transition={{
            duration: 1,
        }}
        >
            <img src="/who.png" alt="my image" />
        </motion.div>
    )
}