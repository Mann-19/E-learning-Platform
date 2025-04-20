import { useState } from "react";
import { useAuthContext } from './useAuthContext';
import { supabase } from "../lib/supabaseClient";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { setUser } = useAuthContext();

    async function signup(email, password, name, role, qualificaiton) {
        setIsLoading(true);
        setError(null);

        // create a supabase auth user
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        })

        if(error) {
            setError(error.message || "Failed to create user");
            setIsLoading(false);
            return;
        } else {
            console.log(`New user created with email: ${data.user.email}`);
        }

        // add remaining data to custom users table 
        const userId = data.user.id;

        try {
            const response = await fetch('http://localhost:8000/api/users/', {
                method: 'POST',
                headers: {"Content-Type": 'application/json'},
                body: JSON.stringify({ userId, name, role, qualificaiton })
            })
            const resData = response.json();

            if(!response.ok) {
                setError(resData?.message || "Failed to add custom user data");
                setIsLoading(false);
                return;
            }

            setUser(data.user)
        } catch(e) {
            setError("Server error while uploading data");
        }

        setIsLoading(false);
    }

    return { signup, isLoading, error}
}