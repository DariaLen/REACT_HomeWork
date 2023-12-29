import React, { useEffect, useState } from 'react'
import s from './Products.module.css'
import { Link } from 'react-router-dom';
import Rating from '../rating/Rating';



export default function Products() {


   
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
   return (
    <div className={s.card_wrapper}>
        {
            products.map(elem => {
                return(
                    <Link to={`/products/product/${elem.id}`} className={s.card} key={elem.id}>
                        <h3>{elem.title}</h3>
                        <p>{elem.price}</p> 
                       
                         <Rating rating={elem.rating.rate} />
                        
                    </Link>
                )
            })
        }
    </div>
  )
}
