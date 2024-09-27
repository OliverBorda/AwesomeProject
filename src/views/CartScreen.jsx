import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useOrder } from '../contexts/OrderContext';
import { useCustomer } from '../contexts/CustomerContext';
import CartItem from '../components/CartScreen/CartItem';
import OrderSummaryModal from '../components/CartScreen/OrderSummaryModal';

const CartScreen = ({ navigation }) => {
    const { orderInfo, setOrderInfo } = useOrder();
    const { customerData, setCustomerData } = useCustomer();

    const [showModal, setShowModal] = useState(false);
    const [localCustomerData, setLocalCustomerData] = useState(customerData);

    useEffect(() => {
        setLocalCustomerData(customerData);
    }, [customerData]);

    const incrementQuantity = (index) => {
        const updatedItems = [...orderInfo.items];
        updatedItems[index].quantity = (updatedItems[index].quantity || 1) + 1;
        setOrderInfo({
            items: updatedItems,
            total: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        });
    };

    const decrementQuantity = (index) => {
        const updatedItems = [...orderInfo.items];
        updatedItems[index].quantity = Math.max(updatedItems[index].quantity - 1, 1);
        setOrderInfo({
            items: updatedItems,
            total: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        });
    };

    const removeFromCart = (index) => {
        const updatedItems = orderInfo.items.filter((_, i) => i !== index);
        setOrderInfo({
            items: updatedItems,
            total: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        });
    };

    const handlePay = () => {
        setCustomerData(localCustomerData);
        setOrderInfo({ items: [], total: 0 });
    };

    console.log('CartScreen');
    

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.sectionTitle}>Shopping Cart</Text>
            {orderInfo.items.length === 0 ? (
                <Text style={styles.emptyText}>Your cart is empty</Text>
            ) : (
                orderInfo.items.map((item, index) => (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                        incrementQuantity={incrementQuantity}
                        decrementQuantity={decrementQuantity}
                        removeFromCart={removeFromCart}
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
