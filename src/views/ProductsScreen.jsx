import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { useOrder } from '../contexts/OrderContext';
import { useCustomer } from '../contexts/CustomerContext';

const ProductsScreen = ({ route, navigation }) => {
    const { categoryId } = route.params;
    const { orderInfo, setOrderInfo } = useOrder();

    const products = [
        {
            "id": 1,
            "name": "Smartphone",
            "description": "Latest model",
            "price": 999,
            "image": "https://via.placeholder.com/150",
            "category": 1,
            "quantity": 1
        },
        {
            "id": 2,
            "name": "Laptop",
            "description": "Powerful performance",
            "price": 1299,
            "image": "https://via.placeholder.com/150",
            "category": 1,
            "quantity": 1
        },
        {
            "id": 3,
            "name": "T-shirt",
            "description": "Comfortable cotton",
            "price": 19.99,
            "image": "https://via.placeholder.com/150",
            "category": 2,
            "quantity": 1
        },
        {
            "id": 4,
            "name": "Jeans",
            "description": "Classic fit",
            "price": 49.99,
            "image": "https://via.placeholder.com/150",
            "category": 2,
            "quantity": 1
        },
        {
            "id": 5,
            "name": "Blender",
            "description": "High-speed blender",
            "price": 89.99,
            "image": "https://via.placeholder.com/150",
            "category": 3,
            "quantity": 1
        },
        {
            "id": 6,
            "name": "Toaster",
            "description": "Compact and efficient",
            "price": 29.99,
            "image": "https://via.placeholder.com/150",
            "category": 3,
            "quantity": 1
        },
        {
            "id": 7,
            "name": "Sofa",
            "description": "Comfortable leather sofa",
            "price": 499,
            "image": "https://via.placeholder.com/150",
            "category": 4,
            "quantity": 1
        },
        {
            "id": 8,
            "name": "Dining Table",
            "description": "Stylish dining table",
            "price": 299,
            "image": "https://via.placeholder.com/150",
            "category": 4,
            "quantity": 1
        },
        {
            "id": 9,
            "name": "Lamp",
            "description": "Modern desk lamp",
            "price": 39.99,
            "image": "https://via.placeholder.com/150",
            "category": 4,
            "quantity": 1
        },
        {
            "id": 10,
            "name": "Bookshelf",
            "description": "Wooden bookshelf",
            "price": 149.99,
            "image": "https://via.placeholder.com/150",
            "category": 4,
            "quantity": 1
        }
    ];

    // useEffect(() => {
    //     console.log('El componente ProductsScreen se ha montado');
    //     return () => {
    //         // Código a ejecutar cuando el componente se desmonta
    //         console.log('El componente ProductsScreen se ha desmontado');
    //     };
    // }, []); // El array vacío asegura que el efecto solo se ejecute en el montaje y desmontaje

    // useEffect(() => {
    //     console.log('El componente ProductsScreen se ha actualizado');
    // }); // Sin dependencias asegura que se ejecute en cada renderizado

    const handleProductPress = (product) => {
        const newItems = [...orderInfo.items, product];
        const newTotal = orderInfo.total + product.price;
        setOrderInfo({
            items: newItems,
            total: newTotal
        });
        // Mostrar mensaje de confirmación
        Alert.alert("Product Added", `${product.name} has been added to your cart.`);
    };

    return (
        <View>
            <View style={styles.grid}>
                {products.filter(product => product.category === categoryId).map((product) => (
                    <TouchableOpacity
                        key={product.id}
                        style={styles.card}
                        onPress={() => handleProductPress(product)}
                    >
                        <Image source={{ uri: product.image }} style={styles.cardImage} />
                        <Text style={styles.cardTitle}>{product.name}</Text>
                        <Text style={styles.cardDescription}>{product.description}</Text>
                        <Text style={styles.cardPrice}>${product.price.toFixed(2)}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.btnContainter}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Cart")}>
                    <Text style={styles.btnText}>Go to cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    grid: {
        marginTop: '5%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    card: {
        width: '48%',
        backgroundColor: '#f9f9f9',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        alignItems: 'center',
    },
    cardImage: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    cardPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    btnContainter: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: '#e33f3d',
        padding: '1%',
        borderRadius: 30
    },
    btnText: {
        color: '#FFF',
        fontSize: 20
    }
});

export default ProductsScreen;
