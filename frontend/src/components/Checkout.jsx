import React from 'react'
import Layout from './common/Layout'
import { Link } from 'react-router-dom'
import ProductImg from '../assets/images/Mens/eight.jpg'


const Checkout = () => {
  return (
    <Layout>
        <div className="container pb-5">
            <div className="row">
                <div className="col-md-12">
                    <nav aria-label='breadcrumb'>
                        <ol className='breadcrumb py-5'>
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current='page'>Checkout</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <h3 className='border-bottom pb-3'>Billing Details</h3>
                    <form action="">
                        <div className="row pt-3">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input type="text" className='form-control' placeholder='Name'/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input type="text" className='form-control' placeholder='Email' />
                                </div>
                            </div>
                            <div className="mb-3">
                                <textarea name="" placeholder='Address' className='form-control' rows={3} id=""></textarea>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input type="text" className='form-control' placeholder='City'/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input type="text" className='form-control' placeholder='State' />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-5">
                    <h3 className="border-bottom pb-3"><strong>Items</strong></h3>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td width={100}>
                                    <img src={ProductImg} alt="" width={80} />
                                </td>
                                <td width={600}>
                                    <h4>Product Title</h4>
                                    <div className="d-flex align-items-center pt-3">
                                        <span>100.00 DA</span>
                                        <div className="ps-3">
                                            <button className="btn btn-size">S</button>
                                        </div>
                                        <div className='ps-3'>
                                            X 1
                                        </div>
                                    </div>
                                </td> 
                            </tr>       
                        </tbody>
                    </table>
                    <div className="row justify-content-end">
                        <div className="col-md-7">
                            <div className="d-flex justify-content-between border-bottom pb-2">
                                <div>Subtotal</div>
                                <div>20.00 DA</div>
                            </div>
                            <div className="d-flex justify-content-between border-bottom py-2">
                                <div>Shipping</div>
                                <div>20.00 DA</div>
                            </div>
                            <div className="d-flex justify-content-between py-2">
                                <div><strong>Grand Total</strong></div>
                                <div>20.00 DA</div>
                            </div>
                            <h3 className="border-bottom pt-4 pb-3"><strong>Payment Method</strong></h3>
                            <div>
                                <label htmlFor="" className='form-label ps-2'>COD</label>
                            </div>
                            <div className="d-flex justify-content-end py-3">
                                <button className="btn btn-primary">Pay Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Checkout