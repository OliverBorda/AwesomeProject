import React from 'react';
import { Modal, ScrollView, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';

const OrderSummaryModal = ({ showModal, setShowModal, orderInfo, localCustomerData, setLocalCustomerData, handlePay }) => {
    return (
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
    );
};

const styles = StyleSheet.create({
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

export default OrderSummaryModal;
