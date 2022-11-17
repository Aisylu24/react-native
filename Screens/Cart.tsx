import React from 'react';
import {Text, View} from "react-native";

const Cart = () => {
    return (
        <View style={{
            height: '100%',
            backgroundColor: "blue",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text style={{fontSize: 40, fontWeight: 'bold', letterSpacing: 5}}>Cart</Text>
        </View>
    );
};

export default Cart;