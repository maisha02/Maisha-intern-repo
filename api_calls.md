# Making API Calls with Axios (#73)

## Why is it useful to create a reusable Axios instance?
A reusable Axios instance allows common settings such as base URL, headers, and timeouts to be defined once and reused across multiple API requests. This keeps the code consistent and easier to maintain.

## How does intercepting requests help with authentication?
Request interceptors allow authentication tokens to be automatically added to request headers. This means developers do not need to manually attach tokens to every request.

## What happens if an API request times out, and how can you handle it?
If a request times out, Axios throws an error indicating that the request took too long. This can be handled using try–catch blocks to show error messages or retry the request.

## Screenshot for issue73
![api_image Screenshot](react-tailwind-app/src/assets/images/api_image.png)