import {  StyleSheet } from "react-native";

const CategoriesStyles = StyleSheet.create({
    itemContainer: {
        borderWidth: 1,
        borderColor: '#fff',
        paddingHorizontal: 20,
        margin: 15,
        borderRadius: 20,
        alignSelf: 'flex-start'
    },
    item:{
        width: 50,
        height: 50,
        margin: 13,
    },
    shadow: {
        // shadowColor: '#00b300',
        backgroundColor:'#fff',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 6,
        shadowOpacity: 0.2,
        elevation:5
    },
    greenShadow: {
        backgroundColor:'#fff',
        shadowColor: '#00cc00',
        shadowOffset: {width: 0, height: 5},
        shadowRadius: 7,
        shadowOpacity: 0.6,
        elevation:5
    }
});
export default CategoriesStyles