import React from 'react'
import { news } from './data/data'
const News = () => {
    return (
        <div className='container'>
            <div className='row'>

                <div className='h3 my-4'>
                    Recent News <span className='ms-3'><img src={require("../components/data/images/line.png")}/></span>
                </div>

                {news.map((news) => {
                    return (
                        <div className='col-4 d-flex shadow'>
                            <div className='row'>

                                <div>
                                    <div>
                                        <img className="img-fluid news-image" src={require(`../components/data/images/${news.img}`)} />
                                    </div>
                                    <div className='h5'>
                                        {news.title}
                                    </div>

                                    <div>
                                        {news.name}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                })}



            </div>

        </div>
    )
}

export default News
