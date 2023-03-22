import { useState, useContext } from "react";
import { StyleSheet, SafeAreaView, ScrollView, ActivityIndicator } from "react-native";
import Carousel from "../pages/Carousel";
import Divider from "../pages/Divider";
import Search from "../pages/Search";
import CategoriesStyles from "../../styles/Categories.styles";
import StoreStyles from "../../styles/Store.styles";
import BurgerIcon from '../../img/burger-outline.png'
import PizzaSliceIcon from '../../img/pizza-slice-outline.png'
import TurkeyIcon from '../../img/christmas-dinner-outline.png'
import useFetch from "../utiities/useFetch";
import { FOOD_DELIVERY_API } from '@env';
import { AuthContext } from "../../contexts/AuthContext";

// Fake data with static images, both should come from server
// const results = [{"id": 1, "source":PepperoniPizzaIcon, "store": "Kennedy-Henderson", "phone_number": "(895)291-0253x051", "dish": "Pizza", "dish_description": "Three egg whites with spinach, mushrooms, caramelized onions, tomatoes and low-fat feta cheese. With herbed quinoa, and your choice of rye or whole-grain toast.", "price": 15.46, "rating": 5}, {"id": 2, "source":SupremePizzaIcon,"store": "Clayton Group", "phone_number": "+1-050-022-5883", "dish": "Pasta and Beans", "dish_description": "Breaded fried chicken with waffles, and a side of maple syrup.", "price": 13.94, "rating": 1}, {"id": 3, "source":BurgerFriesIcon, "store": "Gillespie-Kennedy", "phone_number": "(853)263-7908x93351", "dish": "Souvlaki", "dish_description": "Fresh parsley, Italian sausage, shallots, garlic, sun-dried tomatoes and mozzarella cheese in an all-butter crust. With a side of mixed fruits.", "price": 16.77, "rating": 5}, {"id": 4, "source":PepperoniPizzaIcon, "store": "Brown Ltd", "phone_number": "+1-871-280-9791x12614", "dish": "Tiramis\u00f9", "dish_description": "Three egg omelet with Roquefort cheese, chives, and ham. With a side of roasted potatoes, and your choice of toast or croissant.", "price": 7.88, "rating": 1}, {"id": 5, "source":BurgerFriesIcon, "store": "Hall-Scott", "phone_number": "479-544-6237", "dish": "Risotto with seafood", "dish_description": "28-day aged 300g USDA Certified Prime Ribeye, rosemary-thyme garlic butter, with choice of two sides.", "price": 6.15, "rating": 4}]
const images = [{id: 1, source: BurgerIcon}, {id: 2, source: PizzaSliceIcon}, {id:3, source: TurkeyIcon}]

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

const MainStore = () => {
    const [storeSearch, setStoreSearch] = useState();
    const { authData } = useContext(AuthContext);
    
    // Change the FOOD_DELIVERY_API in .env file everytime you start up ngrok and using your phone
    // If not phone, then set FOOD_DELIVERY_API=htttp://localhost:8000 in .env file
    const { data, loading, error } = useFetch(`${FOOD_DELIVERY_API}/all/stores`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authData.authToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            start_from: 0,
            size: 10,
            sort_by: 'rating',
            direction: 'desc'
        })
    });
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Divider />
                <Search storeSearch={storeSearch} setStoreSearch={setStoreSearch}/>
                <Divider />
                {/* This will need a loading indicator too when we load images from the server */}
                <Carousel title='Categories' customStyle={CategoriesStyles} data={{images}} /> 
                <Divider />
                {loading && <ActivityIndicator size="large" color="#00ff00" />}
                {!loading && data && <Carousel title='Stores' customStyle={StoreStyles} data={{ data }} />}
            </ScrollView>
        </SafeAreaView>

    )
}
export default MainStore;