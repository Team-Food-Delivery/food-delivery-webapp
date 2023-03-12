import { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import CarouselDetails from "./CarouselDetails";
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
    title:{
        marginLeft: 30,
        fontSize: 25,
        fontFamily: 'Arial',
        color: 'gray',
        fontWeight: 'bold'
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 6,
        shadowOpacity: 0.2,
        elevation:5
    },
    greenShadow: {
        shadowColor: '#0fde12',
        shadowOffset: {width: 0, height: 5},
        shadowRadius: 7,
        shadowOpacity: 0.6,
        elevation:5
    }

});

const Carousel = ({title, customStyle, data}) => {
    
    const [isPress, setIsPress] = useState({
        pressed: false,
        pressedId: null
    });

    const checkTitle = (title, item) => {
        return title === 'Categories' 
            ? ['transparent'] 
            : [ '#fff', isPress.pressedId !== item.id ? '#fff': '#0fde12'];
    }

    const renderItem = (item ) => {
        return (      
            <TouchableOpacity
                style={
                    isPress.pressedId !== item.id ? styles.shadow : styles.greenShadow
                }
                onPress={() => setIsPress({...isPress, pressedId: item.id})}
            >
                <LinearGradient
                    colors={checkTitle(title, item)}
                    style={customStyle.itemContainer}
                    end={{x:0.5,y:1.1}}

                >
                    <Image resizeMode='contain' source={item.source} style={customStyle.item}/>
                    {item.store && <CarouselDetails item={item} /> }
                </LinearGradient>
            </TouchableOpacity>
        )
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({item})=>renderItem(item)}
                />
        </View>
    )
}
export default Carousel;