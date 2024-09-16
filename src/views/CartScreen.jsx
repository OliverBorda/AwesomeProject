import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Modal, TextInput } from 'react-native';
import { useOrder } from '../contexts/OrderContext';
import { useCustomer } from '../contexts/CustomerContext';

const CartScreen = ({ navigation }) => {
    const { orderInfo, setOrderInfo } = useOrder();
    const { customerData, setCustomerData } = useCustomer();

    const [showModal, setShowModal] = useState(false);
    const [localCustomerData, setLocalCustomerData] = useState(customerData);

    // useEffect(() => {
    //     console.log('El componente CartScreen se ha montado');
    //     return () => {
    //         // Código a ejecutar cuando el componente se desmonta
    //         console.log('El componente CartScreen se ha desmontado');
    //     };
    // }, []); // El array vacío asegura que el efecto solo se ejecute en el montaje y desmontaje

    // useEffect(() => {
    //     console.log('El componente CartScreen se ha actualizado');
    // }); // Sin dependencias asegura que se ejecute en cada renderizado

    useEffect(() => {
        // Sincronizar localCustomerData con customerData cuando customerData cambia
        setLocalCustomerData(customerData);
    }, [customerData]);

    const incrementQuantity = (index) => {
        const updatedItems = [...orderInfo.items];
        const itemToUpdate = updatedItems[index];
        updatedItems[index] = {
            ...itemToUpdate,
            quantity: (itemToUpdate.quantity || 1) + 1,
        };
        setOrderInfo((prevOrder) => ({
            ...prevOrder,
            items: updatedItems,
            total: updatedItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0),
        }));
    };

    const decrementQuantity = (index) => {
        const updatedItems = [...orderInfo.items];
        const itemToUpdate = updatedItems[index];
        updatedItems[index] = {
            ...itemToUpdate,
            quantity: Math.max((itemToUpdate.quantity || 1) - 1, 1),
        };
        setOrderInfo((prevOrder) => ({
            ...prevOrder,
            items: updatedItems,
            total: updatedItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0),
        }));
    };

    const removeFromCart = (index) => {
        setOrderInfo((prevState) => {
            const updatedItems = [...prevState.items];
            updatedItems.splice(index, 1);
            const updatedTotal = updatedItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
            return {
                ...prevState,
                items: updatedItems,
                total: updatedTotal,
            };
        });
    };

    const handleCheckout = () => {
        setShowModal(true);
    };

    // const handlePay = () => {
    //     // Limpiar el contexto de la orden
    //     setOrderInfo({
    //         items: [], // Restablecer la lista de artículos a un array vacío
    //         total: 0,  // Restablecer el total a 0
    //     });

    //     // Limpiar el contexto del cliente
    //     setCustomerData({
    //         name: '',
    //         email: '',
    //         phone: '',
    //     });

    //     // Navegar a la pantalla de inicio
    //     navigation.navigate('Home');
    // };

    const handlePay = () => {
        // Actualizar el contexto del cliente con los datos modificados
        setCustomerData(localCustomerData);

        // Limpiar el contexto de la orden
        setOrderInfo({
            items: [],
            total: 0,
        });

        // Navegar a la pantalla de inicio
        // navigation.navigate('Home');
    };
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.sectionTitle}>Shopping Cart</Text>
            {orderInfo.items.length === 0 ? (
                <Text style={styles.emptyCartText}>Your cart is empty</Text>
            ) : (
                orderInfo.items.map((item, index) => (
                    <View key={index} style={styles.cartItem}>
                        <Image source={{ uri: item.image }} style={styles.cartItemImage} />
                        <View style={styles.cartItemDetails}>
                            <Text style={styles.cartItemTitle}>{item.name}</Text>
                            <Text style={styles.cartItemDescription}>{item.description}</Text>
                            <Text style={styles.cartItemPrice}>${item.price.toFixed(2)}</Text>
                            <View style={styles.quantityContainer}>
                                <TouchableOpacity
                                    style={styles.quantityButton}
                                    onPress={() => decrementQuantity(index)}
                                >
                                    <Text style={styles.quantityButtonText}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantityText}>{item.quantity}</Text>
                                <TouchableOpacity
                                    style={styles.quantityButton}
                                    onPress={() => incrementQuantity(index)}
                                >
                                    <Text style={styles.quantityButtonText}>+</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={styles.removeButton}
                                onPress={() => removeFromCart(index)}
                            >
                                <Text style={styles.removeButtonText}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))
            )}
            {orderInfo.items.length > 0 && (
                <View style={styles.cartTotal}>
                    <Text style={styles.cartTotalText}>Total: ${orderInfo.total}</Text>
                    <TouchableOpacity style={styles.button} onPress={handleCheckout}>
                        <Text style={styles.buttonText}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* Modal para mostrar los detalles del checkout */}
            <Modal
                visible={showModal}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setShowModal(false)}
            >
                <View style={styles.modalContainer}>
                    <ScrollView style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Order Summary</Text>
                        <Text style={styles.modalSubtitle}>Customer Info:</Text>
                        <TextInput
                            style={styles.input}
                            value={localCustomerData.name}
                            onChangeText={(text) => setLocalCustomerData({ ...localCustomerData, name: text })}
                            placeholder="Name"
                        />
                        <TextInput
                            style={styles.input}
                            value={localCustomerData.email}
                            onChangeText={(text) => setLocalCustomerData({ ...localCustomerData, email: text })}
                            placeholder="Email"
                            keyboardType="email-address"
                        />
                        <TextInput
                            style={styles.input}
                            value={localCustomerData.phone}
                            onChangeText={(text) => setLocalCustomerData({ ...localCustomerData, phone: text })}
                            placeholder="Phone"
                            keyboardType="phone-pad"
                        />

                        <Text style={styles.modalSubtitle}>Order Details:</Text>
                        {orderInfo.items.map((item, index) => (
                            <View key={index} style={styles.modalItem}>
                                <Text>{item.name} - ${item.price.toFixed(2)} x {item.quantity || 1}</Text>
                            </View>
                        ))}
                        <Text style={styles.modalTotal}>Total: ${orderInfo.total.toFixed(2)}</Text>
                        <View style={styles.modalContainerButtons}>
                            <TouchableOpacity style={styles.modalButton} onPress={() => setShowModal(false)}>
                                <Text style={styles.modalButtonText}>Close Modal</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.modalButton2} onPress={() => { setShowModal(false), handlePay() }}>
                                <Text style={styles.modalButtonText}>Pay</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        flexGrow: 1,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    emptyCartText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#999',
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    cartItem: {
        flexDirection: 'row',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 10,
    },
    cartItemImage: {
        width: 80,
        height: 80,
        marginRight: 10,
    },
    cartItemDetails: {
        flex: 1,
    },
    cartItemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cartItemDescription: {
        fontSize: 14,
        color: '#666',
    },
    cartItemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    quantityButton: {
        backgroundColor: '#ddd',
        padding: 5,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    quantityButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    quantityText: {
        fontSize: 16,
    },
    removeButton: {
        marginTop: 10,
        backgroundColor: '#FF3B30',
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
    },
    removeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    cartTotal: {
        alignItems: 'center',
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        marginTop: 10,
    },
    cartTotalText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
    },
    modalContent: {
        width: '90%',
        maxHeight: '40%',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 20,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    modalSubtitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
    },
    modalText: {
        fontSize: 14,
        marginBottom: 5,
    },
    modalItem: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        paddingVertical: 5,
    },
    modalItemText: {
        fontSize: 14,
    },
    modalTotal: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    modalContainerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },
    modalButton: {
        width: '40%',
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    modalButton2: {
        width: '40%',
        backgroundColor: '#5a953d',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    modalButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default CartScreen;
