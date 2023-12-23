import { useNavigation } from '@react-navigation/native';
import { Button, Input, Text } from '@rneui/themed';
import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';

const Register = () => {
    const navigation = useNavigation();
    const handleLogin = () => {
        navigation.navigate("Login");
    };

    return (
       <ScrollView style={styles.scrollView} >
         <View style={styles.container}>
            <Image 
            style={styles.logo}
            source={require('../../../assets/logo.png')} />
            <Input containerStyle={{width: "85%", marginTop: 20}}
            style={{color:"white"}} 
            placeholder='Nome' 
            />
            <Input containerStyle={{width: "85%", marginTop: 20}}
            style={{color:"white"}}
            placeholder="Email" />
            <Input containerStyle={{width: "85%", marginTop: 20}}
            style={{color:"white"}}
            placeholder="Senha" secureTextEntry={true} />
            <Input containerStyle={{width: "85%", marginTop: 20}}
            style={{color:"white"}}
            placeholder="Confirmar Senha" secureTextEntry={true} />

            <Button 
            containerStyle={{width: 160}} 
            style={{marginTop: 40}}
            title="Registrar" 
            type="outline" />
            <Text h4 style={{ color: "white", marginTop: 100 }}>Possui uma conta? <Text onPress={handleLogin} style={{ color: "#007AFF" }}>Faça login!</Text></Text>
        </View>
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
      },
    container: {
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

export default Register;
