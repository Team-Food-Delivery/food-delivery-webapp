import { View, Text, StyleSheet, Image } from "react-native";
import StarBlack from '../../img/star-black.png'

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    image: {
        width:100,
        height:100,
        marginVertical: 10,
    },
    rating: {

    },
    starBlack: {
        width: 10,
        height:10,
        opacity: "65%"
    }
})

const stringDay = {
    0: "sunday",
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
    6: "saturday"
}


const StoreHeader = ({ name, description, rating, hours, image_url }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: image_url}}/>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.rating}>
                {rating}
                <Image resizeMode='contain' source={StarBlack} style={styles.starBlack}/>
            </Text>
            
            <Text style={styles.schedule}>
                {"Today's Hours: "} 
                {hours[stringDay[new Date().getDay()]]}
            </Text>
        </View>
    )
}

export default StoreHeader;