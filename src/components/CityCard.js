import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
// import {Link as LinkRouter} from 'react-router-dom'

export default function CityCard(props) {
    const item = props
    console.log(item)

    return (
        <View key={item.city}>
            <Image source={{uri: item.photo}} alt={item.city} style={styles.image} />
            <View>
                <Text>{item.city}</Text>
                <Text>{item.country}</Text>
            </View>
            {/* <View className='CityCard-details'> */}
                {/* <LinkRouter to={`/cities/${item._id}`}>See more</LinkRouter> */}
            {/* </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150
    }
})