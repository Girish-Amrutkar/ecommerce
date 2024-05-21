const cart = [];

const handleCart =(state = cart, action)=>{
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            //if product already exist
            const exist = state.find((e)=>e.id === product.id);
            if (exist) {
                //increase quantity
                return state.map((e)=>e.id === product.id ? {...e, quantity: e.quantity + 1} : e);

            }else{
                const product = action.payload;
                return[
                    ...state,
                    {
                        ...product,
                        quantity: 1,
                    }
                ]
            }
            break;
        
        case "DELITEM":
            const exist1 = state.find((e)=>e.id === product.id);
            if (exist1.quantity === 1) {
                return state.filter((e)=>e.id !== exist1.id);
            }else{
                return state.map((e)=>e.id === product.id ?  {...e, quantity: e.quantity - 1} : e);

            }
            break;
    
        default:
            return state;
            break;
    }
}

export default handleCart;