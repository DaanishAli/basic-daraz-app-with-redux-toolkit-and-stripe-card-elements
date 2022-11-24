import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Link } from "react-router-dom";

import { useSelector } from 'react-redux'



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export default function Appbar() {
    const products = useSelector((state) => state.cart.TotalQuantity)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: "space-between" }}>

                    <Link to={`/`} style={{ textDecoration: "none", color: "white" }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Home
                        </Typography>
                    </Link>
                    <Link to={`/shoping-cart`} style={{ textDecoration: "none", color: "white" }}>

                        <Badge color="secondary" badgeContent={products}>
                            <ShoppingCartIcon />
                        </Badge>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
