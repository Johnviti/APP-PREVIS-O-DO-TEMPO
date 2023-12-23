import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StatusBar, View, Text } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <LinearGradient
                colors={['#063e86', '#1372fc']}
                style={{ flex: 1 }}
            >
                <Text style={{ color: 'white', fontSize: 24 }}>
                    Previsão do Tempo
                </Text>
                {/* Aqui você pode adicionar os componentes para mostrar a previsão do tempo */}
            </LinearGradient>
        </View>
    );
};

export default HomeScreen;
