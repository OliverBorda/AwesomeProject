import React from 'react';
import { Controller } from 'react-hook-form';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

const CustomerForm = ({ control, errors, handleSubmit, onSubmit }) => {
    return (
        <View style={styles.form}>
            <Controller
                control={control}
                name="name"
                render={({ field: { onChange, onBlur, value } }) => (
                    <View>
                        <TextInput
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            style={styles.input}
                            placeholder="Name"
                        />
                        {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
                    </View>
                )}
            />

            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                    <View>
                        <TextInput
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            style={styles.input}
                            placeholder="Email"
                            keyboardType="email-address"
                        />
                        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
                    </View>
                )}
            />

            <Controller
                control={control}
                name="phone"
                render={({ field: { onChange, onBlur, value } }) => (
                    <View>
                        <TextInput
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            style={styles.input}
                            placeholder="Phone"
                            keyboardType="phone-pad"
                        />
                        {errors.phone && <Text style={styles.errorText}>{errors.phone.message}</Text>}
                    </View>
                )}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.buttonText}>Start Shopping</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CustomerForm;
