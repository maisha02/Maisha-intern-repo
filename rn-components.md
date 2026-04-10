# Understanding React Native Components vs. React Components (#29)

# Task 
In this task, I explored the differences between React (web) components and React Native components. I created a simple component using React Native elements like View, Text, and FlatList, and compared them with standard HTML elements such as "div" and "p". I also tested both "StyleSheet.create()" and inline styling to understand how styling works in React Native.

# Screenshots 

![StyleSheet Version](images/style_2.png)
![FlatList Version](images/list.png)

# Reflection 

## What are the key differences between <View> and <div>?
"View" is a React Native container component, while "div" is an HTML element used on the web. "View" renders to native UI elements, but "div" renders to the browser DOM.

## How does StyleSheet.create() improve performance compared to inline styles?
"StyleSheet.create()" keeps styles organized and reusable, which makes code easier to manage. It can also help React Native handle styles more efficiently than large inline objects.

## Why doesn’t React Native use className like React web?
React Native does not use CSS files or HTML elements, so "className" is not needed. Instead, styles are written as JavaScript objects and passed through the "style" prop.