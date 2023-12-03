// Importing React and necessary components from React Native
import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types"; // For type-checking props
import styles from "./styles"; // Import custom styles for this screen
import MenuButton from "../../components/MenuButton/MenuButton"; // Custom MenuButton component

// DrawerContainer functional component definition
export default function DrawerContainer(props) {
  const { navigation } = props; // Extracting navigation prop for screen navigation

  // Render the drawer container with navigation buttons
  return (
    <View style={styles.content}>
      {/* Container for the menu buttons */}
      <View style={styles.container}>
        {/* MenuButton for Home, navigates to the Home screen */}
        <MenuButton
          title="HOME"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("Home");
            navigation.closeDrawer(); // Close drawer after navigation
          }}
        />
        {/* MenuButton for Categories, navigates to the Categories screen */}
        <MenuButton
          title="CATEGORIES"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("Categories");
            navigation.closeDrawer(); // Close drawer after navigation
          }}
        />
        {/* MenuButton for Search, navigates to the Search screen */}
        <MenuButton
          title="SEARCH"
          source={require("../../../assets/icons/search.png")}
          onPress={() => {
            navigation.navigate("Search");
            navigation.closeDrawer(); // Close drawer after navigation
          }}
        />
      </View>
    </View>
  );
}

// PropTypes for type checking the navigation prop
DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
