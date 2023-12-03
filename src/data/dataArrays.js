export const categories = [
  {
    id: 1,
    name: "Chinese Cuisine",
    photo_url:
      "https://voicesfromthekitchen.org/wp-content/uploads/2021/10/Chinese-Cuisine-1.jpg",
  },
  {
    id: 2,
    name: "Japanese Cuisine",
    photo_url:
      "https://www.tastingtable.com/img/gallery/20-japanese-dishes-you-need-to-try-at-least-once/l-intro-1664219638.jpg",
  },
  {
    id: 3,
    name: "Indian Cuisine",
    photo_url:
      "https://voicesfromthekitchen.org/wp-content/uploads/2021/10/Chinese-Cuisine-1.jpg",
  },
  {
    id: 4,
    name: "Korean Cuisine",
    photo_url:
      "https://media.cnn.com/api/v1/images/stellar/prod/181114130138-korean-food-2620014201204004k-jeonju-bibimbap.jpg?q=w_1600,h_900,x_0,y_0,c_fill/h_618",
  },
  {
    id: 5,
    name: "Thai Cuisine",
    photo_url:
      "https://i0.wp.com/www.tatnews.org/wp-content/uploads/2018/01/Discover-Thai-Cuisine-through-its-famous-four-regions-Phat-Thai.jpg?ssl=1",
  },
  {
    id: 0,
    name: "Vietnamese Cuisine",
    photo_url:
      "https://www.easyridersvietnam.com/wp-content/uploads/2023/03/must-try-dishes-in-vietnam-pho1.jpg",
  },
  {
    id: 6,
    name: "Finnish Cuisine",
    photo_url:
      "https://photos.smugmug.com/Finland/Farmors-Cafe/i-vGDtMhs/0/1000x1000/Farmors-Cafe-Hogsara-Finland%20%281%29-1000x1000.jpg",
  },
];

