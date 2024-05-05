import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Padding, Border, FontSize, Color, FontFamily } from "../../../GlobalStyles";
import { useNavigation } from '@react-navigation/native';

import * as animatable from 'react-native-animatable';

const Welcome = () => {

  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.home}
      locations={[0, 1]}
      colors={["#438bf8", "#0066ff"]}
    >
    <animatable.View  animation="flipInY" style={styles.containerLogo}>
        <Text style={styles.textLogo}>
          <Text style={styles.tempo}>Tempo</Text>
          <Text style={styles.previsto}>Previsto</Text>
        </Text>
        <Image
          style={[styles.logo]}
          contentFit="cover"
          source={require("../../../assets/group-3.png")}
        />
    </animatable.View>
    <animatable.View delay={600} animation="fadeInUp" style={styles.buttons}>
        <TouchableOpacity style={styles.buttonLogin}  onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textLogin} >ENTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textRegister}>CADASTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.textRegister}>HOME</Text>
        </TouchableOpacity>
    </animatable.View>
    <animatable.View delay={600} animation="fadeInUp" style={styles.esqueceuSuaSenhaContainer}>
        <Text style={styles.esqueceuSenha}>Esqueceu sua senha?</Text>
        <Text style={styles.cliqueAqui}>Clique aqui!</Text>
    </animatable.View>
        
      <View style={styles.rodape}>
        <Text style={styles.textoRodape}>Termos de uso | Política de privacidade</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 119,
  },
  textLogo: {
    fontSize: 26,
    lineHeight: 35,
    fontWeight: "700",
    marginBottom: 20,
  },
  tempo: {
    color: Color.colorBranco,
  },
  previsto: {
    color: Color.colorAzulClaro,
  },
  containerLogo: {
    marginTop: 40,
    alignItems: 'center',
    paddingBottom: 80,
  },
  rodape:{
    flexDirection: 'row',
    marginBottom: 20,
    bottom: 0,
    gap: 10,
    position: 'absolute',
  },
  textoRodape: {
    fontSize: 13,
    color: Color.corCinza,
  },
  esqueceuSuaSenhaContainer: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 5,
  },
  esqueceuSenha:{
    color: Color.colorBranco,
    fontSize: 13,
    fontWeight: '500',
    fontFamily: FontFamily.interMedium,
  },
  cliqueAqui: {
    fontSize: 13,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorAzulClaro,
  },
  buttons: {
    flexDirection: 'column',
    gap: 13,
    width: 285,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonLogin: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    width: '100%',
    textAlign: 'center',
    borderRadius: 15,
    borderColor: Color.colorBranco,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogin: {
    color: Color.colorBranco,
    fontSize: 16,
    fontWeight: "700",
  },
  buttonRegister: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    width: '100%',
    textAlign: 'center',
    borderRadius: 15,
    backgroundColor: Color.colorAzulClaro,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRegister: {
    color: Color.colorAzul,
    fontSize: 16,
    fontWeight: "700",
  }
});

export default Welcome;
