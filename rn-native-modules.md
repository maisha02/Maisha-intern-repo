Using Native Modules and Bridging in React Native #21

## Tasks completed

For this task, I learned how native modules work in React Native. I understood that they are used when JavaScript alone cannot do something, like accessing system features or device settings.

I also looked into how React Native connects JavaScript with native code. On Android, this is done using Java or Kotlin, and on iOS using Swift or Objective-C. I learned that React Native uses something called a bridge (or newer systems like TurboModules) to send data between JavaScript and native code.

I explored some libraries that use native modules, like `react-native-config`. This library helps store environment variables such as API URLs, which makes the app easier to manage across different environments.

## Reflection

### Why would you need to use native modules in a React Native app?
You need native modules when the feature you want is not available in React Native by default, like system-level features or platform-specific tools.

### How does React Native communicate with native code?
React Native sends requests from JavaScript to native code using a bridge. The native code does the work and sends the result back.

### What are some challenges of maintaining native bridges?
It can be harder because you need to understand both JavaScript and native code. Also, you may need to write separate code for Android and iOS, which takes more time.