import { createContext, useEffect, useReducer, useState } from "react";
import {supabase} from '../lib/supabaseClient.js';

export const AuthContext = createContext({
    user: null,
    setUser: () => {},
});

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {

        // gets current session to check is a user has an active session
        const getCurrentSession = async() => {
            const { data: {session} } = await supabase.auth.getSession();

            setUser(session?.user || null);
        }
        getCurrentSession();

        // watches for auth state changes
        const { data: {listener}} = supabase.auth.onAuthStateChange((event, session) => {
            console.log("Event: ", event);
            console.log("Session: ", session);
            setUser(session?.user || null);
        });

        return () => listener?.subscription?.unsubscribe();
    }, [])

    const value = { user, setUser };

    console.log("AuthContext state: ", value);

    return(
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}