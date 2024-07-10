import { LogBox, Text } from "react-native";
import { View } from "react-native";
import { useEffect } from "react";
import Homescreen from "./screens/Homescreen";
import Favourites from "./screens/Favourites";
import Profile from "./screens/Profile";
import Search from "./screens/Search";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabBar from "./components/BottomtabBar";
import TopLocations from "./screens/TopLocations";
import TopArchitects from "./screens/TopArchitects";
import LocationDetails from "./screens/LocationDetail";
import ProfileDetails from "./screens/ProfileDetails";
import Category from "./screens/Category";
//Mansoor imports
import SplashScreen from "./screens/splash";
import Login from "./screens/signin";
import SignUp from "./screens/signup";
import Sign from "./screens/sign";
import map from "./screens/map";
import mapS from "./screens/mapS";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const config = {
  headerShown: false,
};
const HomeTab = () => (
  <Tab.Navigator
    tabBar={(props) => <BottomTabBar {...props} />}
    screenOptions={config}
  >
    <Tab.Screen name="Home" component={Homescreen} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="Favourites" component={Favourites} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

const firebaseConfig = {
  // your firebase config here.
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  // useEffect(() => {
  //   // Initialize Firebase
  //   if (!firebase.apps.length) {
  //     firebase.initializeApp().then(() => {
  //       console.log('Firebase initialized successfully');

  //     }).catch((error) => {
  //       console.error('Error initializing Firebase:', error);
  //     });
  //   } else {
  //     console.log('Firebase already initialized');

  //   }
  // }, []);

  const addDocument = async (collectionName, data) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      if (docRef) console.log(true);
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.log(false);
      console.log(false);
      console.error("Error adding document: ", e);
    }
  };

  // Usage example
  const newUser = {
    name: "John Doe",
    email: "johndoe@example.com",
    age: 30,
  };

  addDocument("Architects", newUser);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={config}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignScreen"
          component={Sign}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: true }}
        />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="HomeTab" component={HomeTab} />
        <Stack.Screen name="TopLocations" component={TopLocations} />
        <Stack.Screen name="LocationDetails" component={LocationDetails} />
        <Stack.Screen name="TopArchitects" component={TopArchitects} />
        <Stack.Screen name="ProfileDetails" component={ProfileDetails} />

        <Stack.Screen
          name="map"
          component={map}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="mapS"
          component={mapS}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
