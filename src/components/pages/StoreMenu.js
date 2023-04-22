import { 
    Image, 
    View, 
    FlatList, 
    Text, 
    TouchableOpacity,
    StyleSheet, 
    useWindowDimensions 
} from "react-native";

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
    },
    dish: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 8
    },
    price: {
        fontSize: 9
    },
    name: {
        marginLeft: 10,
        fontSize: 24,
        fontWeight: 'bold'
    },
    foodItem: {
        shadowColor: '#000',
        shadowRadius: 6,
        shadowOpacity: 0.2,
        paddingHorizontal: 10,
        flexWrap: 'wrap',
        backgroundColor:'#fff',
        borderWidth: 1,
        borderColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 15,
        borderRadius: 20
    },
    foodCategoryName: {
        marginLeft: 10,
        fontWeight: 'bold'
    },
    foodCategoryContainer: {
        marginVertical: 10
    },
    foodImage: {
        width: 50,
        height: 50
    },
    foodDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

const renderFoodItem = (item, windowWidth) => {
    // For larger screen, depending on width size then calculate width / number
    return <TouchableOpacity style={[styles.foodItem, { width: windowWidth / 2}]}>
        <Text style={styles.dish}>{item.dish}</Text>
        <View style={styles.foodDetails}>
            <Text style={styles.description}>{item.description}</Text>
            <Image style={styles.foodImage} source={{uri: item.image_url}}/>
        </View>
        <Text style={styles.price}>${item.price}</Text>
    </TouchableOpacity>
        
}

const StoreMenu = ({category}) => {
    const { width: windowWidth } = useWindowDimensions();
    return (
        <View>
            <Text style={styles.name}>Menu</Text>
            {Object.keys(category).map(foodCategory => {
                return <View style={styles.foodCategoryContainer}>
                    <Text style={styles.foodCategoryName}>
                        {foodCategory.charAt(0).toUpperCase() + foodCategory.slice(1)}
                    </Text>
                    <FlatList
                        key={foodCategory}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={category[foodCategory]}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => renderFoodItem(item, windowWidth)}
                    />
                </View>
            })}
        </View>
    )
}

export default StoreMenu;