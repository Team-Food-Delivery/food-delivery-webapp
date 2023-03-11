import react from "react";
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const images = [{id: 1, source: BurgerIcon}, {id: 2, source: PizzaSliceIcon}, {id:3, source: TurkeyIcon}]
const styles = StyleSheet.create({
    container: {
        flex:1
    },
    itemContainer: {
        flex:1,
        borderWidth: 1,
        borderColor: 'black',
        paddingHorizontal: 20,
        margin: 15,
        borderRadius: 20,
        alignSelf: 'flex-start'
    },
    item:{
        width: 75,
        height: 75,
        margin: 25,
    },
    title:{
        fontSize: 25,
        fontFamily: 'Arial',
        color: 'gray',
        fontWeight: 'bold'
    },
    shadow: {
        shadowColor: '#202020',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 5,
        elevation:5
    }
});

const Categories = () => {
    return (

    )
}