import { useState } from "react";
import { useAuthContext } from './useAuthContext';
import { supabase } from "../lib/supabaseClient";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext();

    async function signup({ name, email, password }) {
        console.log({name, email, password});
        setError(null);

        try {
            const response = await fetch('http://localhost:8000/api/users/', {
                method: 'POST',
                headers: {"Content-Type": 'application/json'},
                body: JSON.stringify({ name, email, password })
            })
            const resData = await response.json();
            console.log(resData);

            
            if(!response.ok) {
                setError(resData?.message);
                return;
            }
            
            dispatch({ type: 'SET_USER', payload: resData });
        } catch(e) {
            console.log(e);
            setError("Server error while uploading data");
        }
    }

    return { signup, error }
}