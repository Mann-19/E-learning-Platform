import { createContext, useEffect, useReducer, useState } from "react";
import {supabase} from '../lib/supabaseClient.js';

export const AuthContext = createContext({
    user: null,
    setUser: () => {},
    role: null,
    setRole: () => {},
    session: null
});

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [session, setSession] = useState(null)
    
    useEffect(() => {

        // gets current session to check is a user has an active session
        const getCurrentSession = async() => {
            const { data: {session} } = await supabase.auth.getSession();
            setSession(session);

            const currentUser = session?.user || null;
            setUser(currentUser);
            setRole(currentUser?.user_metadata?.role || "none");
        }
        getCurrentSession();

        // watches for auth state changes
        const { data: {listener}} = supabase.auth.onAuthStateChange((event, session) => {
            setSession(session);

            const authUser = session?.user || null;
            setUser(authUser);
            setRole(authUser?.user_metadata?.role || "none");
        });
        
        
        return () => listener?.subscription?.unsubscribe();
    }, [])
    
    const value = { user, setUser, role, setRole, session };
    
    console.log("AuthContext state: ", {user, role});

    return(
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}