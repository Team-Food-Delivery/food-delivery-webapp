import { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import CarouselDetails from "./CarouselDetails";
import LinearGradient from 'expo-linear-gradient';

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
    
    const [isPress, setIsPress] = useState({
        pressed: false,
        pressedId: null
    });

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
                                <TouchableOpacity
                                    style={[customStyle.itemContainer, 
                                        isPress.pressedId !== item.id ? customStyle.shadow : customStyle.greenShadow
                                    ]}
                                    onPress={() => setIsPress({...isPress, pressedId: item.id})}
                                >
                                    <Image resizeMode='contain' source={item.source} style={customStyle.item}/>
                                    {item.store && <CarouselDetails item={item} /> }
                                </TouchableOpacity>
                            </LinearGradient>

                        )
                    }}
                />
        </View>
    )
}
export default Carousel;