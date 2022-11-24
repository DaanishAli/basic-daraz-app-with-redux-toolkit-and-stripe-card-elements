import { Grid, Box, Typography, Avatar, Button } from '@mui/material';
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { orange, grey, lightBlue } from '@mui/material/colors';
import { addToCart, buyToProduct } from '../features/cart/cartSlice'
import { Link, useNavigate } from 'react-router-dom';



const Details = () => {
    const navigate = useNavigate();
    // const product = useSelector((state) => state.product.product)
    const Products = useSelector((state) => state.cart.Products)

    var retrievedObject = localStorage.getItem('product');

    let product = JSON.parse(retrievedObject)


    let productQty
    let initialProduct = Products.find((prod) => {
        return prod.id === product.id
    })
    if (initialProduct) {

        productQty = initialProduct.quantity
    }
    else {
        productQty = 1
    }

    const dispatch = useDispatch()

    const [qty, setQty] = useState(productQty)
    const decrement = () => {
        if (qty > 1) {
            setQty(qty - 1)
        }
    }
    const increment = () => { setQty(qty + 1) }

    const addtocart = () => {
        const objCopy = { ...product }; // 👈️ create copy
        objCopy.quantity = qty;
        dispatch(addToCart(objCopy))
    }
    // const toComponentB = () => {
    //     const objCopy = { ...product }; // 👈️ create copy
    //     objCopy.quantity = qty;
    //     navigate('/buy-now', { state: objCopy });
    // }

    const buyproduct = () => {
        const objCopy = { ...product }; // 👈️ create copy
        objCopy.quantity = qty;
        dispatch(buyToProduct(objCopy))
    }
    return (
        <Box bgcolor="white" mt={10}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={3}>
                    <Box>
                        <img src={product.image} alt="" srcSet="" style={{ width: "100%" }} />
                    </Box>
                </Grid>
                <Grid item xs={6} md={5}>
                    <Box>
                        <Box sx={{ p: 1, color: "black" }}>
                            <Typography variant="h6">
                                {product.discription}</Typography>
                            <Typography sx={{ fontSize: "30px", color: orange[900] }}> Rs.{product.discountPrice}</Typography>
                            <Box display='flex'>
                                <Typography sx={{ fontSize: "20px", textDecoration: "line-through", color: grey[500] }}> Rs.{product.price}</Typography>
                                <Typography sx={{ fontSize: "20px", pl: 1 }}>-{product.discount}%</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Typography pr={3} sx={{ color: grey[500] }}>Quantity</Typography>
                        <Avatar sx={{ bgcolor: "grey", width: "30px", height: "30px", cursor: qty <= 1 ? "no-drop" : "pointer" }} variant="square"
                            onClick={decrement}
                        >
                            -
                        </Avatar>
                        <Typography px={2}>{qty}</Typography>
                        <Avatar sx={{ bgcolor: "grey", width: "30px", height: "30px", cursor: "pointer" }} variant="square"
                            onClick={increment}
                        >
                            +
                        </Avatar>
                    </Box>
                    <Box py={2} display="flex" sx={{ justifyContent: "space-between" }}>
                        <Link to={`/buy-now`} style={{ textDecoration: "none", width: "49%", }}>
                            <Button size="large" sx={{ width: "100%", boxShadow: "none", borderRadius: "2px", textTransform: "capitalize", bgcolor: lightBlue[300], color: "white", "&:hover": { bgcolor: lightBlue[400] } }}
                                // onClick={addtocart}
                                onClick={buyproduct}
                            >
                                Buy Now
                            </Button>
                        </Link>
                        <Link to={`/shoping-cart`} style={{ textDecoration: "none", width: "49%", }}>
                            <Button size="large" sx={{ width: "100%", boxShadow: "none", borderRadius: "2px", textTransform: "capitalize", bgcolor: orange[700], color: "white", "&:hover": { bgcolor: orange[800] } }}
                                onClick={addtocart}

                            >
                                Add to Cart
                            </Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} md={4}>

                </Grid>

            </Grid>
        </Box >
    )
}

export default Details