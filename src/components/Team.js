import React from 'react'
import { team } from './data/data'
import { teamdata } from './data/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Team = () => {
    return (
        <div className='container my-5'>
            <div className='row'>

                <div className='col-4'>
                    <div className='h2 '>
                        {team.title}
                    </div>

                    <div className='h6'>
                        {team.point}
                    </div>

                    <div className='fw-bold txt my-5 '>
                        All Crew <span className='ms-3'><FontAwesomeIcon icon={faArrowRight} /></span>
                    </div>
                    <div className='my-5'>
                        <img src={require('../components/data/images/progressbar.png')} />
                    </div>
                </div>

                <div className='col-8 setteam ps-4  '>
                    <div className='container'>

                        <div className='row '>

                            {teamdata.map((news) => {
                                return (
                                    <div className='col-3 my-5 shadow-sm g-4 '>
                                        <div className='row'>

                                            <div>
                                                <div className='d-flex'>
                                                    <img className="img-fluid aabbccc" src={require(`../components/data/images/${news.img}`)} />
                                                </div>

                                                
                                                <div className='h6 fw-bold my-2'>
                                                    {news.name}
                                                </div>

                                                <div>
                                                    {news.post}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )

                            })}

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Team
