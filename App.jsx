import React from "react";
import { StatusBar } from "react-native";

import Routes from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#3787d2" barStyle="light-content"/>
            <Routes />
        </NavigationContainer>
    );
}
