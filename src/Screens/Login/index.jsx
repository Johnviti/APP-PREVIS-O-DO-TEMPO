import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Border } from "../../../GlobalStyles";

const Login = () => {
  return (
    <LinearGradient
      style={styles.login}
      locations={[0, 1]}
      colors={["#438bf8", "#0066ff"]}
    >
      <View style={styles.textParent}>
        <View style={styles.text}>
          <Text style={styles.bemVindo}>Bem-vindo!</Text>
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
          <View style={styles.lembrarMeParent}>
            <View style={styles.lembrarMe}>
              <Image
                style={styles.selectIcon}
                contentFit="cover"
                source={require("../../../assets/select.png")}
              />
              <Text style={[styles.lembrarMe1, styles.botesPosition]}>
                Lembrar-me
              </Text>
            </View>
            <Text style={[styles.esqueceuASenha, styles.aPortaDoTypo]}>
              Esqueceu a senha?
            </Text>
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
      <Text style={[styles.tempoprevisto, styles.loginChildPosition]}>
        <Text style={styles.tempo}>Tempo</Text>
        <Text style={styles.previsto}>{`Previsto
`}</Text>
      </Text>
      <Image
        style={[styles.loginChild, styles.loginChildPosition]}
        contentFit="cover"
        source={require("../../../assets/group-31.png")}
      />
      <Text style={[styles.prontoParaComear, styles.olTypo]}>{`Pronto para 
começar?`}</Text>
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
  loginChildPosition: {
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
  bemVindo: {
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
    top: 95,
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
    width: "15.26%",
    top: "0%",
    right: "84.74%",
    bottom: "0.71%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lembrarMe1: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.arial,
    color: Color.colorDodgerblue,
    fontWeight: "700",
    top: 0,
  },
  lembrarMe: {
    width: 91,
    height: 14,
  },
  esqueceuASenha: {
    marginLeft: 123.5,
    color: Color.colorDodgerblue,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
  },
  lembrarMeParent: {
    flexDirection: "row",
    marginTop: 23,
  },
  inputs: {
    top: 168,
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
    top: 331,
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
    width: 222,
    height: 15,
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
  loginChild: {
    marginTop: -285,
    marginLeft: -98.5,
    top: "50%",
    width: 197,
    height: 196,
  },
  prontoParaComear: {
    top: 264,
    left: 16,
    color: Color.corCinza,
  },
  ol: {
    top: 9,
    left: 8,
    color: Color.colorDodgerblue,
  },
  unionParent: {
    top: 201,
    left: 34,
    position: "absolute",
  },
  login: {
    borderRadius: Border.br_xl,
    flex: 1,
    width: "100%",
    height: 812,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default Login;
