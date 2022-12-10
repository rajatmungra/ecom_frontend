import { useEffect, useState } from "react";
import { fetchdata } from "../../Fetching/fetchProducts";
import { useSelector, useDispatch } from 'react-redux'
import { product_action, product_order } from "../../Redux/Actions/actions";
import styles from './Card.module.css'
import { addToCart as add } from "../../Redux/Actions/actions";
import { Link } from "react-router-dom";


const Products = () => {
    const data = useSelector((state) => state.fetchProducts);
    const dispatch = useDispatch();
    const showProduct = useSelector((state) => state.selectedCat);
    const order = useSelector((state)=> state.order)

    useEffect(() => {
        if(order === 'default'){
            dispatch(product_action());
        }
        else{
            dispatch(product_order(order))
        }
        
    }, [])


    const addToCart = (product)=>{
        dispatch(add(product));
        console.log(product);
    }


    return (
        <div className={styles.containerMain}>

            {data.map(product => {
                if (showProduct === 'ALL' || product.category === showProduct) {
                    return (
                        <div key={product.id} className={styles.shopCard}>

                           <Link to={`/item/${product.id}`}>
                            <a>
                                <div className={styles.title}>
                                    {product.title}
                                </div>
                                <div className={styles.desc}>
                                    {product.category}
                                </div>
                                <div className={styles.slider}>
                                    <img src={product.images[0]} alt={product.title} width={300} height={280} />
                                </div>
                            </a>

                            </Link>
                            <div className={styles.cta}>
                                <div className={styles.price}>₹{product.price * 70}</div>

                                <button
                                    className={styles.btn}
                                onClick={() => addToCart(product)}
                                >
                                    Add to Cart
                                    <span className={styles.bg} />
                                </button>
                            </div>
                            
                        </div>
                    )
                }
            }




            )
            }
        </div>
    )

}

export default Products;