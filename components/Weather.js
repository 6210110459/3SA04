import React, { useState } from 'react';
import Forecast from './Forecast';
import { ImageBackground, Text, StyleSheet, PickerIOSComponent } from 'react-native';


export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })

    return(
        <ImageBackground source={require('../sky.jpg')} style={styles.backdrop}>
            <Text>Zip code is </Text>
            <Text>{props.zipCode}</Text>
        <Forecast {...forecastInfo}/>
        </ImageBackground>
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