import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import s from './ProductCard.module.css'
import Rating from '../rating/Rating';


export default function ProductCard() {

    const { id } = useParams(); 
    const [product, setProduct] = useState(null)


    useEffect( () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [id]);

    if (!product) {
        return <p>Loading...</p>;
    }
  return (
 
 <div className={s.wrapper} >

    <div className={s.card} key={product.id}>
            <h2>Product name: {product.title}</h2>
            <img className={s.image} src={product.image} alt={product.title}></img>
            <p>Price : {product.price} $</p>
            <p>Description: {product.description}</p>
            <Rating />
    </div>

    <Link to='/products' ><button className={s.button}>Go Back</button></Link>

 </div>
  )
}
