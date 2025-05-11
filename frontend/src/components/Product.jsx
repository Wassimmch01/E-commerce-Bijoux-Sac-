import React, { useState } from 'react'
import Layout from './common/Layout'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, FreeMode, Navigation  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import ProductImg from '../assets/images/Mens/seven.jpg'


const Product = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
        <Layout>
            <div className="container">
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
                <div className="row">
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
                                                src={ProductImg} 
                                                alt="" 
                                                height={100}
                                                className='w-100' />
                                        </div>                                                                      
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='content'>
                                            <img 
                                                src={ProductImg} 
                                                alt="" 
                                                height={100}
                                                className='w-100' />
                                        </div>                                                                      
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='content'>
                                            <img 
                                                src={ProductImg} 
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
                                </Swiper>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">

                    </div>
                </div>
            </div>
        </Layout>
    </div>
  )
}

export default Product