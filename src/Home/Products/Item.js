
import { ShoppingCart as Cart, FlashOn as Flash } from '@material-ui/icons';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { Box, Typography, makeStyles, CircularProgress, Button, Grid } from '@material-ui/core';
import ProductDetail from './ProductDetail';
import { useDispatch } from 'react-redux';
import { addToCart as add } from "../../Redux/Actions/actions";



const useStyle = makeStyles(theme => ({
    leftContainer: {
        minWidth: '40%',
        // textAlign: 'center',
        padding: '40px 0 0 80px',
        [theme.breakpoints.down('md')]: {
            padding: '20px 40px'
        }
    },
    productImage: {
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '95%'
    },
    button: {
        width: '100%',
        marginTop:'20px',
        borderRadius: 2,
        height: 50
    },
    addToCart: {
        background: '#ff9f00',
        color: '#FFF'
    },
    buyNow: {
        background: '#fb641b',
        color: '#FFF'
    },
    component: {
        marginTop: 55,
        background: '#F2F2F2'
    },
    container: {
        background: '#FFFFFF',
        // margin: '0 80px',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    rightContainer: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }
    },
    price: {
        fontSize: 28
    },
    smallText: {
        fontSize: 14,
    },
    greyTextColor: {
        color: '#878787'
    }
}));

const Item = ({ product }) => {
    const classes = useStyle();
    const dispatch = useDispatch();

    const addToCart = (product)=>{
        dispatch(add(product));
        console.log(product);
    }


    if (product) {
        return (





            <Box className={classes.component}>

                <Grid container className={classes.container}>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <Box className={classes.leftContainer}>
                            <img src={product.images[0]} alt='f' className={classes.productImage} /><br />
                            
                            <Button  onClick={() => addToCart(product)}  className={clsx(classes.button, classes.addToCart)} style={{ marginRight: 10,color:'white', backgroundColor:'orange' }} variant="contained"><Cart />Add to Cart</Button>

                            

                        </Box>
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
                        <Typography className={classes.price}>{product.title}</Typography>
                        
                        <Typography>
                            <span className={classes.price}>₹{Math.floor((product.price * 70))}</span>&nbsp;&nbsp;&nbsp;
                            <span className={classes.greyTextColor}><strike>₹{Math.floor((product.price * 70) + (product.price * 70 * 0.28))}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{Math.floor(100 - ((Math.floor((product.price * 70)) / Math.floor((product.price * 70) + (product.price * 70 * 0.28))) * 100))} off</span>
                        </Typography>
                        <ProductDetail product={product} />
                    </Grid>
                </Grid>
            </Box>
        )
    }
    else {
        <></>
    }

}

export default Item;