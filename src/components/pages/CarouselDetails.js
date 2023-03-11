import { StyleSheet, View, Image, Text } from "react-native";
import BlackStarIcon from '../../img/star-black.png'
import WhiteStarIcon from '../../img/star-white.png'

const styles = StyleSheet.create({
    starContainer: {
        flexDirection:'row'
    },
    star: {
        width:15,
        height:15
    }
})

const CarouselDetails = ({item}) => {

    const stars = []
    for(let i=0; i < item.rating; i++) {
        stars.push(<Image key={i} resizeMode='contain' source={BlackStarIcon} style={styles.star}/>)
    }
    for(let i=0; i < item.rating - stars.length; i++) {
        stars.push(<Image  key={stars.length-i} resizeMode='contain' source={WhiteStarIcon} style={styles.star}/>)
    }

    return (
        <View>
            <Text>{item.store}</Text>
            <View style={styles.starContainer}>{stars}</View>
            <Text>{item.price}</Text>
        </View>
    )
}
export default CarouselDetails;