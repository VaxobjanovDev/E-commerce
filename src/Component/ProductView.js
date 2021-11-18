import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {addToCart} from '../redux/action'
import Products from './Products'
const ProductView = () => {

    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const addProduct = (product)=>{
        dispatch(addToCart(product))
    }

    const getResponse = async () => {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          setProduct(await response.json());
          setLoading(false);
        }
    useEffect(()=>{
        getResponse()
    },[])

    return (
        <div className='container'>
            <div className='row mt-5'>
                {loading?"Loading":
                <>
                <div className='col-md-6 text-center'>
                    <img className='img-fluid w-75' src={product.image} />
                </div>
                <div className='col-md-6'>
                    <h3 className='text-uppercase text-black-50 mt-3'>{product.category}</h3>
                    <h1 className='display-5'>{product.title}</h1>
                    <h2 className=' display-4 fw-bold my-2'>${product.price}</h2>
                    <p className='lead'>{product.description}</p>
                    <button onClick={()=>addProduct(product)} className='btn  btn-outline-dark me-3'>Add To Cart</button>
                    <Link to='/cart' className='btn btn-dark'>Go To Cart</Link>
                </div>
                </>}
            </div>
        </div>
    )
}

export default ProductView
