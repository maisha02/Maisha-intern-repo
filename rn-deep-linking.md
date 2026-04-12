Handling Deep Linking and Routing

Tasks

## Researched deep linking in React Native
I researched how deep linking works in React Native and learned that it allows the app to open a specific screen directly using a URL. Instead of navigating manually, users can be taken straight to a page from links such as notifications or external apps.

## Configured deep linking with React Navigation
I configured deep linking using Expo Router by updating the layout files and adding a custom scheme (myapp) in app.json. Since Expo Router uses file-based routing, each screen automatically maps to a URL, so no manual route mapping was needed.

## Tested opening a specific screen using a deep link
I tested deep linking by running a terminal command using the Expo link format. I opened the Explore screen directly using a deep link, and the app navigated to the correct screen instead of starting from the home page.

## Handled deep links in different app states
I tested deep linking while the app was open, in the background, and fully closed. In all cases, the app opened the Explore screen correctly, showing that deep linking worked across different app states.

Reflection

## What are the benefits of deep linking in mobile apps?
Deep linking makes the app easier to use because it allows users to open specific screens directly instead of navigating manually. I can see how this would be useful in real apps for features like notifications or shared links.


## How does React Navigation handle deep linking?
React Navigation (with Expo Router) handles deep linking automatically by mapping files to routes, which made the setup simple. I did not need to manually define routes, which saved time.

## What challenges might arise when implementing deep linking?
One challenge I faced was that the custom scheme (myapp://) did not work at first. I learned that Expo Go requires using the exp://.../--/route format instead. After switching to that, everything worked correctly.