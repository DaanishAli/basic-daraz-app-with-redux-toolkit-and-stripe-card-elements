import React from 'react'

import { Avatar, Box, Button, Grid, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { orange, grey } from '@mui/material/colors';
import { increment, decrement, removeToCart, addToProceed } from '../features/cart/cartSlice'


import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ShopingCart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart.Products)
    const TotalPrice = useSelector((state) => state.cart.TotalPrice)
    const TotalQuantity = useSelector((state) => state.cart.TotalQuantity)
    return (
        <div>
            {products.length > 0 ?
                <Grid container spacing={2} mt={10}>
                    <Grid item xs={6} md={8} >

                        {products.map((product, ind) => {
                            return (
                                <Grid container spacing={2} key={ind} bgcolor="white" >
                                    <Grid item md={2} >
                                        <Box>
                                            <img src={product.image} alt="product.img" srcSet="" style={{ width: "100%" }} />
                                        </Box>
                                    </Grid>
                                    <Grid item md={5} >
                                        <Box>
                                            <Typography className="hide-overflow-text">{product.discription}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item md={2} >
                                        <Box>
                                            <Typography sx={{ fontSize: "20px", color: orange[900] }}> Rs.{product.discountPrice}</Typography>
                                            <Typography sx={{ fontSize: "14px", textDecoration: "line-through", color: grey[500] }}> Rs.{product.price}</Typography>
                                            <Typography sx={{ fontSize: "14px", pl: 1 }}>-{product.discount}%</Typography>
                                            <IconButton aria-label="delete"
                                                onClick={() => dispatch(removeToCart(product))}
                                            >
                                                <DeleteIcon />
                                            </IconButton>

                                        </Box>
                                    </Grid>
                                    <Grid item md={3} >
                                        <Box display="flex" alignItems="center">
                                            <Avatar sx={{
                                                bgcolor: "grey", width: "30px", height: "30px",
                                                // cursor: "pointer",
                                                cursor: product.quantity <= 1 ? "no-drop" : "pointer"
                                            }} variant="square"
                                                onClick={() => dispatch(decrement(product))}

                                            >
                                                -
                                            </Avatar>
                                            <Typography px={2}>{product.quantity}</Typography>
                                            <Avatar sx={{ bgcolor: "grey", width: "30px", height: "30px", cursor: "pointer" }} variant="square"
                                                onClick={() => dispatch(increment(product))}
                                            >
                                                +
                                            </Avatar>
                                        </Box>
                                    </Grid>
                                </Grid>
                            ) })}

                    </Grid>
                    <Grid item xs={6} md={4} >
                        <Box>
                            <Typography variant="h5" align='center' mb={3}>Cart Summart</Typography>
                            <Typography>
                                Total Quantity : {TotalQuantity}
                            </Typography>
                            <Typography>
                                Total Price : {TotalPrice}
                            </Typography>
                        </Box>
                        <Link to={`/buy-now`} style={{ textDecoration: "none", width: "49%", }}>

                            <Button sx={{ bgcolor: orange[800], width: "100%", color: "white", "&:hover": { bgcolor: grey[500] } }}
                                onClick={() => dispatch(addToProceed())}

                            >Add to Proceed</Button>
                        </Link>
                    </Grid>
                </Grid >
                :
                <Box display="flex" justifyContent="center">
                    <Box>
                        <Typography variant="h4"> Your Cart is empty </Typography>
                        <Link to="/">
                            Continue Shopping
                        </Link>
                    </Box>
                </Box>
            }

        </div >
    )
}

export default ShopingCart