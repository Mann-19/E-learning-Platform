import { createContext, useEffect, useReducer, useState } from "react";
import { supabase } from "../lib/supabaseClient.js";

// Set an initial state
const initialState = {
  user: null,
  isLoading: true,
};

// Create a context
export const AuthContext = createContext();

// Reducer function to manage state and dispatch actions
function authReducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload, isLoading: false };
    case "LOGOUT":
      return { user: null, isLoading: false };
    default:
      return state;
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check user on mount
  useEffect(() => {
    // gets current session to check is a user has an active session
    const getCurrentSession = async () => {
      const { data } = await supabase.auth.getSession();
      dispatch({ type: "SET_USER", payload: data?.session?.user || null });
    };
    getCurrentSession();

    // watches for auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        dispatch({ type: 'SET_USER', payload: session?.user || null });
      }
    );

    return () => listener?.subscription?.unsubscribe();
  }, []);

  const value = { state, dispatch };

  console.log("AuthContext state: ", state.user);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
