import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import StyledText from './StyledText';

export default function Cities(props){
    const navigation = useNavigation()
    const cityView = (city) => {
        const toCity = () => {
            navigation.navigate('City', {
                id: city._id
            })
        }
        return (
            <Pressable
            style={styles.citiesContainer}
            key={city._id}
            onPress={()=>toCity()}
            >
                <ImageBackground
                    style={styles.cityContainer}
                    source={{uri:city.photo}}
                    resizeMode='cover'>
                    <StyledText align='center' fontWeight='bold' fontSize='title'>{city.city}</StyledText>
                    <StyledText align='center' fontWeight='bold' fontSize='h2'>{city.country}</StyledText>
                </ImageBackground>
            </Pressable>
        )
    }
    return (
        <ScrollView>
            <View>
                {props.data?.map(cityView)}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cityContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        heigth: "100%",
    },
    citiesContainer: {
        flex: 1,
        width: 290,
        height: 220,
        marginTop: 15,
        borderRadius: 15,
        overflow: "hidden",
    }
    });