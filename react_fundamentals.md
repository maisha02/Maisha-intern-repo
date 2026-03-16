# Understanding Components & Props (60)

Components are the building blocks of React applications. They allow developers to split the UI into small, reusable pieces. Each component manages its own structure and logic. Props allow data to be passed from one component to another. This makes components dynamic and reusable across different parts of the application.

-----

# Handling State & User Input #61
If we modify state directly instead of using the setter function from useState, React will not detect the change. Because of this, the component will not re-render and the UI will not update. Using the setter function ensures React tracks the state change and updates the interface correctly.

## Screenshot of the webpage
![Counter Screenshot](react-tailwind-app/src/assets/images/counter_image.png)

------