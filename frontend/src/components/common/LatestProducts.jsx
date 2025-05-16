import React from 'react'
import ProductImg from '../../assets/images/Mens/seven.jpg'

const LatestProducts = () => {
  return (
    <div>
      <section className="section-2 py-5">
        <div className="container">
          <h2>New Arrivals</h2>
          <div className="row mt-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div className="col-md-3 col-6" key={index}>
                <div className="product card border-0">
                  <div className="card-img">
                    <img src={ProductImg} className='w-100' alt="Produit" />
                  </div>
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <a href="#">Red Check Shirt for Men</a>
                    <div className="price mb-2">
                      700.00 DA <span className="text-decoration-line-through">100.00 DA</span>
                    </div>
                    <button className="btn btn-voir-plus mt-2" >Voir plus</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default LatestProducts
