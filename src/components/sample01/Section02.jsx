import React from 'react'
import { motion } from 'framer-motion'

const Section02 = () => {
    return (
        <section id='section02' className='react__item'>
            <span className='num'>01 animate</span>
            <motion.div
                className='circle'
                whileHover={{
                    scale: 0.2,
                    borderRadius: "10px",
                    rotate: 180
                }}

                whileTap={{
                    scale: 1.6,
                    rotate: -180,
                    borderRadius: "50%"
                }}
            ></motion.div>
        </section>
    )
}

export default Section02