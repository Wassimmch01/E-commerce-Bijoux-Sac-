import React, { useState } from 'react'
import Layout from './common/Layout'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, FreeMode, Navigation  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import ProductImg from '../assets/images/Mens/seven.jpg'
import ProductImg1 from '../assets/images/Mens/eight.jpg'
import ProductImg2 from '../assets/images/Mens/five.jpg'
import ProductImg3 from '../assets/images/Mens/four.jpg'
import { Rating } from 'react-simple-star-rating';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Product = () => {
    const [rating , setRating] = useState(4)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
        <Layout>
            <div className="container product-detail">
                <div className="row">
                    <div className="col-md-12">
                        <nav aria-label='breadcrumb'>
                            <ol className='breadcrumb py-5'>
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item"><a href="/shop">Shop</a></li>
                                <li className="breadcrumb-item active" aria-current='page'>Product</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-2">
                                <Swiper
                                    style={{
                                        '--swiper-navigation-color': '#000',
                                        '--swiper-pagination-color': '#000',
                                        }}
                                        onSwiper={setThumbsSwiper}
                                        loop={true}
                                        direction={`vertical`}
                                        spaceBetween={10}
                                        slidesPerView={6}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper mt-2"
                                    >
                                            
                                    <SwiperSlide>
                                        <div className='content'>
                                            <img 
                                                src={ProductImg2} 
                                                alt="" 
                                                height={100}
                                                className='w-100' />
                                        </div>                                                                      
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='content'>
                                            <img 
                                                src={ProductImg1} 
                                                alt="" 
                                                height={100}
                                                className='w-100' />
                                        </div>                                                                      
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='content'>
                                            <img 
                                                src={ProductImg3} 
                                                alt="" 
                                                height={100}
                                                className='w-100' />
                                        </div>                                                                      
                                    </SwiperSlide>
                                </Swiper>

                            </div>
                            <div className="col-10">
                                <Swiper
                                    style={{
                                    '--swiper-navigation-color': '#000',
                                    '--swiper-pagination-color': '#000',
                                    }}
                                    loop={true}
                                    spaceBetween={0}
                                    navigation={true}
                                    thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                                >
                                    
                                    <SwiperSlide >
                                        <div className='content'>
                                        <img 
                                            src={ProductImg} 
                                            alt="" 
                                            className='w-100' />
                                        </div>
                                    </SwiperSlide>   
                                    <SwiperSlide >
                                        <div className='content'>
                                        <img 
                                            src={ProductImg1} 
                                            alt="" 
                                            className='w-100' />
                                        </div>
                                    </SwiperSlide>           
                                </Swiper>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <h2>Product Title</h2>
                        <div className='d-flex'>
                            <Rating
                                size={20}
                                readonly
                                initialValue={rating}
                            />
                            <span className='pt-1 ps-2'>10 Reviews</span>
                        </div>
                        <div className="price h3 py-3">
                            20.00 DA <span className="text-decoration-line-through">180.00 DA</span>
                        </div>
                        <div>
                            100% Original Products <br />
                            Pay on delivery night be available <br />
                            Easy 15 days returns and exchanges <br />
                        </div>
                        <div className="pt-3">
                            <strong>Select Size</strong>
                            <div className="sizes pt-3">
                                <button className='btn btn-size'>S</button>
                                <button className='btn btn-size'>M</button>
                                <button className='btn btn-size'>L</button>
                            </div>
                        </div>
                        <div className="add-to-cart my-4">
                            <button className="btn btn-primary tex-uppercase">Add To Cart</button>
                        </div>
                        <hr />
                        <div className="">
                            <strong>SKU:</strong>
                            DFFGGG3
                        </div>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-md-12">
                        <Tabs
                            defaultActiveKey="profile"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="home" title="Description">
                                Tab content for Home
                            </Tab>
                            <Tab eventKey="profile" title="Reviews (10)">
                                Tab content for Profile
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </Layout>
    </div>
  )
}

export default Product