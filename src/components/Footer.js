import React from 'react'

const Footer = () => {
    return (
        <div className='container-fluid bg-secondary py-5 px-4 mt-4'>
            <div className='row'>
                <div className='col-5'>
                    <div className='fw-bold'>
                        Drone Planet
                    </div>

                    <div>
                        Find us at
                    </div>

                    <div>
                        Sec-49,Gurugram,Haryana,India
                    </div>
                </div>

                <div className='col-7'>

                    <div className='row'>
                        <div className='col-4'>
                            <div className='fw-bold'>
                                Products
                            </div>
                            <div>
                                Office Building
                            </div>
                            <div>
                                Hotel&resort
                            </div>
                            <div>
                                Apartment
                            </div>
                            <div>
                                Mansion
                            </div>

                            <div>
                                Industrial Building
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='fw-bold'>
                                Quick links
                            </div>
                            <div>
                                Features
                            </div>
                            <div>
                                Prizing
                            </div>
                            <div>
                                Architecture
                            </div>
                            <div>
                                Interior
                            </div>
                            <div>
                                News
                            </div>
                        </div>
                        <div className='col-4'>

                            <div className='fw-bold'>
                                Join our newslater
                            </div>

                            <div>
                                Subscribe to our newsletter and stay up-to-date with the latest news, events, and promotions.
                            </div>

                            <button className='w-50 my-3 text-white'>
                                Subscribe
                            </button>

                        </div>

                    </div>

                </div>
                <hr className="my-4" />

                <div className='h6 text-center my-4 text-white'>
                Copyright ©️ 2023 Drone Planet. All right reseved.
                </div>

            </div>

        </div>
    )
}

export default Footer
