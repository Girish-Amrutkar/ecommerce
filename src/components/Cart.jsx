import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../redux/action';
import { deleteCart } from '../redux/action';

export const Cart = () => {
    const state = useSelector((state)=> state.addCart)
    const dispatch = useDispatch()

    const handleClose = (product) => {
        dispatch(deleteCart(product))
    }
    const cartItems = (product) =>{
        return(
            <div>
                <div className="container" key={product.id}>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={product.image} alt={product.title} height="200px" width={"180px"} />
                        </div>
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p className='lead fw-bold'>
                                {product.quantity} X &#x20b9;{product.price} = &#x20b9;{product.quantity * product.price}
                            </p>
                            <button className='btn btn-outline-dark me-4' onClick={() => handleClose(product)}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <button className='btn btn-outline-dark' onClick={() => handleClose(product)}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const emptyCart =()=>{
        return(
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
        </>
    )
}
