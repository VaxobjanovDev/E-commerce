export const addToCart = (product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}

export const deleteItemCart = (product)=>{
    return{
        type:"DELETEITEM",
        payload:product
    }
}