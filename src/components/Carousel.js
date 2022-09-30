import { StyleSheet, ScrollView, View, ImageBackground, Dimensions } from 'react-native';
import StyledText from './StyledText';
import SeeMore from './SeeMore'

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
                {cities?.map((value) => (
                    <View style={{ height: '100%', width: dimension.width }} key={value._id}>
                        <ImageBackground
                            source={{ uri: `${value.photo}` }} key={value._id}
                            style={styles.imageBackground}>
                            <StyledText align='center' fontWeight='bold' fontSize='title'>{value.city}</StyledText>
                            <StyledText align='center' fontWeight='bold' fontSize='h2'>{value.country}</StyledText>
                            <SeeMore text='See more'/>
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
    alignItems: 'center',
    justifyContent:'center',
    opacity: 0.8,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 15
}
});

export default Carousel;