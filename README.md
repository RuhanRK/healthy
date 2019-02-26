# Healthy living, healthy eating

---

### What is this Project For?

> this project is for [indorse](https://indorse.io) intermediate React Sill validation

---

### What I supposed to do for this project

This assignment is catered towards invoking healthy habits in this world where rising levels of junk food, fast food, and unhealthy drinks are causing obesity and giving rise to many diseases in populations all across the world.

This web UI will read from a static JSON object instead of connecting to a backend API. You can enter a list of various junk food items and drinks like Coke, Fries, etc. and display this information to the user.

Basic feature of the application should include:

-   Create a web UI with a text box containing auto-complete options to be filled up by the food item names from the JSON object

-   Once the user selects an item, you need to show all the information about the item

-   This information could consist of, but not limited to, the photo of the item, the ingredients, calorie content, etc

-   [Bonus] You can also make a comparison between the items in your JSON object and show a calorie ranking for this item

---

### What I did for this assignment

1. Create a `JSON` Object for all food details
2. Foods details are includes
    1. Name
    2. Description
    3. Fat
    4. Calorie
    5. Ingredients
    6. Img
    7. Link
3. Search Field
4. Create a Nice `Autocomplete` Box, When users Entered Any Value in Search Field this box will popup and show users the foods name.
5. If Users Enter Wrong Food then A predefined Box will render and Tell user that, Users Entered Wrong Details

6. If User Search with Correct foods name then A Details box will render with all food details

7. Create a Page for `All Food Details` , In the Page User can see all food with `Name` `Calorie` `Fat` Details, and User Can also `sort` values. (This is my favorite Implementation)

8. `Not Found` Page

9. Of course it's `Responsive`

10. Write Some `Test` with `Enzyme`

---

### You can check the live version, Link is in below

[Live Version](https://junkfood.netlify.com/)

---

### For Serve this project you have to Download this project and run below command

`npm install` or `yarn install`
and
`npm start` or `yarn start`

---

### Libararies I Have used

1. [Lodash](https://lodash.com/) - For Sorting
2. [React Bootstrap](https://react-bootstrap.github.io/)
3. [Enzyme](https://airbnb.io/enzyme/)
4. [Enzyme-Adapter](https://www.npmjs.com/package/enzyme-adapter-react-16)
5. [Redux](https://redux.js.org/)

---

#Which websites Helps me to get those datas

1. https://www.nutritionix.com/
2. https://ndb.nal.usda.gov/ndb/
