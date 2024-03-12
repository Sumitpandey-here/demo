import React from 'react'
import { info } from './data/data'
const Info = () => {
    return (
        <div className='container my-4'>
            <div className='row'>
                <div className='col-5'>
                    <img className="img-fluid" src={require("../components/data/images/data2.jpg")} />
                </div>
                <div className='col-7 d-flex align-items-center ps-5'>
                    <div className='row'>


                        <div className='h3 text-success'>
                            {info.title1}
                        </div>
                        <div className='h1'>
                            {info.title2}
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='my-2'>
                                    <img src={require('../components/data/images/three_dot.png')} />
                                </div>



                                <div className='h4 my-2 text-success
                        '>
                                    {info.stitle1}
                                </div>
                                <div className='h5'>
                                    {info.stitle1points}
                                </div>
                            </div>
                            <div className='col-6 '>
                                <div className='my-4'>
                                    <img src={require('../components/data/images/four_dot.png')} />
                                </div>
                                <div className='h4 my-2 text-success    '>
                                    {info.stitle2}
                                </div>
                                <div className='h5'>
                                    {info.stitle2points}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Info
