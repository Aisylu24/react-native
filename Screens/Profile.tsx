import React from 'react';
import {Text, View} from "react-native";

const Profile = () => {
    return (
        <View style={{
            height: '100%',
            backgroundColor: "blue",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text style={{fontSize: 40, fontWeight: 'bold', letterSpacing: 5}}>Profile</Text>
        </View>
    );
};

export default Profile;