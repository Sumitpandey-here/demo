import React from 'react'
import { about } from './data/data'
const About = () => {
    return (
        <div className='container my-5'>
            <div className='row'>

                <div className='col-4'>
                    <img className='img-fluid' src={require('../components/data/images/arrow.png')} />
                </div>

                <div className=' col-8 h4 text-secondary my-3'>
                    {about.points}
                </div>

                <div className='row my-4'>
                    <div className=' d-flex col-6'>

                        <img className="img-fluid" src={require('../components/data/images/data4.jpg')} />

                    </div>

                    <div className='col-6 '>
                        <div className='h4 fw-bold'>
                            {about.title1}

                        </div>
                        <div className='h6'>
                            {about.points2}

                        </div>


                        <div className='container bgyellow py-2 text-white'>
                            <div className='row'>

                                <div className='h4'>
                                    {about.newtitle}
                                </div>
                                <div className='h5'>
                                <img className="img-fluid" src={require("../components/data/images/tickmark.png")}/> {about.newtitle1}
                                </div>
                                <div>
                                    {about.newpoints1}
                                </div>
                                <div className='h5'>
                                <img className="img-fluid" src={require("../components/data/images/tickmark.png")}/>   {about.newtitle2}
                                </div>
                                <div>
                                    {about.newpoints2}
                                </div>

                                <div className='h5'>
                                <img className="img-fluid" src={require("../components/data/images/tickmark.png")}/>  {about.newtitle3}
                                </div>
                                <div>
                                    {about.newpoints3}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About
