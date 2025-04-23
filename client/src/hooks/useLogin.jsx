import { useState } from "react";
import { useAuthContext } from './useAuthContext';
import { supabase } from "../lib/supabaseClient";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { setUser } = useAuthContext();

    async function login(email, password) {
        setIsLoading(true);
        setError(null);

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })

        if(error) {
            setError("Error :", error.message);
            setIsLoading(false);
            return;
        }

        setUser(data.user);
        setIsLoading(false);
    }

    return { login, isLoading, error}
}