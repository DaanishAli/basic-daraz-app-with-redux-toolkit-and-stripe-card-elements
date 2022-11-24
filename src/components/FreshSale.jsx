import React from 'react'

import { Box } from '@mui/system'
import { Grid, Typography } from '@mui/material'
import { orange, grey } from '@mui/material/colors';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { individualProduct } from '../features/productSlice'


const FreshSale = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.initProducts)


    return (
        <Box >

            <Typography variant="h6" color="#757575">Flash Sale</Typography>
            <Grid container
                columnSpacing={2}
                py={2}
                bgcolor="white">

                {products.map((product) => (
                    <Grid item md={2} xs={6} key={product.id} >
                        <Link to={`/details/${product.id}`} style={{ textDecoration: "none" }}>
                            <Box
                                onClick={() => {
                                    dispatch(individualProduct(product))

                                    localStorage.setItem("product", JSON.stringify(product))
                                }}

                                sx={{
                                    cursor: "pointer",
                                    "&:hover": {
                                        boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
                                    }
                                }}>
                                <img src={product.image} alt="" style={{ width: "100%" }} />
                                <Box sx={{ p: 1, color: "black" }}>
                                    <Typography className='hide-overflow-text' sx={{ fontSize: "14px" }}>
                                        {product.discription}</Typography>
                                    <Typography sx={{ fontSize: "18px", color: orange[900] }}>
                                        Rs.{product.discountPrice}

                                    </Typography>
                                    <Box display='flex'>
                                        <Typography sx={{ fontSize: "12px", textDecoration: "line-through", color: grey[500] }}> Rs.{product.price}</Typography>
                                        <Typography sx={{ fontSize: "12px", pl: 1 }}>-{product.discount}%</Typography>
                                    </Box>
                                </Box>

                            </Box>
                        </Link>
                    </Grid>
                ))}
            </Grid>

        </Box >
    )
}

export default FreshSale