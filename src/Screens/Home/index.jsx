import * as React from "react";
import { ScrollView, Text, StyleSheet, View, TextInput } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, Border, FontSize } from "../../../GlobalStyles";
import Toast from 'react-native-toast-message';
import { Button } from 'react-native-elements';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useEffect, useState } from 'react';


const Home = () => {

  const [weather, setWeather] = useState(null);
  const [daysweather, setDaysweather] = useState(null);
  const [cidade, setCidade] = useState('Maceió');

  const [cidadeSelecionada, setCidadeSelecionada] = useState('Maceió');

  useEffect(() => {
      HandleSubmit();
  }, []);

  const HandleChange = (text) => {
      setCidade(text.nativeEvent.text);
  }

  const HandleSubmit = (e) => {
    setCidadeSelecionada(cidade);
    fetch(`http://api.weatherapi.com/v1/current.json?key=560ac4f5cf1f41168a0195626232312&q=${cidade}&lang=pt`)
        .then((response) => {
            Toast.show({
                type: 'success',
                text1: 'Sucesso',
                text2: 'Requisição concluída com sucesso!',
            });
            return response.json();
        })
        .then((data) => {
            setWeather(data);
            console.log(data);
        })
        .catch((error) => {
            Toast.show({
                type: 'error',
                text1: 'Erro',
                text2: 'Ocorreu um erro na requisição.',
            });
            console.error(error);
        });

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=560ac4f5cf1f41168a0195626232312&q=${cidade}&days=7&lang=pt`)
        .then((response) => response.json())
        .then((data) => {
            setDaysweather(data);
        })
        .catch((error) => {
            Toast.show({
                type: 'error',
                text1: 'Erro',
                text2: 'Ocorreu um erro na requisição.',
            });
            console.error(error);
        });
    }
    const currentDate = new Date();
    const formatedDay = format(currentDate, 'dd', { locale: ptBR });
    const formatedMonth = format(currentDate, 'MMMM', { locale: ptBR });


  return (
    <LinearGradient
    style={styles.home}
    locations={[0, 1]}
    colors={["#438bf8", "#0066ff"]}
  >
    <View style={styles.containerInput}>
      <Text style={styles.data}>{formatedDay} de {formatedMonth}</Text>
      <View style={styles.input}>
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../../../assets/group.png")}
                />
                <TextInput 
                 style={styles.inputCidade}
                 placeholder="Cidade" 
                 onChange={(text) => HandleChange(text)}
                 />
                 <Button
                    onPress={HandleSubmit}
                    containerStyle={{ width: 10, color: "#FFF", backgroundColor: "#FFF" }}
                    style={styles.button}
                    title="Pesquisar"
                    type="outline"
                />
      </View>
    </View>
    <View style={styles.containerInformacao}>
    {weather && (
        <>
        <Text style={styles.tempo}>{weather.current.temp_c}ºC</Text>
        <View style={styles.containerDados}>
          <Image
            style={styles.image}
            contentFit="cover"
            source={require("../../../assets/time.png")}
          />
          <View style={styles.containerDado}>
            <View>
              <Text style={styles.tituloDado}>Cidade</Text>
              <Text style={styles.dadosGraus}>{cidadeSelecionada}</Text>
            </View>
            <View>
              <Text style={styles.tituloDado}>Clima</Text>
              <Text style={styles.dadosClima}>{weather.current.condition.text}</Text>
            </View>
          </View>
        </View>
        </>
    )}
      
     
    </View>
    <View style={styles.containerSemanalmente}>
      <Text style={styles.tituloText}>Semanalmente</Text>
      <View style={styles.containerCard}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {daysweather && daysweather.forecast.forecastday.map((day, index) => (
              <LinearGradient
              style={styles.card}
              locations={[0, 1]}
              colors={formatedDay === format(new Date(day.date), 'dd', { locale: ptBR }) ? ["#2F91F5", "#37CAF5"] : ["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.15)"]}
              >
                
                {/* format(currentDate, 'dd', { locale: ptBR }) */}
                <Text style={styles.tempoCard}>{day.day.avgtemp_c}°C</Text>
                <Image 
                  style={styles.weather}
                  contentFit="cover"
                  source={require("../../../assets/sunn.png")}
                />
                <Text style={styles.dataCard}>{format(new Date(day.date), 'EEE', { locale: ptBR })}</Text>
              </LinearGradient>
          ))}
      </ScrollView>
        
      </View>
    </View>
    <View style={styles.containerClimaCidade}>
      <View style={styles.titulos}>
        <Text style={styles.tituloText}>Outras Cidades</Text>
        <Text style={styles.tituloText}>Visualizar todas</Text>
      </View >
      <View style={styles.containerLinha}>
        <LinearGradient
            style={styles.containerCardCidade}
            locations={[0, 1]}
            colors={["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.15)"]}
          >
            <View style={styles.containerTempoCidade}>
              <Image
                style={styles.imagemTempoCidade}
                contentFit="cover"
                source={require("../../../assets/3dweatherforecasticonssetwhitebackground-31.png")}
              />
              <View style={styles.containerColumn}>
                <Text style={styles.tituloCidade}>
                  Cidade
                </Text>
                <Text style={styles.cidade}>
                  Recife
                </Text>
              </View>
            </View>
            <View style={styles.containerLinha}>
              <View style={styles.containerColumn}>
                <Text style={styles.tituloPequeno} >Temp</Text>
                <Text style={styles.textPequeno}>20°C</Text>
              </View>
              <View style={styles.containerColumn}>
                <Text style={styles.tituloPequeno}>Umidade</Text>
                <Text style={styles.textPequeno}>25%</Text>
              </View>
            </View>
        </LinearGradient>
        <LinearGradient
            style={styles.containerCardCidade}
            locations={[0, 1]}
            colors={["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.15)"]}
          >
            <View style={styles.containerTempoCidade}>
              <Image
                style={styles.imagemTempoCidade}
                contentFit="cover"
                source={require("../../../assets/3dweatherforecasticonssetwhitebackground-31.png")}
              />
              <View style={styles.containerColumn}>
                <Text style={styles.tituloCidade}>
                  Cidade
                </Text>
                <Text style={styles.cidade}>
                  Rio de Janeiro
                </Text>
              </View>
            </View>
            <View style={styles.containerLinha}>
              <View style={styles.containerColumn}>
                <Text style={styles.tituloPequeno} >Temp</Text>
                <Text style={styles.textPequeno}>28°C</Text>
              </View>
              <View style={styles.containerColumn}>
                <Text style={styles.tituloPequeno}>Umidade</Text>
                <Text style={styles.textPequeno}>27%</Text>
              </View>
            </View>
        </LinearGradient>
      </View>
    </View>
  </LinearGradient>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: "center",
  },
  containerInput: {
    paddingTop: 40,
  },
  containerInformacao: {
    flexDirection: "column",
    paddingTop: 40,
    justifyContent: "space-between",
    alignItems: "left",
    width: "80%",
  },
  inputCidade: {
    width: "100%",
    fontSize: 16,
    color: Color.corCinza,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    paddingLeft: 10,
  },
  containerDados: {
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    gap: 30,
  },
  containerDado:{
    height: 161,
    flexDirection: "column",
    justifyContent: 'space-around',
    alignItems: "left",
  },
  containerSemanalmente: {
    flexDirection: "column",
    paddingTop: 20,
    paddingBottom: 30,
    alignItems: "left",
    width: "80%",
  },
  containerClimaCidade:{
    flexDirection: "column",
    alignItems: "left",
    width: "80%",
  },
  containerCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  containerCardCidade: {
    width: 190,
    height: 120,
    borderRadius: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  containerTempoCidade: {
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  containerColumn: {
    flexDirection: "column",
    justifyContent: "center",
  },
  containerLinha: {
    flexDirection: "row",
    paddingBottom: 10,
    gap: 14,
  },
  tituloPequeno: {
    fontSize: 10,
    color: Color.colorBranco,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  textPequeno: {
    fontSize: 15,
    color: Color.colorBranco,
    fontFamily: FontFamily.interMedium,
    fontWeight: "700",
  },
  image: {
    width: 160,
    height: 160,
    objectFit: "cover",
  },
  input: {
    width: 325,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.colorBranco,
    borderWidth: 1,
    borderRadius: 7.5,
    borderColor: Color.corCinza,
  },
  icon: {
    width: 18,
    height: 22,
    marginLeft: 8,
  },
  iconSearch: {
    position: 'absolute',
    width: 18,
    height: 22,
    right: 10,
  },
  data:{
    fontSize: 16,
    color: Color.colorAzulClaro,
    fontFamily: FontFamily.interMedium,
    fontWeight: "700",
    paddingBottom: 15,
  },
  tempo: {
    fontSize: 72,
    color: Color.colorBranco,
    fontFamily: FontFamily.title3,
    fontWeight: "700",
    paddingBottom: 15,
  },
  dadosClima: {
    fontSize: 16,
    color: Color.colorBranco,
    fontFamily: FontFamily.interMedium,
    fontWeight: "700",
  },
  dadosGraus: {
    fontSize: 24,
    color: Color.colorBranco,
    fontFamily: FontFamily.interMedium,
    fontWeight: "700",
  },
  tituloDado: {
    fontSize: 16,
    color: Color.colorBranco,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  tituloText: {
    fontSize: 14,
    color: Color.colorBranco,
    fontFamily: FontFamily.interMedium,
    fontWeight: "700",
    paddingBottom: 15,
  },
  card: {
    width: 90,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 10,
    padding: 10,
  },
  tempoCard: {
    fontSize: 16,
    color: Color.colorBranco,
    fontFamily: FontFamily.interMedium,
    fontWeight: "700",
    paddingBottom: 5,
  },
  tituloCidade: {
    fontSize: 14,
    color: Color.colorBranco,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    width: "100%",
  },
  titulos: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cidade: {
    fontSize: 17.5,
    color: Color.colorBranco,
    fontFamily: FontFamily.interMedium,
    fontWeight: "700",
  },
  weather: {
    width: 35,
    height: 35,
  },
  dataCard: {
    fontSize: 12,
    color: Color.colorBranco,
    fontFamily: FontFamily.interMedium,
    fontWeight: "700",
    paddingTop: 5,
  },
  imagemTempoCidade: {
    width: 41, 
    height: 41,
  },
});

export default Home;