export const recipes = [
  {
    recipeId: 1,
    categoryId: 1, // Chinese Cuisine
    title: "Mapo Tofu",
    photo_url:
      "https://www.seriouseats.com/thmb/CaR7btHrJgEO3OKZD1Z_795VmII=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__07__2021-02-12-Mapo-Tofu-MHOM-10-804db1211f1d47dbae505341d1e7b994.jpg", // Add photo URL
    time: "25 mins",
    photosArray: [
      "https://www.seriouseats.com/thmb/CaR7btHrJgEO3OKZD1Z_795VmII=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__07__2021-02-12-Mapo-Tofu-MHOM-10-804db1211f1d47dbae505341d1e7b994.jpg", // Add photo URL

      "https://hips.hearstapps.com/hmg-prod/images/fiery-pork-lettuce-wraps-654d1ae21fc49.jpg?crop=1.00xw:0.669xh;0,0.142xh&resize=640:*",
    ],
    ingredients: [
      [1, "300g soft tofu"],
      [2, "100g ground pork"],
      [3, "2 tbsp Sichuan peppercorns"],
      [4, "1 tbsp fermented black beans"],
      [5, "3 tbsp chili oil"],
      [6, "1 tbsp minced garlic"],
    ],
    description:
      "Start by heating a pan and cooking the ground pork until browned. Add minced garlic, Sichuan peppercorns, and fermented black beans. Stir-fry until fragrant. Add the tofu, gently stir in chili oil, and simmer. Serve hot garnished with spring onions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lectus feugiat, vestibulum arcu sed, pulvinar lectus. Donec sed tincidunt quam. In ut purus feugiat, varius metus at, tempor purus. Donec non orci in velit blandit sagittis. Donec eget lectus sit amet massa tincidunt elementum. Praesent tincidunt volutpat dolor, vitae posuere leo suscipit ac. Fusce a diam sed lectus fermentum pharetra sit amet id leo. Curabitur sit amet aliquam mauris, quis porta orci. Suspendisse dapibus, arcu pharetra egestas cursus, tellus mauris condimentum nulla, id molestie urna nunc vel metus. Nunc a mi aliquam, aliquam urna at, rutrum massa. Vestibulum congue ligula nec elementum dignissim. Sed tristique nulla quis elit rutrum, eu condimentum sem rhoncus. Phasellus sagittis, velit et vehicula tristique, tellus elit vulputate nisi, et finibus est nisl sed ipsum. Pellentesque augue arcu, pretium varius imperdiet porta, fringilla nec massa. Suspendisse dapibus eu quam non semper. Quisque velit orci, vulputate quis massa iaculis, imperdiet tempor purus. Donec eget diam sed sem porta tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam mauris justo, laoreet ornare ex ut, dictum bibendum enim. Fusce odio arcu, pellentesque eu viverra at, volutpat vel magna. Duis viverra condimentum lorem. Morbi eu nibh eu dolor vestibulum laoreet. Praesent eu ante dui. Nunc gravida ultrices sollicitudin. Donec dictum blandit mauris et vestibulum.",
  },
  {
    recipeId: 2,
    categoryId: 2, // Japanese Cuisine
    title: "Ramen",
    photo_url:
      "https://inquiringchef.com/wp-content/uploads/2022/11/Easy-Miso-Ramen_square-0723-500x375.jpg",
    photosArray: [
      "https://inquiringchef.com/wp-content/uploads/2022/11/Easy-Miso-Ramen_square-0723-500x375.jpg",
      "https://hips.hearstapps.com/hmg-prod/images/fiery-pork-lettuce-wraps-654d1ae21fc49.jpg?crop=1.00xw:0.669xh;0,0.142xh&resize=640:*",
    ],

    time: "30 mins",
    ingredients: [
      [7, "150g ramen noodles"],
      [8, "1L chicken or pork broth"],
      [9, "200g sliced pork belly"],
      [10, "50g bamboo shoots"],
      [11, "2 eggs"],
      [12, "Nori and spring onions for garnish"],
    ],
    description:
      "Boil the noodles and cook until al dente. In a separate pot, simmer the broth and add soy sauce, mirin, and salt. Grill the pork belly until crispy. Assemble the ramen with noodles, broth, pork slices, boiled eggs, bamboo shoots, nori, and spring onions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lectus feugiat, vestibulum arcu sed, pulvinar lectus. Donec sed tincidunt quam. In ut purus feugiat, varius metus at, tempor purus. Donec non orci in velit blandit sagittis. Donec eget lectus sit amet massa tincidunt elementum. Praesent tincidunt volutpat dolor, vitae posuere leo suscipit ac. Fusce a diam sed lectus fermentum pharetra sit amet id leo. Curabitur sit amet aliquam mauris, quis porta orci. Suspendisse dapibus, arcu pharetra egestas cursus, tellus mauris condimentum nulla, id molestie urna nunc vel metus. Nunc a mi aliquam, aliquam urna at, rutrum massa. Vestibulum congue ligula nec elementum dignissim. Sed tristique nulla quis elit rutrum, eu condimentum sem rhoncus. Phasellus sagittis, velit et vehicula tristique, tellus elit vulputate nisi, et finibus est nisl sed ipsum. Pellentesque augue arcu, pretium varius imperdiet porta, fringilla nec massa. Suspendisse dapibus eu quam non semper. Quisque velit orci, vulputate quis massa iaculis, imperdiet tempor purus. Donec eget diam sed sem porta tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam mauris justo, laoreet ornare ex ut, dictum bibendum enim. Fusce odio arcu, pellentesque eu viverra at, volutpat vel magna. Duis viverra condimentum lorem. Morbi eu nibh eu dolor vestibulum laoreet. Praesent eu ante dui. Nunc gravida ultrices sollicitudin. Donec dictum blandit mauris et vestibulum.  ",
  },
  {
    recipeId: 3,
    categoryId: 3, // Indian Cuisine
    title: "Butter Chicken",
    photo_url:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/04/butter-chicken-recipe.jpg", // Add photo URL
    time: "45 mins",
    photosArray: [
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/04/butter-chicken-recipe.jpg",
      "https://hips.hearstapps.com/hmg-prod/images/fiery-pork-lettuce-wraps-654d1ae21fc49.jpg?crop=1.00xw:0.669xh;0,0.142xh&resize=640:*",
    ],
    ingredients: [
      [13, "500g chicken breast"],
      [14, "200ml tomato puree"],
      [15, "100ml cream"],
      [16, "1 tbsp garam masala"],
      [17, "1 tsp turmeric"],
      [18, "1 tsp cumin"],
    ],
    description:
      "Marinate the chicken in yogurt, turmeric, garam masala, and cumin. Grill until done. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lectus feugiat, vestibulum arcu sed, pulvinar lectus. Donec sed tincidunt quam. In ut purus feugiat, varius metus at, tempor purus. Donec non orci in velit blandit sagittis. Donec eget lectus sit amet massa tincidunt elementum. Praesent tincidunt volutpat dolor, vitae posuere leo suscipit ac. Fusce a diam sed lectus fermentum pharetra sit amet id leo. Curabitur sit amet aliquam mauris, quis porta orci. Suspendisse dapibus, arcu pharetra egestas cursus, tellus mauris condimentum nulla, id molestie urna nunc vel metus. In a pan, cook tomato puree with spices, then add cream and grilled chicken. Simmer until the sauce thickens. Serve with naan or rice.",
  },

  {
    recipeId: 4,
    categoryId: 4, // Korean Cuisine
    title: "Bibimbap",
    photo_url:
      "https://recipetineats.com/wp-content/uploads/2019/05/Bibimbap_3.jpg",
    time: "40 mins",
    photosArray: [
      "https://recipetineats.com/wp-content/uploads/2019/05/Bibimbap_3.jpg",
      "https://hips.hearstapps.com/hmg-prod/images/fiery-pork-lettuce-wraps-654d1ae21fc49.jpg?crop=1.00xw:0.669xh;0,0.142xh&resize=640:*",
    ],
    ingredients: [
      [19, "2 cups cooked rice"],
      [20, "200g beef mince"],
      [21, "1 cup spinach"],
      [22, "1 carrot, julienned"],
      [23, "1 cucumber, sliced"],
      [24, "1 egg"],
      [25, "2 tbsp soy sauce"],
      [26, "1 tbsp sesame oil"],
      [27, "1 tbsp gochujang (Korean chili paste)"],
    ],
    description:
      "Cook beef mince with soy sauce and sesame oil. Blanch spinach and season. Sauté carrot and cucumber separately. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lectus feugiat, vestibulum arcu sed, pulvinar lectus. Donec sed tincidunt quam. In ut purus feugiat, varius metus at, tempor purus. Donec non orci in velit blandit sagittis. Donec eget lectus sit amet massa tincidunt elementum. Praesent tincidunt volutpat dolor, vitae posuere leo suscipit ac. Fusce a diam sed lectus fermentum pharetra sit amet id leo. Curabitur sit amet aliquam mauris, quis porta orci. Suspendisse dapibus, arcu pharetra egestas cursus, tellus mauris condimentum nulla, id molestie urna nunc vel metus.Fry an egg. Assemble the dish with rice at the bottom, topped with the cooked ingredients, and a dollop of gochujang. Mix before eating.",
  },
  {
    recipeId: 5,
    categoryId: 5, // Thai Cuisine
    title: "Pad Thai",
    photo_url:
      "https://hips.hearstapps.com/hmg-prod/images/pad-thai-index-6477629462a38.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*",
    time: "30 mins",
    photosArray: [
      "https://hips.hearstapps.com/hmg-prod/images/pad-thai-index-6477629462a38.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*",
      "https://hips.hearstapps.com/hmg-prod/images/fiery-pork-lettuce-wraps-654d1ae21fc49.jpg?crop=1.00xw:0.669xh;0,0.142xh&resize=640:*",
    ],
    ingredients: [
      [28, "200g flat rice noodles"],
      [29, "100g tofu, cubed"],
      [30, "100g shrimp"],
      [31, "2 eggs"],
      [32, "1/4 cup tamarind paste"],
      [33, "2 tbsp fish sauce"],
      [34, "1 tbsp sugar"],
      [35, "Bean sprouts, peanuts, lime wedge for garnish"],
    ],
    description:
      "Soak rice noodles until soft. Stir-fry tofu and shrimp, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lectus feugiat, vestibulum arcu sed, pulvinar lectus. Donec sed tincidunt quam. In ut purus feugiat, varius metus at, tempor purus. Donec non orci in velit blandit sagittis. Donec eget lectus sit amet massa tincidunt elementum. Praesent tincidunt volutpat dolor, vitae posuere leo suscipit ac. Fusce a diam sed lectus fermentum pharetra sit amet id leo. Curabitur sit amet aliquam mauris, quis porta orci. Suspendisse dapibus, arcu pharetra egestas cursus, tellus mauris condimentum nulla, id molestie urna nunc vel metus. push aside, and add eggs to scramble. Add noodles, tamarind paste, fish sauce, and sugar. Toss everything together. Serve garnished with bean sprouts, crushed peanuts, and a wedge of lime.",
  },
  {
    recipeId: 6,
    categoryId: 0, // Vietnamese Cuisine
    title: "Pho",
    photo_url:
      "https://hot-thai-kitchen.com/wp-content/uploads/2023/04/pho-beef-blog.jpg",
    time: "1 hr 30 mins",
    photosArray: [
      "https://hot-thai-kitchen.com/wp-content/uploads/2023/04/pho-beef-blog.jpg",
      "https://hips.hearstapps.com/hmg-prod/images/fiery-pork-lettuce-wraps-654d1ae21fc49.jpg?crop=1.00xw:0.669xh;0,0.142xh&resize=640:*",
    ],
    ingredients: [
      [36, "2L beef broth"],
      [37, "200g rice noodles"],
      [38, "200g thinly sliced beef"],
      [39, "1 onion, sliced"],
      [40, "1 ginger, sliced"],
      [41, "Cilantro, basil, lime, jalapeños for garnish"],
    ],
    description:
      "Simmer beef broth with onion, ginger, and spices. Cook rice noodles separately. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lectus feugiat, vestibulum arcu sed, pulvinar lectus. Donec sed tincidunt quam. In ut purus feugiat, varius metus at, tempor purus. Donec non orci in velit blandit sagittis. Donec eget lectus sit amet massa tincidunt elementum. Praesent tincidunt volutpat dolor, vitae posuere leo suscipit ac. Fusce a diam sed lectus fermentum pharetra sit amet id leo. Curabitur sit amet aliquam mauris, quis porta orci. Suspendisse dapibus, arcu pharetra egestas cursus, tellus mauris condimentum nulla, id molestie urna nunc vel metus.Assemble the bowl with noodles, raw beef slices, and pour hot broth over. Beef will cook in the broth. Garnish with herbs, lime, and jalapeños.",
  },
  {
    recipeId: 7,
    categoryId: 1, // Chinese Cuisine
    title: "Peking Duck",
    photo_url:
      "https://www.seriouseats.com/thmb/5WEmtEV2Y37pU1joxKllpZ7uvDo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__20100910-duck-primary-43f6bb74c3b7490b9b6b99b643fd31f3.jpg",
    time: "24 hrs (includes marinating)",
    photosArray: [
      "https://www.seriouseats.com/thmb/5WEmtEV2Y37pU1joxKllpZ7uvDo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__20100910-duck-primary-43f6bb74c3b7490b9b6b99b643fd31f3.jpg",
      "https://hips.hearstapps.com/hmg-prod/images/fiery-pork-lettuce-wraps-654d1ae21fc49.jpg?crop=1.00xw:0.669xh;0,0.142xh&resize=640:*",
    ],
    ingredients: [
      [42, "1 whole duck"],
      [43, "1 tbsp honey"],
      [44, "1 tbsp soy sauce"],
      [45, "1 tsp five-spice powder"],
      [46, "Cucumber and spring onions for serving"],
      [47, "Pancakes for serving"],
    ],
    description:
      "Marinate the duck with honey, soy sauce, and five-spice. Hang to dry for 24 hours.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lectus feugiat, vestibulum arcu sed, pulvinar lectus. Donec sed tincidunt quam. In ut purus feugiat, varius metus at, tempor purus. Donec non orci in velit blandit sagittis. Donec eget lectus sit amet massa tincidunt elementum. Praesent tincidunt volutpat dolor, vitae posuere leo suscipit ac. Fusce a diam sed lectus fermentum pharetra sit amet id leo. Curabitur sit amet aliquam mauris, quis porta orci. Suspendisse dapibus, arcu pharetra egestas cursus, tellus mauris condimentum nulla, id molestie urna nunc vel metus. Roast until the skin is crisp. Serve sliced with pancakes, cucumber, and spring onions.",
  },
  {
    recipeId: 8,
    categoryId: 2, // Japanese Cuisine
    title: "Tempura",
    photo_url:
      "https://thesuburbansoapbox.com/wp-content/uploads/2022/08/STempura-18.jpg",
    time: "20 mins",
    photosArray: [
      "https://thesuburbansoapbox.com/wp-content/uploads/2022/08/STempura-18.jpg",
      "https://hips.hearstapps.com/hmg-prod/images/fiery-pork-lettuce-wraps-654d1ae21fc49.jpg?crop=1.00xw:0.669xh;0,0.142xh&resize=640:*",
    ],
    ingredients: [
      [48, "200g shrimp"],
      [49, "2 cups mixed vegetables (like bell pepper, sweet potato)"],
      [50, "1 egg"],
      [51, "1 cup ice-cold water"],
      [52, "2 cups all-purpose flour"],
      [53, "Vegetable oil for frying"],
    ],
    description:
      "Make a batter with egg, ice-cold water, and flour.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lectus feugiat, vestibulum arcu sed, pulvinar lectus. Donec sed tincidunt quam. In ut purus feugiat, varius metus at, tempor purus. Donec non orci in velit blandit sagittis. Donec eget lectus sit amet massa tincidunt elementum. Praesent tincidunt volutpat dolor, vitae posuere leo suscipit ac. Fusce a diam sed lectus fermentum pharetra sit amet id leo. Curabitur sit amet aliquam mauris, quis porta orci. Suspendisse dapibus, arcu pharetra egestas cursus, tellus mauris condimentum nulla, id molestie urna nunc vel metus.  Dip shrimp and vegetables in batter. Fry in hot oil until golden. Serve with dipping sauce.",
  },
  {
    recipeId: 9,
    categoryId: 3, // Indian Cuisine
    title: "Chicken Tikka Masala",
    photo_url:
      "https://www.jocooks.com/wp-content/uploads/2019/06/instant-pot-chicken-tikka-masala-1-4.jpg",
    time: "1 hr",
    photosArray: [
      "https://www.jocooks.com/wp-content/uploads/2019/06/instant-pot-chicken-tikka-masala-1-4.jpg",
      "https://hips.hearstapps.com/hmg-prod/images/fiery-pork-lettuce-wraps-654d1ae21fc49.jpg?crop=1.00xw:0.669xh;0,0.142xh&resize=640:*",
    ],
    ingredients: [
      [54, "500g chicken, cubed"],
      [55, "1 cup yogurt"],
      [56, "2 tbsp tikka masala spice mix"],
      [57, "1 can tomato puree"],
      [58, "1 cup cream"],
      [59, "2 tbsp butter"],
      [60, "1 onion, chopped"],
    ],
    description:
      "Marinate chicken in yogurt and tikka masala spice. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lectus feugiat, vestibulum arcu sed, pulvinar lectus. Donec sed tincidunt quam. In ut purus feugiat, varius metus at, tempor purus. Donec non orci in velit blandit sagittis. Donec eget lectus sit amet massa tincidunt elementum. Praesent tincidunt volutpat dolor, vitae posuere leo suscipit ac. Fusce a diam sed lectus fermentum pharetra sit amet id leo. Curabitur sit amet aliquam mauris, quis porta orci. Suspendisse dapibus, arcu pharetra egestas cursus, tellus mauris condimentum nulla, id molestie urna nunc vel metus. Grill until cooked. Sauté onions, add tomato puree and cream. Add grilled chicken. Simmer until sauce thickens.",
  },
  {
    recipeId: 10,
    categoryId: 4, // Korean Cuisine
    title: "Kimchi Stew",
    photo_url:
      "https://www.beyondkimchee.com/wp-content/uploads/2022/04/Kimchi-Jjigae-thumbnail.jpg",
    time: "35 mins",
    photosArray: [
      "https://www.beyondkimchee.com/wp-content/uploads/2022/04/Kimchi-Jjigae-thumbnail.jpg",
      "https://hips.hearstapps.com/hmg-prod/images/fiery-pork-lettuce-wraps-654d1ae21fc49.jpg?crop=1.00xw:0.669xh;0,0.142xh&resize=640:*",
    ],
    ingredients: [
      [61, "2 cups kimchi"],
      [62, "200g tofu, cubed"],
      [63, "100g pork belly, sliced"],
      [64, "1 onion, sliced"],
      [65, "4 cups water"],
      [66, "1 tbsp gochugaru (Korean chili powder)"],
      [67, "1 tsp soy sauce"],
    ],
    description:
      "Sauté pork belly and onion. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lectus feugiat, vestibulum arcu sed, pulvinar lectus. Donec sed tincidunt quam. In ut purus feugiat, varius metus at, tempor purus. Donec non orci in velit blandit sagittis. Donec eget lectus sit amet massa tincidunt elementum. Praesent tincidunt volutpat dolor, vitae posuere leo suscipit ac. Fusce a diam sed lectus fermentum pharetra sit amet id leo. Curabitur sit amet aliquam mauris, quis porta orci. Suspendisse dapibus, arcu pharetra egestas cursus, tellus mauris condimentum nulla, id molestie urna nunc vel metus.Add kimchi, gochugaru, and water. Bring to a boil, add tofu, and simmer. Season with soy sauce and serve hot.",
  },
  {
    recipeId: 11,
    categoryId: 6, // Finnish Cuisine
    title: "Karjalanpiirakka (Karelian Pies)",
    photo_url:
      "https://img.atlasobscura.com/PvYQvAucqDSL51HYhMfLEtbSz5mQdCEBUzSTyZoplXM/rs:fill:780:520:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3RoaW5n/X2ltYWdlcy9mZGJk/MjZjNi0yNGQyLTQy/MjAtOGI5Ni1lZjUy/MGZlOTM2ODljM2E1/ODg1MzM4ZDY2MzBm/NDRfdGFxcXV0dXFx/YV9rYXJlbGlhbiBw/aWVzLmpwZw.jpg", // Add photo URL
    time: "1 hr 20 mins",
    photosArray: [
      "https://img.atlasobscura.com/PvYQvAucqDSL51HYhMfLEtbSz5mQdCEBUzSTyZoplXM/rs:fill:780:520:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3RoaW5n/X2ltYWdlcy9mZGJk/MjZjNi0yNGQyLTQy/MjAtOGI5Ni1lZjUy/MGZlOTM2ODljM2E1/ODg1MzM4ZDY2MzBm/NDRfdGFxcXV0dXFx/YV9rYXJlbGlhbiBw/aWVzLmpwZw.jpg",
      "https://hips.hearstapps.com/hmg-prod/images/fiery-pork-lettuce-wraps-654d1ae21fc49.jpg?crop=1.00xw:0.669xh;0,0.142xh&resize=640:*",
    ],
    ingredients: [
      [68, "2 cups rye flour"],
      [69, "1 cup water"],
      [70, "1/2 tsp salt"],
      [71, "2 cups cooked rice porridge"],
      [72, "1 egg, beaten"],
      [73, "1/4 cup melted butter"],
    ],
    description:
      "Mix rye flour, water, and salt to form a dough. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lectus feugiat, vestibulum arcu sed, pulvinar lectus. Donec sed tincidunt quam. In ut purus feugiat, varius metus at, tempor purus. Donec non orci in velit blandit sagittis. Donec eget lectus sit amet massa tincidunt elementum. Praesent tincidunt volutpat dolor, vitae posuere leo suscipit ac. Fusce a diam sed lectus fermentum pharetra sit amet id leo. Curabitur sit amet aliquam mauris, quis porta orci. Suspendisse dapibus, arcu pharetra egestas cursus, tellus mauris condimentum nulla, id molestie urna nunc vel metus. Roll into thin rounds. Place a spoonful of rice porridge on each round, fold edges over the filling, and pinch to create an oval shape. Bake at 275°F (135°C) for 10-15 mins. Brush with a mixture of melted butter and beaten egg. Serve warm, often enjoyed with egg butter.",
  },
];

