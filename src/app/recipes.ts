
  export interface Recipe {
    name: string;
    ingredients: string[];
    description: string;
    method: string;
    notes: string;
  }

  export const allRecipes: Recipe[] = [
    {
      name: "Mushroom Pasta",
      ingredients: [
        "Mushrooms", "Cream", "Onions", "Penne", "Garlic", "Olive Oil"
      ],
      description: "This creamy mushroom pasta makes a healthy, super-satisfying dinner for two at just over £1 per portion. Dr Rupy uses silken tofu to give the sauce a wonderful creaminess and extra protein.",
      method: `
       Heat the oil and butter in a medium saucepan. Fry the onion over a low heat for 10 mins or until softened and translucent.   
       Add the mushrooms and cook for 10 mins over a medium heat. Add the garlic and cook for 2 mins. Add the wine and bring to a simmer, reduce the liquid by half.
       Add the double cream and bring to a simmer, then add the lemon zest and parmesan. Season with salt and plenty of black pepper.
       Meanwhile, cook the pasta following pack instructions. Reserve 100ml of the pasta water. Toss the pasta in the pan with the creamy sauce and enough of the reserved water to loosen. Stir through the parsley, divide into bowls and top with extra cheese, if you like.
      `,
      notes: "pasta notes here" 
    },
    {
      name: "Pasta With Chickpeas",
      ingredients: [
        "Chickpeas", "Spaghetti", "Onions", "Garlic", "Paprika", "Olive Oil"
      ],
      description: "Pasta e ceci, or pasta with chickpeas, sits on the fence between being a pasta dish, soup or stew. Using the liquid from a tin of chickpeas helps to make the pasta sauce creamy and thick. If you forget and accidently chuck it away, just use a bit more pasta water to help bind it all together.",
      method: `
      In a large sauce pan heat olive oil, add paprika and cook stirring until fragrant (about 30 seconds).
      Add a diced onion and sauté until soft. Toss in minced garlic and cook a minute longer. 
      Add chickpeas and stir to coat in the onion-garlic mixture. Pour in tomato passata, 3/4 cup of water or chicken stock and a bay leaf. Bring to a boil, then lower to a simmer and cook, stirring occasionally, for 20 minutes. Add salt and pepper to taste.
      Ten minutes before the sauce is ready, bring a large pot of salted water to a boil and cook pasta until al dente. Drain and add to the chickpea tomato sauce. Stir to coat. Add a ladle or two of pasta cooking water to thin out the sauce as needed. Remove the bay leaf and discard.
      `,
      notes: "rice notes here" 
    },
]