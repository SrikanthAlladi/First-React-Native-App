# First-React-Native-App

**React Native**
  React-native is a cross-platform library that builds native mobile apps (iOS and Android) using javascript and typescript. 
  We can build react native apps by using Expo framework and plain react native plugins.


**React Native Basic Components**

  **View:** View is a container that supports layout flex box,
  **Text:** It can be used to display the text.
  **Image:** It can be used to display the image.
  **TextInput:** It can be used in a text field to give the input using the keyboard.
  **ScrollView:** You can scroll the content.
  **StyleSheet:** It is similar to CSS stylesheets.
  **Button :** Action triggers.
  **Switch:** Render based on the Boolean key
  **StatusBar:** To control the app status bar.

**Expo Framework**
    It is a free and open source framework.
    It is a platform for react native applications.
    It is a set of tools and services that are built around React Native and Native Platform (In-built plugins like fileSystem, camera, location).


**Advantages**
     By using expo we can build mobile apps easily.
     We don’t need to know the native mobile app code(Java, kotlin for android and  Swift for iOS).
     No need for android studio and Xcode to deploy or build the application.
     It is a free and open source framework.
**Disadvantages**
     If you are native mobile application developer you can’t change native code in the expo.
     All android and iOS native api’s are available (Bluetooth).
     Push notifications can be done by using expo only, which we can't use by firebase.

**Environment Setup for react-native with Expo**
    Install node.js along with npm packages.
    Free and open source server environment which uses javascript on the server, and runs on different platforms).
    After installing node.js to check the node version use command node --version.

   **Install expo framework:**   npm install -g expo-cli.
    As expo is a global module we use -g
    To check the installed version use command expo-cli --version 

**Create new react-native project**  
    using expo init new-react-native-project 
    Start the expo project  using expo start (To run your project, navigate to the directory and run one of the following yarn commands).
    npm start # you can open iOS, Android, or web from here, or run them directly with the commands below.
    npm android
    npm ios
    npm web
                  
**Metro Bundler**
  Local host URL ( http://localhost:19002/)
  It is a javascript bundler, Every time if you run the react native project the metro bundler compiles many javascript files into a single file.
  The bundler file is located on the device itself.

