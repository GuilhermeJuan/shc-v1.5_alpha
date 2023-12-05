import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";
import RegisterScreenPart1 from "../pages/TelaRegister";
import RegisterScreenPart2 from "../pages/TelaRegister2";
import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Agenda from "../pages/TelaAgenda";
import GerenciamentoMedicamentos from "../pages/TelaGM(Gerenciamento de Medicamentos)";
import AddMedication from "../pages/TelaAddRem";
import TelaSobreNos from "../pages/TelaSobreNos";
import TelaPerfil from "../pages/Perfil"
import TelaConfigurcao from "../pages/TelaConfig"

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Agenda"
          component={Agenda}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreenPart1}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="RegisterPart2"
          component={RegisterScreenPart2}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="GerenciamentoMedicamentos"
          component={GerenciamentoMedicamentos}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AddMedication"
          component={AddMedication}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="TelaSobreNos"
          component={TelaSobreNos}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="TelaPerfil"
          component={TelaPerfil}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaConfigurcao"
          component={TelaConfigurcao}
          options={{ headerShown: false }}
        />  
      </Stack.Navigator>
    );
  }
