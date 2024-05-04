import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Padding, Border, FontSize, Color, FontFamily } from "../../../GlobalStyles";

const Home = () => {
  return (
    <LinearGradient
      style={styles.home}
      locations={[0, 1]}
      colors={["#438bf8", "#0066ff"]}
    >
      <View style={[styles.buttons, styles.buttonsFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>{`Login `}</Text>
      </View>
      <View style={[styles.buttons1, styles.buttonsFlexBox]}>
        <Text style={[styles.text1, styles.textTypo]}>Registrar</Text>
      </View>
      <Text
        style={[styles.esqueceuSuaSenhaContainer, styles.homeChildPosition]}
      >
        <Text style={styles.esqueceuSuaSenha}>{`Esqueceu sua senha? `}</Text>
        <Text style={styles.cliqueAqui}>Clique aqui!</Text>
      </Text>
      <Text style={styles.tempoprevisto}>
        <Text style={styles.tempo}>Tempo</Text>
        <Text style={styles.previsto}>Previsto</Text>
      </Text>
      <Image
        style={[styles.homeChild, styles.homeChildPosition]}
        contentFit="cover"
        source={require("../../../assets/group-3.png")}
      />
      <View style={styles.termosEPolitica}>
        <Text
          style={[styles.polticaDePrivacidade, styles.termosDeUsoTypo]}
        >{`Política de privacidade `}</Text>
        <Text style={[styles.termosDeUso, styles.termosDeUsoTypo]}>
          | Termos de uso
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  buttonsFlexBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_mini,
    left: 51,
    right: 39,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  homeChildPosition: {
    left: "50%",
    position: "absolute",
  },
  termosDeUsoTypo: {
    color: Color.corCinza,
    fontFamily: FontFamily.arial,
    fontSize: FontSize.size_smi_6,
    top: 0,
    textAlign: "left",
    position: "absolute",
  },
  text: {
    color: Color.colorWhite,
    fontFamily: FontFamily.title3,
    fontWeight: "700",
    lineHeight: 16,
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  buttons: {
    bottom: 248,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 2,
  },
  text1: {
    color: "#0066ff",
    fontFamily: FontFamily.title3,
    fontWeight: "700",
    lineHeight: 16,
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  buttons1: {
    bottom: 187,
    backgroundColor: Color.colorLightskyblue_100,
  },
  esqueceuSuaSenha: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
  },
  cliqueAqui: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: "#56bcff",
  },
  esqueceuSuaSenhaContainer: {
    marginLeft: -122.5,
    bottom: 150,
    lineHeight: 24,
    textAlign: "center",
    fontSize: FontSize.size_base,
    left: "50%",
  },
  tempo: {
    color: Color.colorWhite,
  },
  previsto: {
    color: Color.colorLightskyblue_100,
  },
  tempoprevisto: {
    marginLeft: -91.5,
    top: 163,
    fontSize: 26,
    lineHeight: 35,
    textAlign: "left",
    left: "50%",
    fontFamily: FontFamily.title3,
    fontWeight: "700",
    position: "absolute",
  },
  homeChild: {
    marginTop: -187,
    marginLeft: -53.5,
    top: "50%",
    width: 120,
    height: 119,
  },
  polticaDePrivacidade: {
    left: 0,
  },
  termosDeUso: {
    left: 132,
  },
  termosEPolitica: {
    top: 773,
    left: 74,
    width: 222,
    height: 15,
    position: "absolute",
  },
  home: {
    borderRadius: Border.br_xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default Home;
