import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../views/HomeScreen';
import CartScreen from '../views/CartScreen';
import ProductsScreen from '../views/ProductsScreen';
import CategoriesScreen from '../views/CategoriesScreen';

export default function Routes() {

    const Stack = createNativeStackNavigator();

    useEffect(() => {
        const startTime = performance.now(); // Registrar el inicio de la carga
        return () => {
            const endTime = performance.now(); // Registrar cuando el componente se desmonta
            console.log(`Tiempo total de carga de la app: ${endTime - startTime} ms`);
        };
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                        // freezeOnBlur: true
                    }}
                    
                />

                <Stack.Screen
                    name="Categories"
                    component={CategoriesScreen}
                    options={{
                        headerTitle: 'Categories', 
                        headerBackTitleVisible: false, 
                        // freezeOnBlur: true
                    }}
                />
                <Stack.Screen
                    name="Products"
                    component={ProductsScreen}
                    options={{
                        headerTitle: 'Products',
                        headerBackTitleVisible: false,
                        // freezeOnBlur: true
                    }}
                />

                <Stack.Screen
                    name="Cart"
                    component={CartScreen}
                    options={{
                        headerTitle: 'Cart',
                        headerBackTitleVisible: false,
                        // freezeOnBlur: true
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
