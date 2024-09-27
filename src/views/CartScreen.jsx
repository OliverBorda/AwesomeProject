import React, { useEffect, useState } from 'react';
import CartItem from '../components/CartScreen/CartItem';
import OrderSummaryModal from '../components/CartScreen/OrderSummaryModal';
import { ScrollView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectCustomerData, setCustomerData } from '../features/customerSlice';
import { selectOrderInfo,removeProductToCart, incrementProductQuantity, decrementProductQuantity } from '../features/orderSlice';

const CartScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const orderInfo = useSelector(selectOrderInfo);
    const customerData = useSelector(selectCustomerData);

    const [showModal, setShowModal] = useState(false);
    const [localCustomerData, setLocalCustomerData] = useState(customerData);

    useEffect(() => {
        setLocalCustomerData(customerData);
    }, [customerData]);

    const handleIncrementQuantity = (productId) => {
        dispatch(incrementProductQuantity(productId));
    };

    const handleDecrementQuantity = (productId) => {
        dispatch(decrementProductQuantity(productId));
    };

    const handleRemoveFromCart = (productId) => {
        dispatch(removeProductToCart(productId));
    };

    const handlePay = () => {
        dispatch(setCustomerData(localCustomerData));
        // Vaciar el carrito después de la compra
        orderInfo.items.forEach(item => {
            dispatch(removeProductToCart(item.id)); // Asegúrate de que la acción vacíe el carrito correctamente
        });
        navigation.navigate("Home");
    };

    console.log('CartScreen');
    console.log("=================");
    console.log("");

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.sectionTitle}>Shopping Cart</Text>
            {orderInfo.items.length === 0 ? (
                <Text style={styles.emptyText}>Your cart is empty</Text>
            ) : (
                orderInfo.items.map((item) => (
                    <CartItem
                        key={item.id} 
                        item={item}
                        incrementQuantity={handleIncrementQuantity}
                        decrementQuantity={handleDecrementQuantity}
                        removeFromCart={handleRemoveFromCart}
                    />
                ))
            )}
            <Text style={styles.total}>Total: ${orderInfo.total.toFixed(2)}</Text>
            <TouchableOpacity style={styles.checkoutButton} onPress={() => setShowModal(true)}>
                <Text style={styles.checkoutButtonText}>Checkout</Text>
            </TouchableOpacity>
            <OrderSummaryModal
                showModal={showModal}
                setShowModal={setShowModal}
                orderInfo={orderInfo}
                localCustomerData={localCustomerData}
                setLocalCustomerData={setLocalCustomerData}
                handlePay={handlePay}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    emptyText: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 20,
    },
    total: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'right',
        marginTop: 10,
    },
    checkoutButton: {
        marginTop: 20,
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    checkoutButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default CartScreen;
