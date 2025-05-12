import React from 'react'
import Layout from './common/Layout'
import ProductImg from '../assets/images/Mens/seven.jpg'

const Shop = () => {
  return (
    <div>
        <Layout>
            <div className="container product-detail">
                <nav aria-label='breadcrumb'>
                    <ol className='breadcrumb py-5'>
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current='page'>Shop</li>
                    </ol>
                </nav>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card shadow border-0 mb-3">
                            <div className="card-body p-4">
                                <h3>Categories</h3>
                                <ul>
                                    <li className='mb-2'>
                                        <input type="checkbox" />
                                        <label className='ps-2' htmlFor="">Sac's</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row pb-5">
                            <div className="col-md-4 col-6">
                                <div className="product card border-0">
                                    <div className="card-img">
                                        <img src={ProductImg} className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <a href="">Red Check Shirt for Men</a>
                                        <div className="price">
                                        700.00 DA <span className='text-decoration-line-through'>100.00 DA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-6">
                                <div className="product card border-0">
                                    <div className="card-img">
                                        <img src={ProductImg} className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <a href="">Red Check Shirt for Men</a>
                                        <div className="price">
                                        700.00 DA <span className='text-decoration-line-through'>100.00 DA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-6">
                                <div className="product card border-0">
                                    <div className="card-img">
                                        <img src={ProductImg} className='w-100' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <a href="">Red Check Shirt for Men</a>
                                        <div className="price">
                                        700.00 DA <span className='text-decoration-line-through'>100.00 DA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    </div>
  )
}

export default Shop