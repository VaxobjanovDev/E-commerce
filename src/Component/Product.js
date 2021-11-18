import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({filter}) => {
    return (
        <>
          {filter.map((product)=>{
              return (
                  <div className='col-lg-3 col-md-4 col-sm-6 my-2'>
                      <div className='card h-100 text-center p-4' key={product.id}>
                          <img src={product.image} height='300px'/>
                          <div className='card-body mt-5'>
                              <h4 className='card-title mx-3'>{product.title.substring(0,20)}</h4>
                              <p className='card-text lead '>${product.price}</p>
                              <Link to={`/products/${product.id}`} className='btn btn-dark'>Buy Now</Link>
                          </div>
                      </div>
                  </div>
              )
          })}  
        </>
    )
}

export default Product
