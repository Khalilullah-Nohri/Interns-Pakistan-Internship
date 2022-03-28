import React from 'react'

function UserGreeting(props) {
    let message = ""
    if (props.right >= 2)
        message = <h2  className='success'>"*****Congrats***** , U pass the test"</h2>
    else
        message = <h2 className='unsuccess'>"Try Next Time !!! Bad Perfomance" </h2>

    return (
        <h2 className='userGreeting'>
            {message}
        </h2>
    )
}

export default UserGreeting