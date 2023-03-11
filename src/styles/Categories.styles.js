import {  StyleSheet } from "react-native";

const CategoriesStyles = StyleSheet.create({
    itemContainer: {
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
    shadow: {
        shadowColor: '#202020',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 5,
        elevation:5
    }
});
export default CategoriesStyles