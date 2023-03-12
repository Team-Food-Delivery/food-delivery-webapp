import {  StyleSheet } from "react-native";

const StoreStyles = StyleSheet.create({
    itemContainer: {
        borderWidth: 1,
        borderColor: '#fff',
        padding: 10,
        margin: 15,
        borderRadius: 20,
        alignItems: 'flex-start'
    },
    item:{
        width: 125,
        height: 140,
    },
    shadow: {
        backgroundColor:'#fff',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 6,
        shadowOpacity: 0.2,
        elevation:5
    },
    greenShadow: {
        backgroundColor: '#fff',
        shadowColor: '#00cc00',
        shadowOffset: {width: 0, height: 5},
        shadowRadius: 7,
        shadowOpacity: 0.6,
        elevation:5
    }
});
export default StoreStyles;