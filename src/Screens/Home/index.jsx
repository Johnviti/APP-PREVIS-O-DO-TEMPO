import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, Border, FontSize } from "../../../GlobalStyles";

const Registre1 = () => {
  return (
    <LinearGradient
      style={styles.registre}
      locations={[0, 1]}
      colors={["#438bf8", "#0066ff"]}
    >
      <Text style={[styles.deAbril, styles.c6Typo]}>24 de Abril</Text>
      <Text style={styles.c}>18°C</Text>
      <View style={styles.groupParent}>
        <Image
          style={[styles.groupIcon, styles.groupIconPosition]}
          contentFit="cover"
          source={require("../../../assets/group.png")}
        />
        <Text style={[styles.macei, styles.c6Typo]}>Maceió</Text>
      </View>
      <View style={styles.semanalmenteParent}>
        <Text style={styles.semanalmente}>Semanalmente</Text>
        <View style={[styles.dias, styles.diasFlexBox]}>
          <LinearGradient
            style={styles.cGroupLayout}
            locations={[0, 1]}
            colors={["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.15)"]}
          >
            <Text style={[styles.c1, styles.c1Typo]}>18°C</Text>
            <Text style={[styles.text, styles.c1Typo]}>24/04</Text>
            <Image
              style={[styles.dWeatherForecastIconsSetW, styles.weatherPosition]}
              contentFit="cover"
              source={require("../../../assets/3dweatherforecasticonssetwhitebackground-2.png")}
            />
          </LinearGradient>
          <LinearGradient
            style={[styles.cGroup, styles.cGroupLayout]}
            locations={[0, 1]}
            colors={["#2f91f5", "#37caf5"]}
          >
            <Text style={[styles.c1, styles.c1Typo]}>18°C</Text>
            <Text style={[styles.text, styles.c1Typo]}>24/04</Text>
            <Image
              style={[
                styles.dWeatherForecastIconsSetW1,
                styles.desenvolvidoPorJohnPosition,
              ]}
              contentFit="cover"
              source={require("../../../assets/3dweatherforecasticonssetwhitebackground-3.png")}
            />
          </LinearGradient>
          <LinearGradient
            style={[styles.cContainer, styles.cGroupLayout]}
            locations={[0, 1]}
            colors={["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.15)"]}
          >
            <Text style={[styles.c1, styles.c1Typo]}>18°C</Text>
            <Text style={[styles.text, styles.c1Typo]}>24/04</Text>
            <Image
              style={[
                styles.dWeatherForecastIconsSetW2,
                styles.weatherPosition,
              ]}
              contentFit="cover"
              source={require("../../../assets/3dweatherforecasticonssetwhitebackground-21.png")}
            />
          </LinearGradient>
          <LinearGradient
            style={[styles.cContainer, styles.cGroupLayout]}
            locations={[0, 1]}
            colors={["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.15)"]}
          >
            <Text style={[styles.c1, styles.c1Typo]}>18°C</Text>
            <Text style={[styles.text, styles.c1Typo]}>24/04</Text>
            <Image
              style={[
                styles.dWeatherForecastIconsSetW1,
                styles.desenvolvidoPorJohnPosition,
              ]}
              contentFit="cover"
              source={require("../../../assets/3dweatherforecasticonssetwhitebackground-3.png")}
            />
          </LinearGradient>
          <LinearGradient
            style={[styles.cContainer, styles.cGroupLayout]}
            locations={[0, 1]}
            colors={["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.15)"]}
          >
            <Text style={[styles.c1, styles.c1Typo]}>18°C</Text>
            <Text style={[styles.text, styles.c1Typo]}>24/04</Text>
            <Image
              style={[
                styles.dWeatherForecastIconsSetW1,
                styles.desenvolvidoPorJohnPosition,
              ]}
              contentFit="cover"
              source={require("../../../assets/3dweatherforecasticonssetwhitebackground-3.png")}
            />
          </LinearGradient>
        </View>
      </View>
      <View style={[styles.frameParent, styles.frameParentLayout]}>
        <View style={[styles.climaParent, styles.parentPosition]}>
          <Text style={[styles.clima, styles.climaLayout]}>Clima</Text>
          <Text style={[styles.cuLimpo, styles.climaLayout]}>Céu Limpo</Text>
        </View>
        <View style={[styles.umidadeParent, styles.parentPosition]}>
          <Text style={[styles.clima, styles.climaLayout]}>Umidade</Text>
          <Text style={[styles.text5, styles.climaLayout]}>25%</Text>
        </View>
        <Image
          style={[styles.dWeatherForecastIconsSetW5, styles.frameParentLayout]}
          contentFit="cover"
          source={require("../../../assets/3dweatherforecasticonssetwhitebackground-22.png")}
        />
      </View>
      <Text
        style={[styles.desenvolvidoPorJohn, styles.desenvolvidoPorJohnPosition]}
      >
        Desenvolvido por John Amorim
      </Text>
      <View style={styles.outrasCidadesParent}>
        <Text style={styles.semanalmente}>Outras Cidades</Text>
        <Text style={[styles.visualizarTodas, styles.cidadeTypo]}>
          Visualizar todas
        </Text>
        <View style={[styles.dias, styles.diasFlexBox]}>
          <LinearGradient
            style={styles.groupLayout}
            locations={[0, 1]}
            colors={["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.15)"]}
          >
            <View style={styles.groupWrapper}>
              <View style={[styles.groupFrame, styles.groupFramePosition]}>
                <View style={[styles.groupFrame, styles.groupFramePosition]}>
                  <Image
                    style={[
                      styles.dWeatherForecastIconsSetW6,
                      styles.groupFramePosition,
                    ]}
                    contentFit="cover"
                    source={require("../../../assets/3dweatherforecasticonssetwhitebackground-31.png")}
                  />
                  <Text style={[styles.recife, styles.recifePosition]}>
                    Recife
                  </Text>
                  <Text style={[styles.cidade, styles.recifePosition]}>
                    Cidade
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameView, styles.diasFlexBox]}>
              <View style={styles.groupView}>
                <Text style={[styles.c6, styles.c6Position]}>20°C</Text>
                <Text style={[styles.temp, styles.c6Position]}>Temp</Text>
              </View>
              <View style={styles.parent}>
                <Text style={[styles.c6, styles.c6Position]}>25%</Text>
                <Text style={[styles.temp, styles.c6Position]}>Umidade</Text>
              </View>
            </View>
          </LinearGradient>
          <LinearGradient
            style={[styles.groupParent1, styles.groupLayout]}
            locations={[0, 1]}
            colors={["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.15)"]}
          >
            <View style={styles.groupWrapper}>
              <View style={[styles.groupFrame, styles.groupFramePosition]}>
                <View style={[styles.groupFrame, styles.groupFramePosition]}>
                  <Image
                    style={[
                      styles.dWeatherForecastIconsSetW6,
                      styles.groupFramePosition,
                    ]}
                    contentFit="cover"
                    source={require("../../../assets/3dweatherforecasticonssetwhitebackground-31.png")}
                  />
                  <Text style={[styles.recife, styles.recifePosition]}>
                    Recife
                  </Text>
                  <Text style={[styles.cidade, styles.recifePosition]}>
                    Cidade
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameView, styles.diasFlexBox]}>
              <View style={styles.groupView}>
                <Text style={[styles.c6, styles.c6Position]}>20°C</Text>
                <Text style={[styles.temp, styles.c6Position]}>Temp</Text>
              </View>
              <View style={styles.parent}>
                <Text style={[styles.c6, styles.c6Position]}>25%</Text>
                <Text style={[styles.temp, styles.c6Position]}>Umidade</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
      <View style={[styles.icsharpInfo, styles.groupIconPosition]} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  c6Typo: {
    fontFamily: FontFamily.title3,
    fontWeight: "700",
  },
  groupIconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  diasFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  c1Typo: {
    lineHeight: 6,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.title3,
    fontWeight: "700",
    position: "absolute",
  },
  weatherPosition: {
    height: 37,
    top: 25,
    left: 15,
    position: "absolute",
  },
  cGroupLayout: {
    height: 87,
    width: 67,
    borderRadius: Border.br_3xs,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  desenvolvidoPorJohnPosition: {
    left: "50%",
    position: "absolute",
  },
  frameParentLayout: {
    height: 161,
    position: "absolute",
  },
  parentPosition: {
    left: 183,
    position: "absolute",
  },
  climaLayout: {
    lineHeight: 12,
    color: Color.colorWhite,
    textAlign: "left",
  },
  cidadeTypo: {
    fontSize: FontSize.size_sm,
    top: 0,
  },
  groupFramePosition: {
    marginLeft: -54.5,
    marginTop: -20.75,
    height: 42,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  recifePosition: {
    lineHeight: 13,
    left: 55,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  c6Position: {
    lineHeight: 8,
    left: 0,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: 115,
    width: 191,
    backgroundColor: "transparent",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  deAbril: {
    top: 43,
    color: Color.colorLightskyblue_100,
    textAlign: "left",
    lineHeight: 32,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
    left: 25,
  },
  c: {
    top: 172,
    fontSize: 72,
    width: 169,
    height: 57,
    alignItems: "center",
    display: "flex",
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.title3,
    fontWeight: "700",
    lineHeight: 32,
    left: 25,
    position: "absolute",
  },
  groupIcon: {
    height: "47.83%",
    width: "5.08%",
    top: "26.09%",
    right: "90.62%",
    bottom: "26.09%",
    left: "4.31%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  macei: {
    top: 7,
    left: 38,
    color: Color.corCinza,
    textAlign: "left",
    lineHeight: 32,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupParent: {
    top: 82,
    backgroundColor: Color.colorWhite,
    width: 325,
    height: 46,
    borderRadius: Border.br_3xs,
    left: 25,
    position: "absolute",
    overflow: "hidden",
  },
  semanalmente: {
    width: 191,
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.title3,
    fontWeight: "700",
    lineHeight: 32,
    position: "absolute",
  },
  c1: {
    top: 8,
    fontSize: FontSize.size_mini_3,
    width: 34,
    height: 11,
    left: 15,
    lineHeight: 6,
    alignItems: "center",
    display: "flex",
  },
  text: {
    top: 69,
    left: 13,
    fontSize: FontSize.size_xs,
  },
  dWeatherForecastIconsSetW: {
    width: 37,
    height: 37,
    top: 25,
  },
  dWeatherForecastIconsSetW1: {
    marginTop: -18.5,
    marginLeft: -18.5,
    top: "50%",
    left: "50%",
    height: 37,
    width: 37,
  },
  cGroup: {
    borderStyle: "solid",
    borderColor: "#74acf5",
    borderWidth: 1,
    marginLeft: 14,
  },
  dWeatherForecastIconsSetW2: {
    width: 38,
    height: 37,
    top: 25,
  },
  cContainer: {
    marginLeft: 14,
  },
  dias: {
    top: 40,
    left: 0,
  },
  semanalmenteParent: {
    top: 435,
    width: 391,
    height: 127,
    left: 25,
    position: "absolute",
  },
  clima: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    lineHeight: 12,
  },
  cuLimpo: {
    marginTop: 11,
    fontFamily: FontFamily.title3,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    lineHeight: 12,
  },
  climaParent: {
    top: 98,
  },
  text5: {
    fontSize: FontSize.title3_size,
    marginTop: 16,
    fontFamily: FontFamily.title3,
    fontWeight: "700",
  },
  umidadeParent: {
    top: 28,
  },
  dWeatherForecastIconsSetW5: {
    width: 159,
    left: 0,
    top: 0,
  },
  frameParent: {
    top: 242,
    left: 43,
    width: 267,
  },
  desenvolvidoPorJohn: {
    marginLeft: -85.5,
    top: 771,
    fontSize: 12,
    lineHeight: 17,
    fontFamily: FontFamily.arial,
    color: "rgba(160, 216, 253, 0.3)",
    textAlign: "left",
  },
  visualizarTodas: {
    left: 214,
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.title3,
    fontWeight: "700",
    lineHeight: 32,
    position: "absolute",
  },
  dWeatherForecastIconsSetW6: {
    width: 41,
  },
  recife: {
    top: 21,
    fontSize: FontSize.size_mid_3,
    fontFamily: FontFamily.title3,
    fontWeight: "700",
  },
  cidade: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    top: 0,
  },
  groupFrame: {
    width: 109,
    marginLeft: -54.5,
    marginTop: -20.75,
  },
  groupWrapper: {
    marginTop: -37.5,
    marginLeft: -67.5,
    height: 42,
    width: 109,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  c6: {
    top: 18,
    fontSize: FontSize.size_base_1,
    fontFamily: FontFamily.title3,
    fontWeight: "700",
  },
  temp: {
    fontSize: FontSize.size_2xs_1,
    fontFamily: FontFamily.interRegular,
    top: 0,
  },
  groupView: {
    height: 26,
    width: 38,
  },
  parent: {
    width: 43,
    marginLeft: 32,
    height: 26,
  },
  frameView: {
    top: 75,
    left: 31,
  },
  groupParent1: {
    marginLeft: 14,
  },
  outrasCidadesParent: {
    top: 590,
    width: 396,
    height: 155,
    left: 25,
    position: "absolute",
  },
  icsharpInfo: {
    top: 47,
    left: 325,
    width: 24,
    height: 24,
    position: "absolute",
  },
  registre: {
    flex: 1,
    width: "100%",
    height: 812,
    backgroundColor: "transparent",
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
});

export default Registre1;
