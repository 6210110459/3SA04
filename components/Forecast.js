import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Forecast(props){
    return(
        <View>
        <Text style={styles.atext}>{props.main}</Text>
        <Text style={styles.atext}>{props.temp} °C</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    atext:{                         //กำหนดขนาดตัวอักษร
        fontSize: 30
    }
})