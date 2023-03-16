import { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import CarouselDetails from "./CarouselDetails";
import { LinearGradient } from 'expo-linear-gradient';
import BurgerFriesIcon from '../../img/burger-and-fries2.png'
import SupremePizzaIcon from '../../img/pizza_2.png'
import PepperoniPizzaIcon from '../../img/pizza_1.png'

// Fake store pics
const storePics = [BurgerFriesIcon,SupremePizzaIcon,PepperoniPizzaIcon]

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

const Carousel = ({title, customStyle, data: { data, images }}) => {

    // Remove later when we get real images from server
    const insertImages = (inputData) => inputData.map(d => {
        d['source'] = storePics[Math.floor(Math.random()*storePics.length)]
        return d
    })
    const [isPress, setIsPress] = useState({
        pressed: false,
        pressedId: null
    });

    const checkTitle = (title, item) => {
        return title === 'Categories' 
            ? ['transparent'] 
            : [ '#fff', isPress.pressedId !== item.id ? '#fff': '#0fde12'];
    }

    const checkSize = (title, item) => {
        return title === 'Categories' 
            ? customStyle.item 
            : isPress.pressedId !== item.id ? customStyle.item : customStyle.itemEnlarge
    }

    const renderItem = (item) => {
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
                    <Image resizeMode='contain' source={item.source} style={checkSize(title, item)}/>
                    {item.store && <CarouselDetails item={item} /> }
                </LinearGradient>
            </TouchableOpacity>
        )
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
                
                {( data || images) && <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data ? (insertImages(data)) : images}
                    keyExtractor={(item) => item.id}
                    renderItem={({item})=>renderItem(item)}
                />}
        </View>
    )
}
export default Carousel;