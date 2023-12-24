import { LinearGradient } from 'expo-linear-gradient';
import { FaMapMarkerAlt } from "react-icons/fa";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import Toast from 'react-native-toast-message';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';




const Home = () => {
    const [weather, setWeather] = useState(null);
    const [daysweather, setDaysweather] = useState(null);
    const cidade = 'Maceió';

    const HandleChange = (e) => {
        setCidade('Maceió');
    }

    const HandleSubmit = (e) => {
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
                console.log(data);
                setWeather(data);
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
                console.log(data);
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

    return (
        <LinearGradient
            colors={['#063e86', '#1372fc']}
            style={styles.container}
        >
            <View style={styles.content}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Icon name="map-marker" size={24} color="white" />
                        <Text style={styles.headerLeftText}>{cidade}</Text>
                        <Icon name="caret-down" size={24} color="white" />
                    </View>
                    <Icon name="bell" size={24} color="white" />
                </View>
                <View style={styles.info}>
                    {weather && (
                        <>
                            <Text style={styles.infoText}>{weather.current.temp_c}°C</Text>
                            <Text style={styles.infoTextMaxMin}>Descrição do Clima: {weather.current.condition.text}</Text>
                        </>
                    )}
                </View>
            </View>
            <View style={styles.infoDetails}>
                <Text style={styles.infoDetailsText}>Previsão dos próximos 7 dias</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {daysweather && daysweather.forecast.forecastday.map((day, index) => (
                        <View key={index} style={styles.infoDetailsCard}>
                            <Text style={styles.infoDetailsCardWeekDay}>Dia:{format(new Date(day.date), 'dd', { locale: ptBR })}</Text>
                            <Text style={styles.infoDetailsCardPreview}>{day.day.avgtemp_c}°C</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
            <View style={styles.rodape}>
                <Button
                    onPress={HandleSubmit}
                    containerStyle={{ width: 160, color: "#FFF", backgroundColor: "#FFF" }}
                    style={styles.button}
                    title="Pesquisar"
                    type="outline"
                />
            </View>
        </LinearGradient>
    );
};


const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    content: {
        paddingTop: 40,
        paddingHorizontal: 35,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',  
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    headerLeftText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
    },
    info: {
        paddingVertical: 70,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      },
      infoImg: {
        width: 230,
        height: 230,
      },
      infoText: {
        fontSize: 100,
        fontWeight: "300",
        color: "#FFF",
      },
      infoTextMaxMin: {
        fontSize: 16,
        fontWeight: "600",
        color: "#FFF",
      },
      infoDetails: {
        gap: 15,
        paddingLeft: 40,
      },
      infoDetailsText: {
        color: "#FFF",
        fontSize: 22,
        fontWeight: "300",
      },
      infoDetailsCard: {
        marginRight: 20,
        width: 99,
        height: 129,
        backgroundColor: "rgba(255, 255, 255, 0.23)",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
      },
      infoDetailsCardWeekDay: {
        fontSize: 16,
        fontWeight: "600",
      },
      infoDetailsCardPreview: {
        fontSize: 24,
        fontWeight: "300",
      },
    button: {
            marginTop: 20,
            marginBottom: 20,
    },
    rodape: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36,
        alignItems: 'center',
    },
});

export default Home;
