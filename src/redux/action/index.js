// For Add Item to Card
export const addCart = (product)=>{
    return{
        type: "ADDITEM",
        payload: product
    }
}

// For delete Item from Cart
export const deleteCart = (product)=>{
    return{
        type: "DELITEM",
        payload: product
    }
}