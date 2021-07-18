import React, { useEffect, useState } from 'react';
import Forecast from './Forecast';
import { ImageBackground, Text, StyleSheet, View } from 'react-native';


export default function Weather(props){
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=57b8acd28c647867c435f2b2eca7cfe7`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp
                });
            })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])
       
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })

    return(
        <View>
        <ImageBackground source={require('../sky.jpg')} style={styles.backdrop}>
            <Text>Zip code is {props.zipCode}</Text>
        <Forecast {...forecastInfo}/>
        </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    backdrop:{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        fontSize: 100,
    }
})