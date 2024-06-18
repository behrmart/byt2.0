"use client";
import { createContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode"; // lib para decodificar token jwt npm install

// Crear contexto
const AuthContext = createContext();

// Crear proveedor de contexto

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false); // Estoy autenticado?
  const [userPayload, setUserPayload] = useState(null); // guarda jwt payload decodificado

  const login = (token) => {
    localStorage.setItem("token", token); //guardar token en local storage
    const decoded = jwtDecode(token); //decodifica token
    setUserPayload(decoded);
    setIsAuth(true);
  }; // funcion para login

  const logout = () => {
    localStorage.removeItem("token");
    setUserPayload(null); //borro payload de estado
    setIsAuth(false);
  }; //funcion para logout

  useEffect(() => {
    //Recuperar el token de local storage
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setUserPayload(decoded);
      setIsAuth(true);
    }
  }, []); //determinar si ya estoy loggeado en el Local storage

  const data = {
    //data de contexto disponible para otros comps.
    isAuth,
    userPayload,
    login,
    logout,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
