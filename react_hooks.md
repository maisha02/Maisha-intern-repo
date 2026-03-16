# Understanding React Hooks: useEffect #66

## When should you use useEffect instead of event handlers?
Use useEffect when logic needs to run after a component renders or when state/props change, such as fetching data or setting up subscriptions. Event handlers are used for direct user actions like clicks.

## What happens if you don’t provide a dependency array?
The effect runs after every render. This can cause repeated API calls or unnecessary work.

## How can improper use of useEffect cause performance issues?
If dependencies are incorrect or missing, the effect may run too often, leading to extra renders, repeated API calls, or duplicate event listeners.

## Screenshot showing issue66
![UseEffect Screenshot](react-tailwind-app/src/assets/images/useEffectDemo.png)
