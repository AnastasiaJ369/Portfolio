import React from 'react'
import Typewriter from 'typewriter-effect';

function type() {
    return (
        <Typewriter
            options={{
                strings: ['A designer,', 'A developer,', 'A programmer.'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    )
}


export default type