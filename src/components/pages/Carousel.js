import { View, FlatList, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import CarouselDetails from "./CarouselDetails";

const styles = StyleSheet.create({
    title:{
        marginLeft: 30,
        fontSize: 25,
        fontFamily: 'Arial',
        color: 'gray',
        fontWeight: 'bold'
    }
});

const Carousel = ({title, customStyle, data}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    keyExtractor={(img) => img.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={customStyle.itemContainer}>
                                <Image resizeMode='contain' source={item.source} style={customStyle.item}/>
                                {item.store && <CarouselDetails item={item} /> }
                            </TouchableOpacity>
                        )
                    }}
                />
        </View>
    )
}
export default Carousel;