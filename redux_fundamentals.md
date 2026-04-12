# Introduction to Redux Toolkit #63

## When should you use Redux instead of useState?
Redux is useful when multiple components need to share the same state or when state becomes too complex for local "useState". UseState is better for simple local component state, while Redux is better for global state that needs to be managed in one place.

## Screenshot for issue63
![redux_counter Screenshot](react-tailwind-app/src/assets/images/redux_counter.png)

-------

# Using Selectors in Redux Toolkit #64

## What are the benefits of using selectors instead of directly accessing state?
Selectors provide a clean and reusable way to access Redux state. They help keep components simpler and make it easier to update state logic in one place if the state structure changes.

## Screenshot for issue64
![counter_message Screenshot](react-tailwind-app/src/assets/images/counter_message.png)