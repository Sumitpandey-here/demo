import React from 'react'
import { navmenu } from './data/data'
import { firstportion } from './data/data'

const Navbar = () => {
    return (
        <div className='container my-2'>
            <div className='row'>
                <div className='col-5 h1'>
                    <img className='img-fluid' src={require('../components/data/images/droneplanet.png')} />
                </div>
                <div className='col-7'>
                    <div className='d-flex justify-content-end'>

                        {navmenu.map((nav) => {
                            return (
                                <div className='nav'>
                                    <div className='h5 m-3'>
                                        {nav}
                                    </div>

                                </div>
                            )
                        })}

                    </div>
                </div>

                <div className='mx-2 my-2'>
                    <div className='row'>

                        <div className='col-6 d-flex align-items-center'>
                            <div className='row'>
                                <div className='h3 '>
                                    {firstportion.title}
                                </div>
                                <div className=']h5'>
                                    {firstportion.title2}
                                </div>
                                <button className='w-25 my-3 text-white btn-lg'>
                                    Contact us
                                </button>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='d-flex align-items-end'>
                                <img className="img-fluid" src={require('../components/data/images/data1.jpg')} alt='react' />
                            </div>
                        </div>
                    </div>



                </div>


            </div>

        </div>
    )
}

export default Navbar
