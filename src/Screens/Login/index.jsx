
import { useNavigation } from '@react-navigation/native';
import { Button, Input, Text } from '@rneui/themed';
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'react-native';

const Login = () => {
    const navigation = useNavigation();
    const handleRegister = () => {
        navigation.navigate("Register");
    };
    const handleHome = () => {
        navigation.navigate("Home");
    };
    return (
        <>
            <StatusBar backgroundColor="black" />
            <View style={styles.container}>
                <Image 
                style={styles.logo}
                source={require('../../../assets/logo.png')} />
                <Input containerStyle={{width: "85%", marginTop: 20}}
                style={{color:"white"}} 
                placeholder='Email' 
                />
                <Input containerStyle={{width: "85%", marginTop: 20}}
                style={{color:"white"}}
                placeholder="Senha" secureTextEntry={true} />

                <Button 
                onPress={handleHome}
                containerStyle={{width: 160}} 
                style={{marginTop: 20}}
                title="Logar" 
                type="outline" />
                <Text h4 style={{ color: "white", marginTop: 100 }}>Não tem uma conta? <Text onPress={handleRegister} style={{ color: "#007AFF" }}>Cadastre-se</Text></Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingTop: 120,
        paddingBottom: 60,
        alignItems: 'center',
    },
    logo: {
        width: 80,
        height: 70,
        marginBottom: 20,
    },
});

export default Login;
