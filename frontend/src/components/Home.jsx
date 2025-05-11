import React from 'react'
import LatestProducts from './common/LatestProducts';
import FeaturedProducts from './common/FeaturedProducts';
import Header from './common/Header';
import Footer from './common/Footer';
import Hero from './common/Hero';
import Layout from './common/Layout';

const Home = () => {
  return (
    <div>
        <Layout>
            <Hero/>
            <LatestProducts />
            <FeaturedProducts />
        </Layout>
        
    </div>
  )
}

export default Home