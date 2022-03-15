import {StyleSheet} from "react-native";
import TicTacToe from "./app/components/TicTacToe/Tictactoe";
import Home from "./app/components/Home/Home";
import Quiz from "./app/components/Quiz/Quiz"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TicTacToe" component={TicTacToe} />
        <Stack.Screen name="Quiz" component={Quiz} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

/*
import React, {useState} from 'react';
import { Routes, Route} from "react-router-dom";
import Tictactoe from './routes/TicTacToe/Tictactoe';
import Quiz from './routes/Quiz/Quiz';
import Home from './routes/Home/Home';
import es from './lang/es.json';
import en from './lang/en.json';
import LangSelector from './LangSelector';
import Navbar from './Navbar';


const dictionaryList = { en, es };

export const LangContext = React.createContext({userLang: 'es', dictionary: es});

export default function App() {

  const [lang, setLang] = useState('en');

  const handleLanguageChange = (event) => {
		setLang(event.target.value);
	}

  return (
    <>
    <LangContext.Provider value={{handleLanguageChange: handleLanguageChange, userLang: lang, dictionary: dictionaryList[lang]}}>
      <LangSelector/>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="tictactoe" element={<Tictactoe />} />
      <Route path="quiz" element={<Quiz />} />
    </Routes>
    </LangContext.Provider>
    </>
  );
}
*/