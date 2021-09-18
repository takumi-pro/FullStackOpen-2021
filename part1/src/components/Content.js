import React from 'react'
import Part from './Part'

const Content = (props) => {
    const {
        part1,
        part2,
        part3,
        exercises1,
        exercises2,
        exercises3
    } = props
    
    return (
        <>
            <Part
                part={part1}
                exercises={exercises1}
            ></Part>
            <Part
                part={part2}
                exercises={exercises2}
            ></Part>
            <Part
                part={part3}
                exercises={exercises3}
            ></Part>
        </>
    )
}

export default Content
