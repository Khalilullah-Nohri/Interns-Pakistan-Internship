import React from 'react'

export default function WidgetText(props) {
    return (

        <div>
            <div className='widgetWrap'>
                <div className='widgetTitle'>
                    {props.title}
                </div>
                <div className='widgetValue'>
                    <div className='value'>
                        {props.value}
                    </div>
                    <div className='description'>
                        {props.description}
                    </div>
                </div>
            </div>
        </div>
    )
}
