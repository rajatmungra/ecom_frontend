import axios from "axios"



export const badgeValue = (value)=>{
    return {
        type:'BADGE',
        payload:value
    }
}

export const product_action = () => async dispatch => {
    const response = await axios.get('https://demo-04s3.onrender.com/products')
    dispatch({
        type:'PRODUCTS',
        payload: response.data
    })
}

export const product_order = (order) => async dispatch => {
    let response;
    if(order === 'default'){
         response = await axios.get(`https://demo-04s3.onrender.com/products`)
    }
    else{
         response = await axios.get(`https://demo-04s3.onrender.com/products/${order}`)
    }
    
    dispatch({
        type:'PRODUCTS',
        payload: response.data
    })
}


export const categorywise = (value)=>{
    return {
        type:'CATEGORY',
        payload: value
    }
}

export const login_action = (data) => async dispatch => {
    let response;
    
        response = await axios.post('https://demo-04s3.onrender.com/user/storeData',data)
        
    
    dispatch({
        type:'LOGIN',
        payload: data
    })
}

export const isLogin = ()=>{
    return {
        type:'ISLOGIN'
    }
}

export const addToCart =(product)=>{
    return{
        type:'ADDTOCART',
        payload: product
    }
}

export const removeCart = (product)=>{
    return{
        type : 'REMOVECART',
        payload: product
    }
}