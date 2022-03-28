import React from 'react'

function TotalIncorrect(props) {
    return (
        <h3 className='correct'>
            InCorrect: {props.incorrect}
        </h3>
    )
}

export default TotalIncorrect