export const ingredients = [
  {
    ingredientId: 1,
    name: "Soft tofu",
    photo_url: "https://placeholder.com/soft-tofu",
  },
  {
    ingredientId: 2,
    name: "Ground pork",
    photo_url: "https://placeholder.com/ground-pork",
  },
  {
    ingredientId: 3,
    name: "Sichuan peppercorns",
    photo_url: "https://placeholder.com/sichuan-peppercorns",
  },
  {
    ingredientId: 4,
    name: "Fermented black beans",
    photo_url: "https://placeholder.com/fermented-black-beans",
  },
  {
    ingredientId: 5,
    name: "Chili oil",
    photo_url: "https://placeholder.com/chili-oil",
  },
  {
    ingredientId: 6,
    name: "Minced garlic",
    photo_url: "https://placeholder.com/minced-garlic",
  },
  {
    ingredientId: 7,
    name: "Ramen noodles",
    photo_url: "https://placeholder.com/ramen-noodles",
  },
  {
    ingredientId: 8,
    name: "Chicken or pork broth",
    photo_url: "https://placeholder.com/chicken-pork-broth",
  },
  {
    ingredientId: 9,
    name: "Sliced pork belly",
    photo_url: "https://placeholder.com/sliced-pork-belly",
  },
  {
    ingredientId: 10,
    name: "Bamboo shoots",
    photo_url: "https://placeholder.com/bamboo-shoots",
  },
  { ingredientId: 11, name: "Eggs", photo_url: "https://placeholder.com/eggs" },
  {
    ingredientId: 12,
    name: "Nori and spring onions",
    photo_url: "https://placeholder.com/nori-spring-onions",
  },
  {
    ingredientId: 13,
    name: "Chicken breast",
    photo_url: "https://placeholder.com/chicken-breast",
  },
  {
    ingredientId: 14,
    name: "Tomato puree",
    photo_url: "https://placeholder.com/tomato-puree",
  },
  {
    ingredientId: 15,
    name: "Cream",
    photo_url: "https://placeholder.com/cream",
  },
  {
    ingredientId: 16,
    name: "Garam masala",
    photo_url: "https://placeholder.com/garam-masala",
  },
  {
    ingredientId: 17,
    name: "Turmeric",
    photo_url: "https://placeholder.com/turmeric",
  },
  {
    ingredientId: 18,
    name: "Cumin",
    photo_url: "https://placeholder.com/cumin",
  },
  {
    ingredientId: 19,
    name: "Cooked rice",
    photo_url: "https://placeholder.com/cooked-rice",
  },
  {
    ingredientId: 20,
    name: "Beef mince",
    photo_url: "https://placeholder.com/beef-mince",
  },
  {
    ingredientId: 21,
    name: "Spinach",
    photo_url: "https://placeholder.com/spinach",
  },
  {
    ingredientId: 22,
    name: "Carrot",
    photo_url: "https://placeholder.com/carrot",
  },
  {
    ingredientId: 23,
    name: "Cucumber",
    photo_url: "https://placeholder.com/cucumber",
  },
  {
    ingredientId: 24,
    name: "Flat rice noodles",
    photo_url: "https://placeholder.com/flat-rice-noodles",
  },
  { ingredientId: 25, name: "Tofu", photo_url: "https://placeholder.com/tofu" },
  {
    ingredientId: 26,
    name: "Soy sauce",
    photo_url: "https://placeholder.com/soy-sauce",
  },
  {
    ingredientId: 27,
    name: "Sesame oil",
    photo_url: "https://placeholder.com/sesame-oil",
  },
  {
    ingredientId: 28,
    name: "Tamarind paste",
    photo_url: "https://placeholder.com/tamarind-paste",
  },
  {
    ingredientId: 29,
    name: "Fish sauce",
    photo_url: "https://placeholder.com/fish-sauce",
  },
  {
    ingredientId: 30,
    name: "Sugar",
    photo_url: "https://placeholder.com/sugar",
  },
  {
    ingredientId: 31,
    name: "Bean sprouts",
    photo_url: "https://placeholder.com/bean-sprouts",
  },
  {
    ingredientId: 32,
    name: "Peanuts",
    photo_url: "https://placeholder.com/peanuts",
  },
  {
    ingredientId: 33,
    name: "Lime wedge",
    photo_url: "https://placeholder.com/lime-wedge",
  },
  {
    ingredientId: 34,
    name: "Rice porridge",
    photo_url: "https://placeholder.com/rice-porridge",
  },
  {
    ingredientId: 35,
    name: "Honey",
    photo_url: "https://placeholder.com/honey",
  },
  {
    ingredientId: 36,
    name: "Five-spice powder",
    photo_url: "https://placeholder.com/five-spice-powder",
  },
  {
    ingredientId: 37,
    name: "Whole duck",
    photo_url: "https://placeholder.com/whole-duck",
  },
  {
    ingredientId: 38,
    name: "Pancakes",
    photo_url: "https://placeholder.com/pancakes",
  },
  {
    ingredientId: 39,
    name: "Shrimp",
    photo_url: "https://placeholder.com/shrimp",
  },
  {
    ingredientId: 40,
    name: "Bell pepper",
    photo_url: "https://placeholder.com/bell-pepper",
  },
  {
    ingredientId: 41,
    name: "Sweet potato",
    photo_url: "https://placeholder.com/sweet-potato",
  },
  {
    ingredientId: 42,
    name: "All-purpose flour",
    photo_url: "https://placeholder.com/all-purpose-flour",
  },
  {
    ingredientId: 43,
    name: "Vegetable oil",
    photo_url: "https://placeholder.com/vegetable-oil",
  },
  {
    ingredientId: 44,
    name: "Yogurt",
    photo_url: "https://placeholder.com/yogurt",
  },
  {
    ingredientId: 45,
    name: "Tikka masala spice mix",
    photo_url: "https://placeholder.com/tikka-masala-spice-mix",
  },
  {
    ingredientId: 46,
    name: "Butter",
    photo_url: "https://placeholder.com/butter",
  },
  {
    ingredientId: 47,
    name: "Onion",
    photo_url: "https://placeholder.com/onion",
  },
  {
    ingredientId: 48,
    name: "Kimchi",
    photo_url: "https://placeholder.com/kimchi",
  },
  {
    ingredientId: 49,
    name: "Pork belly",
    photo_url: "https://placeholder.com/pork-belly",
  },
  {
    ingredientId: 50,
    name: "Gochujang",
    photo_url: "https://placeholder.com/gochujang",
  },
  {
    ingredientId: 51,
    name: "Gochugaru",
    photo_url: "https://placeholder.com/gochugaru",
  },
  {
    ingredientId: 52,
    name: "Rye flour",
    photo_url: "https://placeholder.com/rye-flour",
  },
  {
    ingredientId: 53,
    name: "Water",
    photo_url: "https://placeholder.com/water",
  },
  { ingredientId: 54, name: "Salt", photo_url: "https://placeholder.com/salt" },
  {
    ingredientId: 55,
    name: "Tikka masala spice mix",
    photo_url: "https://placeholder.com/tikka-masala-spice-mix",
  },
  {
    ingredientId: 56,
    name: "Tomato puree",
    photo_url: "https://placeholder.com/tomato-puree",
  },
  {
    ingredientId: 57,
    name: "Cream",
    photo_url: "https://placeholder.com/cream",
  },
  {
    ingredientId: 58,
    name: "Butter",
    photo_url: "https://placeholder.com/butter",
  },
  {
    ingredientId: 59,
    name: "Onion",
    photo_url: "https://placeholder.com/onion",
  },
  {
    ingredientId: 60,
    name: "Kimchi",
    photo_url: "https://placeholder.com/kimchi",
  },
  {
    ingredientId: 61,
    name: "Pork belly",
    photo_url: "https://placeholder.com/pork-belly",
  },
  {
    ingredientId: 62,
    name: "Gochujang",
    photo_url: "https://placeholder.com/gochujang",
  },
  {
    ingredientId: 63,
    name: "Gochugaru",
    photo_url: "https://placeholder.com/gochugaru",
  },
  {
    ingredientId: 64,
    name: "Rye flour",
    photo_url: "https://placeholder.com/rye-flour",
  },
  {
    ingredientId: 65,
    name: "Water",
    photo_url: "https://placeholder.com/water",
  },
  { ingredientId: 66, name: "Salt", photo_url: "https://placeholder.com/salt" },
  {
    ingredientId: 67,
    name: "Rice porridge",
    photo_url: "https://placeholder.com/rice-porridge",
  },
  {
    ingredientId: 68,
    name: "Honey",
    photo_url: "https://placeholder.com/honey",
  },
  {
    ingredientId: 69,
    name: "Five-spice powder",
    photo_url: "https://placeholder.com/five-spice-powder",
  },
  {
    ingredientId: 70,
    name: "Whole duck",
    photo_url: "https://placeholder.com/whole-duck",
  },
  {
    ingredientId: 71,
    name: "Pancakes",
    photo_url: "https://placeholder.com/pancakes",
  },
  {
    ingredientId: 72,
    name: "Shrimp",
    photo_url: "https://placeholder.com/shrimp",
  },
  {
    ingredientId: 73,
    name: "Bell pepper",
    photo_url: "https://placeholder.com/bell-pepper",
  },
];
