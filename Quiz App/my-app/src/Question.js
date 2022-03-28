import React from 'react'

function Question(props) {
    return (
        <h2 className='question'>
            {props.dataSet.question}
        </h2>
    )
}

export default Question