import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import Home from "./screens/HomeScreen";
import Sumadora from "./screens/SumadoraScreen";
import TraductorNumeros from "./screens/TraductorNumerosScreen";
import TablaMultiplicar from "./screens/TablaMultiplicarScreen";
import ExperienciaPersonal from "./screens/ExperienciaPersonalScreen";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "green",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: "Inicio",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Sumadora"
          component={Sumadora}
          options={{
            title: "Sumadora",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="calculator-variant-outline"
                size={24}
                color={color}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Traductor"
          component={TraductorNumeros}
          options={{
            title: "Traductor",
            tabBarIcon: ({ color }) => (
              <Octicons name="number" size={24} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Multiplicar"
          component={TablaMultiplicar}
          options={{
            title: "Multiplicar",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="calculator-variant-outline"
                size={24}
                color={color}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Experiencia"
          component={ExperienciaPersonal}
          options={{
            title: "Experiencia",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="information-outline"
                size={24}
                color={color}
              />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
