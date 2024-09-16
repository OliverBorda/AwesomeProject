import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../views/HomeScreen';
import CartScreen from '../views/CartScreen';
import ProductsScreen from '../views/ProductsScreen';
import CategoriesScreen from '../views/CategoriesScreen';

export default function Routes() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                    }}
                    
                />

                <Stack.Screen
                    name="Categories"
                    component={CategoriesScreen}
                    options={{
                        headerTitle: 'Categories',  // Título opcional en el header
                        headerBackTitleVisible: false,  // Oculta el texto del botón de volver
                    }}
                />
                <Stack.Screen
                    name="Products"
                    component={ProductsScreen}
                    options={{
                        headerTitle: 'Products',  // Título opcional en el header
                        headerBackTitleVisible: false,  // Oculta el texto del botón de volver
                    }}
                />

                <Stack.Screen
                    name="Cart"
                    component={CartScreen}
                    options={{
                        headerTitle: 'Cart',  // Título opcional en el header
                        headerBackTitleVisible: false,  // Oculta el texto del botón de volver
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
