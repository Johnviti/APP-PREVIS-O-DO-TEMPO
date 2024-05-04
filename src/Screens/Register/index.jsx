import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Border } from "../../../GlobalStyles";

const Registre = () => {
  return (
    <LinearGradient
      style={styles.registre}
      locations={[0, 1]}
      colors={["#438bf8", "#0066ff"]}
    >
      <View style={styles.textParent}>
        <View style={styles.text}>
          <Text style={styles.crieSuaConta}>Crie sua conta!</Text>
          <Text style={[styles.aPortaDo, styles.aPortaDoTypo]}>
            A porta do aprendizado está aberta. Entre agora!
          </Text>
        </View>
        <View style={[styles.inputs, styles.botesPosition]}>
          <View style={[styles.frameParent, styles.frameLayout]}>
            <Image
              style={[styles.frameChild, styles.frameLayout]}
              contentFit="cover"
              source={require("../../../assets/frame-47.png")}
            />
            <Text style={[styles.usurio, styles.senhaTypo]}>Usuário</Text>
          </View>
          <View style={styles.frameGroup}>
            <Image
              style={[styles.frameChild, styles.frameLayout]}
              contentFit="cover"
              source={require("../../../assets/frame-471.png")}
            />
            <Text style={[styles.senha, styles.senhaTypo]}>Senha</Text>
          </View>
          <View style={styles.frameGroup}>
            <Image
              style={[styles.frameChild, styles.frameLayout]}
              contentFit="cover"
              source={require("../../../assets/frame-472.png")}
            />
            <Text style={[styles.senha, styles.senhaTypo]}>Confirma senha</Text>
          </View>
          <View style={styles.lembrarMeWrapper}>
            <View style={styles.lembrarMe}>
              <Image
                style={styles.selectIcon}
                contentFit="cover"
                source={require("../../../assets/select1.png")}
              />
              <Text style={[styles.simEuAceito, styles.botesPosition]}>
                Sim, eu aceito os termos e serviços
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.botes, styles.botesPosition]}>
          <View style={[styles.botaoEntrar, styles.botaoFlexBox]}>
            <Text style={[styles.entrar, styles.entrarTypo]}>ENTRAR</Text>
          </View>
          <View style={[styles.botaoCadastrar, styles.botaoFlexBox]}>
            <Text style={[styles.cadastrar, styles.entrarTypo]}>CADASTRAR</Text>
          </View>
        </View>
        <View style={styles.termosEPolitica}>
          <Text
            style={[styles.polticaDePrivacidade, styles.termosDeUsoTypo]}
          >{`Política de privacidade `}</Text>
          <Text style={[styles.termosDeUso, styles.termosDeUsoTypo]}>
            | Termos de uso
          </Text>
        </View>
      </View>
      <Text style={[styles.tempoprevisto, styles.tempoprevistoPosition]}>
        <Text style={styles.tempo}>Tempo</Text>
        <Text style={styles.previsto}>{`Previsto
`}</Text>
      </Text>
      <Image
        style={[styles.registreChild, styles.tempoprevistoPosition]}
        contentFit="cover"
        source={require("../../../assets/frame-1.png")}
      />
      <Text style={[styles.vamosComear, styles.olTypo]}>{`Vamos
Começar!`}</Text>
      <View style={[styles.unionParent, styles.unionLayout]}>
        <Image
          style={styles.unionLayout}
          contentFit="cover"
          source={require("../../../assets/union.png")}
        />
        <Text style={[styles.ol, styles.olTypo]}>Olá!</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  aPortaDoTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.arial,
  },
  botesPosition: {
    left: 21,
    position: "absolute",
  },
  frameLayout: {
    height: 40,
    overflow: "hidden",
  },
  senhaTypo: {
    fontSize: FontSize.size_sm_2,
    color: Color.corCinza,
    textAlign: "left",
    fontFamily: FontFamily.arial,
    position: "absolute",
  },
  botaoFlexBox: {
    paddingVertical: 8,
    paddingHorizontal: 139,
    justifyContent: "center",
    alignItems: "center",
    height: 53,
    width: 332,
    borderRadius: 5,
    flexDirection: "row",
  },
  entrarTypo: {
    fontFamily: FontFamily.title3,
    textAlign: "left",
    fontWeight: "700",
  },
  termosDeUsoTypo: {
    fontSize: FontSize.size_smi_6,
    color: Color.corCinza,
    textAlign: "left",
    fontFamily: FontFamily.arial,
    top: 0,
    position: "absolute",
  },
  tempoprevistoPosition: {
    left: "50%",
    position: "absolute",
  },
  olTypo: {
    textAlign: "center",
    fontSize: FontSize.size_sm_5,
    fontFamily: FontFamily.title3,
    fontWeight: "700",
    position: "absolute",
  },
  unionLayout: {
    height: 41,
    width: 43,
  },
  crieSuaConta: {
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    fontFamily: FontFamily.arial,
    color: Color.colorDodgerblue,
    fontWeight: "700",
    top: 0,
    left: 0,
    position: "absolute",
  },
  aPortaDo: {
    top: 48,
    color: Color.colorGray,
    left: 0,
    position: "absolute",
  },
  text: {
    top: 83,
    left: 24,
    width: 262,
    height: 62,
    position: "absolute",
  },
  frameChild: {
    left: 1,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    width: 40,
    height: 40,
    top: 0,
    position: "absolute",
  },
  usurio: {
    top: 14,
    left: 40,
    color: Color.corCinza,
  },
  frameParent: {
    width: 331,
    borderWidth: 1.2,
    borderColor: Color.corCinza,
    borderRadius: 7,
    height: 40,
    borderStyle: "solid",
  },
  senha: {
    top: 13,
    left: 43,
    color: Color.corCinza,
  },
  frameGroup: {
    marginTop: 23,
    height: 40,
    width: 331,
    borderWidth: 1.2,
    borderColor: Color.corCinza,
    borderStyle: "solid",
    borderRadius: 7,
    overflow: "hidden",
  },
  selectIcon: {
    height: "99.29%",
    width: "6.15%",
    top: "0%",
    right: "93.85%",
    bottom: "0.71%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  simEuAceito: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.arial,
    color: Color.colorDodgerblue,
    fontWeight: "700",
    left: 21,
    top: 0,
  },
  lembrarMe: {
    width: 226,
    height: 14,
  },
  lembrarMeWrapper: {
    flexDirection: "row",
    marginTop: 23,
  },
  inputs: {
    top: 167,
  },
  entrar: {
    color: Color.colorWhite,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.title3,
  },
  botaoEntrar: {
    backgroundColor: Color.colorDodgerblue,
  },
  cadastrar: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.title3,
    color: Color.colorDodgerblue,
  },
  botaoCadastrar: {
    borderColor: Color.colorDodgerblue,
    borderWidth: 1,
    marginTop: 11,
    borderStyle: "solid",
    paddingVertical: 8,
    paddingHorizontal: 139,
    justifyContent: "center",
    alignItems: "center",
    height: 53,
    width: 332,
    borderRadius: 5,
  },
  botes: {
    top: 383,
  },
  polticaDePrivacidade: {
    left: 0,
  },
  termosDeUso: {
    left: 132,
  },
  termosEPolitica: {
    top: 523,
    left: 74,
    height: 15,
    width: 222,
    position: "absolute",
  },
  textParent: {
    top: 250,
    borderTopLeftRadius: Border.br_6xl,
    backgroundColor: Color.colorWhite,
    width: 375,
    height: 562,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  tempo: {
    color: Color.colorWhite,
  },
  previsto: {
    color: Color.colorLightskyblue_100,
  },
  tempoprevisto: {
    marginLeft: -88.5,
    top: 59,
    fontSize: FontSize.title3_size,
    lineHeight: 32,
    width: 177,
    height: 32,
    fontFamily: FontFamily.title3,
    textAlign: "left",
    fontWeight: "700",
  },
  registreChild: {
    marginLeft: -117.5,
    top: 116,
    borderRadius: 27,
    height: 201,
    width: 222,
    overflow: "hidden",
  },
  vamosComear: {
    top: 264,
    left: 282,
    color: Color.corCinza,
  },
  ol: {
    top: 9,
    left: 8,
    color: Color.colorDodgerblue,
  },
  unionParent: {
    top: 201,
    left: 293,
    position: "absolute",
  },
  registre: {
    borderRadius: Border.br_xl,
    flex: 1,
    width: "100%",
    height: 812,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default Registre;
