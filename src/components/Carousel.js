import { StyleSheet, ScrollView, View, ImageBackground, Dimensions } from 'react-native';
import StyledText from './StyledText';

const Carousel = (props) => {
    const dimension= Dimensions.get('window');

    let citiesData = props.data
    let cities= citiesData?.slice(0, 12)

    return (
        <View style={{ width: '100%' }}>
            <ScrollView
                style={{ height: 300, width: '100%' }}
                horizontal
                pagingEnabled>
                {cities?.map((value, key) => (
                    <View style={{ height: '100%', width: dimension.width }}>
                        <ImageBackground
                            source={{ uri: `${value.photo}` }} key={value._id}
                            style={styles.imageBackground}>
                            <StyledText align='center' fontWeight='bold' fontSize='title'>{value.city}</StyledText>
                            <StyledText align='center' fontWeight='bold' fontSize='h2'>{value.country}</StyledText>
                        </ImageBackground>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
imageBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    flex: 1, 
    justifyContent:'center',
    opacity: 0.9,
    borderRadius: 20,
    overflow: 'hidden'
}
});

export default Carousel;