import React from 'react'
import Nav from '../Header/Nav/Nav';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Item from './Item';

export const Pro = () => {
    const param = useParams();
    const items = useSelector(state => state.fetchProducts)
    const product = items.filter((it)=> it.id == param.id ? true : false)
    
  return (
    <>
    <Nav show={false}/>
    <Item product ={product[0]}/>

    </>
      )
}
