# Issues: Dependency errors Implementing Navigation Drawer Components

The assignment to add navigation drawer components caused Dependency conflicts.
The problem centered around specific versions:


npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: nucampsite@1.0.0
npm ERR! Found: react-native-safe-area-context@4.3.1
npm ERR! node_modules/react-native-safe-area-context
npm ERR!   react-native-safe-area-context@"4.3.1" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer react-native-safe-area-context@"^3.1.9" from react-native-elements@3.4.2
npm ERR! node_modules/react-native-elements
npm ERR!   react-native-elements@"*" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR!

—

To resolve the issue, I deleted to package-lock.json file, then removed all decencies from the package.json file.  I then launched the app via Expo.


> NOTES:
> - Original Dependencies:

```packages.json
 "dependencies": {
    "expo": "46.0.13",
    "expo-status-bar": "~1.4.0",
    "react": "18.0.0",
    "react-native": "0.69.6",
    "react-native-elements": "^3.4.2",
    "@react-navigation/native": "5.9.8",
    "@react-navigation/stack": "5.14.9",
    "react-native-reanimated": "~2.9.1",
    "react-native-gesture-handler": "~2.5.0",
    "react-native-screens": "~3.15.0",
    "react-native-safe-area-context": "4.3.1",
    "expo-constants": "~13.2.4"
  },
```

> - Working Dependencies

```packages.json
   "dependencies": {
    "@react-navigation/drawer": "^6.5.3",
    "@react-navigation/native": "^6.0.16",
    "@react-navigation/stack": "^6.3.7",
    "expo": "~47.0.8",
    "expo-status-bar": "~1.4.2",
    "react": "18.1.0",
    "react-native": "0.70.5",
    "react-native-elements": "^3.4.2",
    "react-native-reanimated": "~2.13.0"
  },
```