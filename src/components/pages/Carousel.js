import react from "react";
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
    title:{
        fontSize: 25,
        fontFamily: 'Arial',
        color: 'gray',
        fontWeight: 'bold'
    }
});

const Carousel = ({title, customStyle, data}) => {
    return(
        <View >
            <Text style={styles.title}>{title}</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    keyExtractor={(img) => img.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={customStyle.itemContainer}>
                                {/*Create a Resuable component to handle both Image & Image + Descriptions */}
                                <Image resizeMode='contain' source={item.source} style={customStyle.item}/>
                            </TouchableOpacity>
                        )
                    }}
                />
        </View>
    )
}
export default Carousel;