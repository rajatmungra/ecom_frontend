import { combineReducers } from "redux";

const badgeVal = (state=0, action)=>{
    if(action.type === 'BADGE'){
        return action.payload;
    }
    return state;
}

const order = (state='default', action)=>{
    if(action.type === 'ORDER'){
        return action.payload;
    }
    return state;
}

const fetchProducts = (state=[],action)=>{
    if(action.type==='PRODUCTS'){
        return action.payload;
    }

    return state;
}

const userData = (state={picture:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'},action)=>{
    if(action.type === 'LOGIN'){
        console.log(action.payload);
       return action.payload;
    }
    return state;
}

const  selectedCat = (state="ALL", action)=>{
    if(action.type === 'CATEGORY'){
        return action.payload;
    }
    return state;
}

const isLogin = (state, action)=>{
     if(localStorage.length !== 0){
            return true;
        }
        else{
            return false;
        }
}

const cart = (state=[], action)=>{
    if(action.type === 'ADDTOCART'){
        return [...state, action.payload]
    }
    if(action.type === 'REMOVECART'){
        return state.filter((p)=> action.payload.id === p.id? false:true)
    }
    return state;
}

export default combineReducers({
    badgeVal,
    fetchProducts,
    selectedCat,
    order,
    userData,
    isLogin,
    cart
})

