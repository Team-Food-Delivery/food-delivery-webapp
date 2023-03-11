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
    let len = stars.length
    for(let i=0; i < 5 - len; i++) {
        stars.push(<Image key={i+1+len} resizeMode='contain' source={WhiteStarIcon} style={styles.star}/>)
    }

    return (
        <View>
            <Text>{item.store}</Text>
            <Text>{item.dish}</Text>
            <View style={styles.starContainer}>{stars}</View>
        </View>
    )
}
export default CarouselDetails;