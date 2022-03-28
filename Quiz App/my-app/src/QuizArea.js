import React from 'react'
import Question from './Question'
import AnswerList from './AnswerList'
import UserGreeting from './UserGreeting';

function QuizArea(props) {
    if (props.isFinished) {
        return <UserGreeting right={props.correct} />
    }
    return (
        <div className='QuestionSection'>
            <Question dataSet={props.dataSet} />
            <AnswerList handleclick={props.handleClick} dataSet={props.dataSet} />

        </div>
    )
}
export default QuizArea;