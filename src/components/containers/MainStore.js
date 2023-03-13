import { useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Carousel from "../pages/Carousel";
import Divider from "../pages/Divider";
import Search from "../pages/Search";
import CategoriesStyles from "../../styles/Categories.styles";
import StoreStyles from "../../styles/Store.styles";
import BurgerIcon from '../../img/burger-outline.png'
import BurgerFriesIcon from '../../img/burger-and-fries2.png'
import SupremePizzaIcon from '../../img/pizza_2.png'
import PepperoniPizzaIcon from '../../img/pizza_1.png'
import PizzaSliceIcon from '../../img/pizza-slice-outline.png'
import TurkeyIcon from '../../img/christmas-dinner-outline.png'

// Fake data with static images, both should come from server
const results = [{"id": 1, "source":PepperoniPizzaIcon, "store": "Kennedy-Henderson", "phone_number": "(895)291-0253x051", "dish": "Pizza", "dish_description": "Three egg whites with spinach, mushrooms, caramelized onions, tomatoes and low-fat feta cheese. With herbed quinoa, and your choice of rye or whole-grain toast.", "price": 15.46, "rating": 5}, {"id": 2, "source":SupremePizzaIcon,"store": "Clayton Group", "phone_number": "+1-050-022-5883", "dish": "Pasta and Beans", "dish_description": "Breaded fried chicken with waffles, and a side of maple syrup.", "price": 13.94, "rating": 1}, {"id": 3, "source":BurgerFriesIcon, "store": "Gillespie-Kennedy", "phone_number": "(853)263-7908x93351", "dish": "Souvlaki", "dish_description": "Fresh parsley, Italian sausage, shallots, garlic, sun-dried tomatoes and mozzarella cheese in an all-butter crust. With a side of mixed fruits.", "price": 16.77, "rating": 5}, {"id": 4, "source":PepperoniPizzaIcon, "store": "Brown Ltd", "phone_number": "+1-871-280-9791x12614", "dish": "Tiramis\u00f9", "dish_description": "Three egg omelet with Roquefort cheese, chives, and ham. With a side of roasted potatoes, and your choice of toast or croissant.", "price": 7.88, "rating": 1}, {"id": 5, "source":BurgerFriesIcon, "store": "Hall-Scott", "phone_number": "479-544-6237", "dish": "Risotto with seafood", "dish_description": "28-day aged 300g USDA Certified Prime Ribeye, rosemary-thyme garlic butter, with choice of two sides.", "price": 6.15, "rating": 4}]
const images = [{id: 1, source: BurgerIcon}, {id: 2, source: PizzaSliceIcon}, {id:3, source: TurkeyIcon}]

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
const MainStore = () => {
    const [storeSearch, setStoreSearch] = useState('')

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Divider />
                <Search setStoreSearch={setStoreSearch} storeSearch={storeSearch} onStoreSearchChange={setStoreSearch}/>
                <Divider />
                <Carousel title='Categories' customStyle={CategoriesStyles} data={images} />
                <Divider />
                <Carousel title='Stores' customStyle={StoreStyles} data={results} />
            </ScrollView>
        </SafeAreaView>

    )
}
export default MainStore;