import React from 'react'
import { question } from './data/data'
const Question = () => {
    return (
        <div className='container bgm my-4 py-5'>
            <div className='row text-white text-center py-5'>
                <div className='h3 py-2'>
                    {question.title}
                </div>

                <div className='py-2'>
                    {question.title2}
                </div>

                <div className='py-3'>
                    <button className='w-25 my-3 text-white btn-lg shadow'>
                        I Have Question
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Question
