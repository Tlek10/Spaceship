import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Button, Divider } from '@mui/material';
import { RootState } from '../../redux/store';
import cartEmpty from '../../img/cart-close-svgrepo-com.svg';
import { clearItems, decreaseQuantity, increaseQuantity, removeItem } from '../../redux/cart/cartSlice';
import './Cart.scss';
import {
    containerStyle,
    titleStyle,
    itemContainerStyle,
    itemNameStyle,
    itemPriceStyle,
    quantityControlStyle,
    removeButtonStyle,
    totalStyle,
    buttonContainerStyle,
    orderButtonStyle,
    clearCartButtonStyle,
} from './CartStyles';
import Swal from "sweetalert2";

const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.cart.items);

    const totalAmount = items.reduce((sum, item) => sum + (item.count * parseFloat(item.cost_in_credits || '0')), 0);

    const handleClearCart = () =>{
        dispatch(clearItems());

        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Cart cleaned!',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        });
    }

    return (
        <Box sx={containerStyle}>
            <Typography variant="h4" gutterBottom sx={titleStyle}>
                Shopping Cart
            </Typography>
            {items.length === 0 ? (
                <Box className="empty-cart">
                    <img src={cartEmpty} alt="Empty cart" />
                    <Typography className="empty-text">
                        Your cart is empty.</Typography>
                </Box>
            ) : (
                <>
                    {items.map(item => (
                        <Box key={item.name} sx={itemContainerStyle}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                                <Typography sx={itemNameStyle}>{item.name}</Typography>
                                <Typography sx={itemPriceStyle}>{item.cost_in_credits} credits</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Button
                                    variant="text"
                                    size="small"
                                    onClick={() => dispatch(decreaseQuantity(item.name))}
                                    sx={quantityControlStyle}
                                >
                                    -
                                </Button>
                                <Typography sx={{ minWidth: 32, textAlign: 'center' }}>{item.count}</Typography>
                                <Button
                                    variant="text"
                                    size="small"
                                    onClick={() => dispatch(increaseQuantity(item.name))}
                                    sx={quantityControlStyle}
                                >
                                    +
                                </Button>
                                <Button
                                    variant="text"
                                    size="small"
                                    onClick={() => dispatch(removeItem(item.name))}
                                    sx={removeButtonStyle}
                                >
                                    Remove
                                </Button>
                            </Box>
                        </Box>
                    ))}
                    <Divider sx={{ marginY: 2 }} />
                    <Typography variant="h6" sx={totalStyle}>
                        Total: {totalAmount} credits
                    </Typography>
                    <Box sx={buttonContainerStyle}>
                        <Button variant="contained" color="primary" sx={orderButtonStyle}>
                            Place Order
                        </Button>
                        <Button onClick={handleClearCart} variant="outlined" sx={clearCartButtonStyle}>
                            Clear Cart
                        </Button>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default Cart;
