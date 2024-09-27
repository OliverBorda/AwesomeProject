import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCustomer } from '../contexts/CustomerContext';
import { View, Text } from 'react-native';
import CustomerForm from '../components/HomeScreen/CustomerForm';
import CustomButton from '../components/HomeScreen/CustomButton';
import styles from '../components/HomeScreen/styles';

const HomeScreen = ({ navigation }) => {
    const [showForm, setShowForm] = useState(false);
    const { customerData, setCustomerData } = useCustomer();
    
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            name: customerData.name || '',
            email: customerData.email || '',
            phone: customerData.phone || ''
        }
    });

    const toggleForm = useCallback(() => {
        setShowForm(prevShowForm => !prevShowForm);
    }, []);

    const onSubmit = (data) => {
        setCustomerData(data);
        navigation.navigate('Categories');
    };
    console.log('HomeScreen');


    return (
        <View style={styles.centerContent}>
            <Text style={styles.title}>Welcome to Our Store</Text>
            {!showForm ? (
                <CustomButton title="Start Shopping" onPress={toggleForm} />
            ) : (
                <CustomerForm 
                    control={control} 
                    errors={errors} 
                    handleSubmit={handleSubmit} 
                    onSubmit={onSubmit} 
                />
            )}
        </View>
    );
};

export default HomeScreen;
