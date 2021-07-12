import React, { useState } from 'react';
import Forecast from './Forecast';
import { ImageBackground, Text, StyleSheet, View } from 'react-native';


export default function Weather(props){
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