import React, { useState } from 'react';
import { StatusBar } from 'react-native-web';
import { Text, View, StyleSheet, Alert } from 'react-native';

export default function home() {
    return (
        <View style={styles.container}>
         

        
            <Text>Pagina Home</Text>
            <StatusBar style="auto" />
        </View>
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagem: {
        flex: 1,
        width: 400
    }
});