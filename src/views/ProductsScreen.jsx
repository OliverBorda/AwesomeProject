import React, { useEffect, useState } from 'react';
import ProductGrid from '../components/ProductsScreen/ProductGrid';
import GoToCartButton from '../components/ProductsScreen/GoToCartButton';

import { View, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart, removeProductToCart } from '../features/orderSlice';

const ProductsScreen = ({ route, navigation }) => {
    const { categoryId } = route.params;
    const dispatch = useDispatch();
    const [renderTime, setRenderTime] = useState(null);

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

    const handleProductPress = (product) => {
        dispatch(addProductToCart(product));
        Alert.alert("Product Added", `${product.name} has been added to your cart.`);
    };

    console.log('ProductsScreen');
    console.log("=================");
    console.log("");

    return (
        <View>
            <ProductGrid
                products={products.filter(product => product.category === categoryId)}
                onProductPress={handleProductPress}
            />
            <GoToCartButton onPress={() => navigation.navigate("Cart")} />
        </View>
    );
};

export default ProductsScreen;
