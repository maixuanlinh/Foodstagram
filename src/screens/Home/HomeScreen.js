// Importing required modules and components from React, React Native, and local files
import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles"; // Styles specific to this screen
import { recipes } from "../../data/dataArrays"; // Data array containing recipes
import MenuImage from "../../components/MenuImage/MenuImage"; // Custom component for the menu image
import { getCategoryName } from "../../data/MockDataAPI"; // Utility function to fetch category names

// Defining the HomeScreen functional component
export default function HomeScreen(props) {
  const { navigation } = props; // Extracting navigation prop for screen navigation

  // Setting up navigation options with a layout effect hook
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        // Custom menu image component with a press handler to open the navigation drawer
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />, // Placeholder for future header right options
    });
  }, [navigation]); // Dependency array with navigation to ensure effect runs when navigation changes

  // Handler function for pressing a recipe item
  const onPressRecipe = (item) => {
    // Navigates to the Recipe screen with the selected item as a parameter
    navigation.navigate("Recipe", { item });
  };

  // Function to render individual recipe items in the list
  const renderRecipes = ({ item }) => (
    // Touchable component for each recipe item
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>

          {/* Displaying the recipe image */}
        <Image style={styles.photo} source={{ uri: item.photo_url }} /> 
    
          {/* Displaying the recipe title */}
        <Text style={styles.title}>{item.title}</Text> 
      
          {/* Displaying the recipe category based on its ID */}
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text> 
    
      </View>
    </TouchableHighlight>
  );

  // Rendering the screen's main view
  return (
    <View>
      {/* FlatList to display recipes in a scrollable grid format */}
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipes}
        renderItem={renderRecipes}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </View>
  );
}
