# Understanding React Hooks: useEffect #66

## When should you use useEffect instead of event handlers?
Use useEffect when logic needs to run after a component renders or when state/props change, such as fetching data or setting up subscriptions. Event handlers are used for direct user actions like clicks.

## What happens if you don’t provide a dependency array?
The effect runs after every render. This can cause repeated API calls or unnecessary work.

## How can improper use of useEffect cause performance issues?
If dependencies are incorrect or missing, the effect may run too often, leading to extra renders, repeated API calls, or duplicate event listeners.

## Screenshot showing issue66
![UseEffect Screenshot](react-tailwind-app/src/assets/images/useEffectDemo.png)

--------

# Optimizing Performance with useMemo (#67)

## How does useMemo improve performance?
It improves performance by storing the result of an expensive calculation and reusing it on later renders. This avoids unnecessary recomputation.

## When should you avoid using useMemo?
You should avoid using it for simple calculations because it can add unnecessary complexity. It is most useful only when the calculation is expensive.

## What happens if you remove useMemo from your implementation?
If it is removed, the expensive calculation runs again on every render. This can make the component less efficient.

## Screenshot for issue67
![UseMemoDemo Screenshot](react-tailwind-app/src/assets/images/useMemoDemo.png)

---------

