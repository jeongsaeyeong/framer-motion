import React from 'react'
import { motion } from 'framer-motion'

const Section08 = () => {

    const icon = {
        hidden: {
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
            pathLength: 1,
            fill: "rgba(255, 255, 255, 1)"
        }
    }

    return (
        <section id='section08' className='react__item'>
            <span className='num'>08. svg</span>
            <motion.svg
                xmlns="http://www.w3.org/200/svg"
                viewBox="0 0 100 100"
                className='circle8'
            >
                <motion.path
                    d="M1 73.5L38.5 1.5L77.5 72.5L1 73.5Z"
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }}
                />

            </motion.svg>
        </section>
    )
}

export default Section08;
