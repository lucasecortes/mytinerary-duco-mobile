import React from 'react'
import { View, Image, Text } from 'react-native'
// import {Link as LinkRouter} from 'react-router-dom'

export default function CityCard(props) {
    const item = props

    return (
        <View className='CityCard-container' key={item.city}>
            <Image src={item.photo} alt={item.city} />
            <View className='CityCard-info'>
                <Text>{item.city}</Text>
                <Text>{item.country}</Text>
            </View>
            <View className='CityCard-details'>
                {/* <LinkRouter to={`/cities/${item._id}`}>See more</LinkRouter> */}
            </View>
        </View>
    )
}
