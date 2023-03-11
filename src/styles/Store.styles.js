import {  StyleSheet } from "react-native";

const StoreStyles = StyleSheet.create({
    itemContainer: {
        borderWidth: 1,
        borderColor: 'black',
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
        shadowColor: '#202020',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 5,
        elevation:5
    }
});
export default StoreStyles;