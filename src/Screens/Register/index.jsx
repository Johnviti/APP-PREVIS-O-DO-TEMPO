import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Border } from "../../../GlobalStyles";
import { useNavigation } from '@react-navigation/native';

import * as animatable from 'react-native-animatable';

const Registre = () => {

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
      <animatable.View delay={800} animation="fadeInUp" style={styles.ballow}>
          <Image
            style={styles.box}
            contentFit="cover"
            source={require("../../../assets/union.png")}
          />
          <Text style={styles.textBallow}>Olá!</Text>
      </animatable.View>
      <animatable.View  delay={800} animation="fadeInUp" style={styles.container}>
        <Text style={styles.textForBallow}>{`Vamos
começar?`}</Text>
        <View style={styles.containerForm}>
          <View style={styles.containerTitulo}>
              <Text style={styles.bemVindo}>Crie sua Conta!</Text>
              <Text style={styles.text}>
               Realize seu cadastro e comece a usar o app!
              </Text>
          </View>
          <View style={styles.Grupoinputs}>
            <View style={styles.input}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../../../assets/frame-47.png")}
              />
              <TextInput style={styles.inputUsuario} placeholder="Usuário" />
            </View>
            <View style={styles.input}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../../../assets/frame-471.png")}
              />
              <TextInput style={styles.inputSenha} placeholder="Senha" />
            </View>
            <View style={styles.input}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../../../assets/frame-471.png")}
              />
              <TextInput style={styles.inputSenha} placeholder="Confirmar Senha" />
            </View>
        </View> 
          <View style={styles.buttons}>
              <TouchableOpacity style={styles.buttonEntrar}  onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textEntrar} >CADASTRAR</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textRegister}>FAZER LOGIN</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.esqueceuSuaSenhaContainer}>
              <View style={styles.lembrarMe}>
                <Text style={styles.lembraMe}>Lembra-me</Text>
              </View>
              <Text style={styles.esqueceuSenha}>Esqueceu sua senha?</Text>
          </View>
      </View>
      <View style={styles.rodape}>
          <Text style={styles.textoRodape}>Termos de uso | Política de privacidade</Text>
        </View>
      </animatable.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Color.colorBranco,
    width: "100%",
    height: "67%",
    bottom: 0,
    borderTopLeftRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  containerLogo: {
    flex: 2,
    paddingTop: 60,
    alignItems: 'center',
    zIndex: 1, 
  },
  containerForm: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    marginTop: 85,
  },
  containerTitulo:{
    width: 332,
    marginBottom: 16,
  },
  logo: {
    marginTop: 15,
    width: 196,
    height: 196,
  },
  textLogo: {
    fontSize: 24,
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
  ballow:{
    zIndex: 2,
    position: 'absolute',
    right: 45,
    height: 41,
    width: 43,
    top: '26%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 41,
    width: 43,
    objectFit: 'cover',
    position: 'absolute',
  },
  textBallow: {
    color: Color.colorAzul,
    fontSize: 13.5,
    fontWeight: "700",
    textAlign: 'center',
  },
  textForBallow:{
    color: Color.corCinza,
    fontSize: 13.5,
    fontWeight: "700",
    textAlign: 'center',
    top: 10,
    right: 36,
    position: 'absolute',
  },
  bemVindo: {
    fontSize: 30,
    textAlign: "left",
    fontFamily: FontFamily.arial,
    color: Color.colorAzul,
    fontWeight: "700",
  },
  text: {
    fontSize: 12,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorPreto,
  },
  Grupoinputs: {
    width: 332,
    gap: 20,
  },
  input: {
    width: "100%",
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 7.5,
    borderColor: Color.corCinza,
  },
  icon: {
    width: 40,
    height: 40,
    marginLeft: 5,
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
    width: 332,
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  esqueceuSenha:{
    color: Color.colorAzul,
    fontSize: 12,
    fontWeight: '700',
    fontFamily: FontFamily.interMedium,
  },
  lembraMe: {
    color: Color.colorAzul,
    fontSize: 12,
    fontWeight: '700',
    fontFamily: FontFamily.interMedium,
  },
  buttons: {
    flexDirection: 'column',
    gap: 10,
    width: 332,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonEntrar: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    width: '100%',
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: Color.colorAzul,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEntrar: {
    color: Color.colorBranco,
    fontSize: 16,
    fontWeight: "700",
  },
  buttonRegister: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    width: '100%',
    textAlign: 'center',
    borderRadius: 5,
    borderColor: Color.colorAzul,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRegister: {
    color: Color.colorAzul,
    fontSize: 16,
    fontWeight: "700",
  }
});

export default Registre;
