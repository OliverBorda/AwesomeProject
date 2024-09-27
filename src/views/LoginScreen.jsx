import React, { useEffect, useMemo } from 'react';
import CustomerForm from '../components/HomeScreen/CustomerForm';
import styles from '../components/HomeScreen/styles';

import { useForm } from 'react-hook-form';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setCustomerData } from '../features/customerSlice';

const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const customerData = useSelector((state) => state.customer);

    const defaultValues = useMemo(() => ({
        name: customerData.name || '',
        email: customerData.email || '',
        phone: customerData.phone || ''
    }), []);

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues
    });

    const onSubmit = (data) => {
        // Solo despachar si los datos son diferentes
        if (
            data.name !== customerData.name ||
            data.email !== customerData.email ||
            data.phone !== customerData.phone
        ) {
            dispatch(setCustomerData(data));
        }
        navigation.navigate('Categories');
    };

    console.log("LoginScreen");
    console.log("=================");
    console.log("");


    return (
        <View style={styles.centerContent}>
            <Text style={styles.title}>Welcome to Our Store</Text>
                <CustomerForm
                    control={control}
                    errors={errors}
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}
                />
        </View>
    );
};

export default LoginScreen;
