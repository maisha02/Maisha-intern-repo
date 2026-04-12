# Understanding Key Libraries Used in Focus Bear (17)

Tasks 
## Overview of libraries
For this task, I went through the list of libraries used in Focus Bear and grouped them based on what they do. This made it easier for me to understand the structure of the app.
Navigation & UI: handles screen movement and layout
State & Data: manages app data and storage
Networking: handles API calls and real-time updates
Authentication: manages login
Performance & Background: handles background tasks and animations
Internationalisation: manages language and translations
Logging & Analytics: tracks errors and user activity
Before this, I did not realise how many different libraries are needed to run a full mobile app.

## What each library does from my understanding
React Navigation → moves between screens in the app
react-native-vector-icons → adds icons to UI
@rneui/themed → gives ready-made UI components
react-native-gesture-handler → improves touch gestures
Redux → stores global app data
redux-thunk → handles async actions
redux-persist → saves data even after app closes
AsyncStorage → stores data on device
Axios → sends API requests
axios-retry → retries failed requests
Pusher → real-time updates
Auth0 → handles login securely
Apple Auth → login with Apple
background-fetch → runs tasks when app is closed
background-timer → runs timers
reanimated → smooth animations
i18next → translation system
react-i18next → connects translations to UI
react-native-localize → detects device language
Sentry → tracks errors
PostHog → tracks user behaviour

## Three libraries I focused on

Redux-Persist:- this saves app data and restores it when the app opens again. From my understanding, this is important in Focus Bear because users should not lose their data every time they close the app. While working on this, I realised this is what makes apps feel consistent between sessions.

react-native-background-fetch:- this allows the app to run tasks in the background. What I found interesting is that it works even when the app is not open, unlike normal timers. This makes sense for Focus Bear because reminders and scheduled tasks need to run all the time.

react-native-auth0:- this handles authentication using Auth0. Before this task, I thought login was simple, but I learned that it involves security, tokens, and user sessions. Using Auth0 makes it easier and safer instead of building everything manually.

## One library I was unfamiliar with
Most of the libraries were unfamilar to me, but if I had to pick one it would be @pusher/pusher-websocket-react-native.After looking into it, I learned that it is used for real-time updates using WebSockets. This means the app can receive updates instantly without refreshing. This helped me understand how apps handle live data.

REFLECTION 

## What is the purpose of Redux-Persist?
It saves app data so it is still there when the app restarts. This improves the user experience.
## How does background-fetch differ from a normal timer?
Background-fetch works even when the app is closed. Normal timers stop when the app is not active.
## Why does Focus Bear use Auth0 instead of manual authentication?
Auth0 is more secure and easier to manage. It handles login properly and reduces the risk of mistakes.
## How does PostHog help improve the user experience?
PostHog tracks how users interact with the app. This helps developers improve features based on real usage.
## What’s the difference between Sentry and PostHog?
Sentry is for tracking errors and crashes. PostHog is for tracking user behaviour and analytics.
## How does react-native-localize work with i18next?
react-native-localize detects the device language. i18next uses that to show the correct translations in the app.