import React from 'react';

import { useSpring, animated } from 'react-spring'; 

import { Container, Box, Path } from './styles';

const Star = () => {
    const SpringProps = useSpring(
        { config: { duration: 5000 } },
        {opacity:1, from: {opacity: 0}},
        { delay: 1000}
        );
    const TriProps = useSpring(
        { config: {duration: 500}},
        {
            x: 400,
            from: {
                x: 0,
            }
        }
    );
    return(
        <div>
            <animated.h1 style ={SpringProps} >Hey i will fade in just refresh page</animated.h1>
            {/* react-spring */}
            <Container>
                <svg fill="transparent" stroke="black" xmlns="http://wwww.w3.org/svg/2000" >
                    <animated.path strokeDasharray={400} strokeDashoffset={TriProps} d="M 50 0 L 0 100 L 100 100 Z" stroke-width="2"/>
                </svg>
            </Container>
            {/* using Keyframes */}
            <Box>
                <svg fill="transparent" stroke="yellowgreen" xmlns="http://www.w3.org/svg/2000" >
                    <Path d="M 50 0 L 0 100 L 100 100 Z" strokeWidth="2" />
                </svg>
            </Box>

        </div>
    );
}

export default Star;