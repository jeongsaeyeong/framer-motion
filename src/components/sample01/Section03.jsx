import React from 'react'
import { motion } from 'framer-motion'

const Section03 = () => {
    return (
        <section id='section03' className='react__item'>
            <span className='num'>03 keyFrames</span>
            <motion.div
                className='circle'
                animate={{
                    scale: [1, 2, 1, 2.5, 1],
                    borderRadius: ["50%", "0", "50%", "0", "50%"],
                    rotate: [0, 0, 180, 180, 0]
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 1
                }}
            ></motion.div>
        </section>
    )
}

export default Section03