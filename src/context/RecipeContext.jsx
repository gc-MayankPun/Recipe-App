import { createContext, useState } from "react";

export const recipecontext = createContext(null);

const RecipeContext = ({ children }) => {
  // const [data, setData] = useState([]);
  const [data, setData] = useState([
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
      title: "Classic Pancakes",
      chef: "Aarav Sharma",
      description:
        "Fluffy homemade pancakes served with maple syrup and butter.",
      instructions: [
        "In a bowl mix flour, sugar, baking powder, and salt.",
        "Add milk, egg, and melted butter. Whisk until smooth.",
        "Heat a pan and pour batter to form pancakes.",
        "Cook until bubbles appear then flip.",
        "Serve with maple syrup and butter.",
      ],
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      title: "Healthy Avocado Salad",
      chef: "Maya Gurung",
      description:
        "Fresh avocado salad with cherry tomatoes, cucumber, and olive oil.",
      instructions: [
        "Chop avocado, cucumber, and cherry tomatoes.",
        "Add them to a mixing bowl.",
        "Drizzle olive oil and lemon juice.",
        "Season with salt and pepper.",
        "Toss gently and serve fresh.",
      ],
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1604908176997-4318c6a4b9c7",
      title: "Spaghetti Carbonara",
      chef: "Luca Rossi",
      description:
        "Creamy Italian pasta with eggs, parmesan cheese, and pancetta.",
      instructions: [
        "Cook spaghetti in salted boiling water.",
        "Fry pancetta until crispy.",
        "Mix eggs with grated parmesan cheese.",
        "Combine hot pasta with pancetta.",
        "Add egg mixture and toss quickly to create a creamy sauce.",
      ],
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
      title: "Sushi Platter",
      chef: "Kenji Tanaka",
      description: "Assorted sushi rolls with fresh salmon, tuna, and avocado.",
      instructions: [
        "Cook sushi rice and season with vinegar.",
        "Place nori sheet on bamboo mat.",
        "Spread rice evenly over the nori.",
        "Add salmon, tuna, or avocado fillings.",
        "Roll tightly and slice into pieces.",
      ],
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      title: "Grilled Chicken Bowl",
      chef: "Rohan Thapa",
      description:
        "Protein-packed grilled chicken served with rice and vegetables.",
      instructions: [
        "Season chicken with salt, pepper, and spices.",
        "Grill the chicken until fully cooked.",
        "Cook rice and prepare vegetables.",
        "Slice grilled chicken.",
        "Serve chicken over rice with vegetables.",
      ],
    },
  ]);

  return (
    <recipecontext.Provider value={{ data, setData }}>
      {children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
