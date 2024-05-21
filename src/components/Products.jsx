import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { ProductServices } from './ProductServices';

export const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = ProductServices.getAllProducts()
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                componentMounted = false;
            }
        }
    })

    const Loading = () => {
        return (
            <>
               <div className="col-md-3">
                <Skeleton height={350}/>
               </div>
            </>
        )
    }

    const filterProduct = (cat) =>{
        const updatedList = data.filter((e)=>e.category === cat);
        setFilter(updatedList);
    }


    const ShowProducts = () => {
        return (
            <>
                <div className="buttons">
                    <button className="btn btn-outline-dark" onClick={()=>setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Wear</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>Women's Wear</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewellery</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronics</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3">
                                <div class="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} class="card-img-top" alt={product.title} height="250px"/>
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                            <p class="card-text">&#x20b9;{product.price}</p>
                                            <NavLink to={`/products/${product.id}`} class="btn btn-outline-warning">Buy Now</NavLink>
                                        </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}
