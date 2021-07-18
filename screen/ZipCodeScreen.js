import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, StyleSheet, Text, View} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import ImageBackground from 'react-native/Libraries/Image/ImageBackground'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Yala', code: '95000'},
    { place: 'Kanchanaburi', code: '71110'},
    { place: 'Pattani', code: '94150'},
    { place: 'Satun', code: '91110'}
   ]

const ZipItem = ({place, code, navigation}) => (
    <View>
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', {zipCode: code})
    }}>
        <View style={styles.zipItem}>
            <Text style={styles.btext}>{place}</Text>
            <Text style={styles.btext}>{code}</Text>
        </View>
    </TouchableHighlight>
    <Text> </Text>
    </View>
)
export default function  ZipCodeScreen(){
    const navigation = useNavigation()
    return(
        <View>
            <ImageBackground source={require('../sky2.jpg')} style={styles.backdrop}>
            <FlatList
                data = {availableZipItems}
                keyExtractor = {item => item.code }
                renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>} 
                />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    zipPlace: {
        flex: 1,
    },
    zipCode: {
        flex: 1,
    },
    backdrop:{                      //เพิ่มพื้นหลังหน้าหลัก
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'flex-start',
        width: '100%',
        height:'100%',
    },
    btext:{
        //fontFamily: "Cochin"
        fontSize: 30
    }
})