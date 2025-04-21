import { useState } from "react";
import { useAuthContext } from './useAuthContext';
import { supabase } from "../lib/supabaseClient";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { setUser } = useAuthContext();

    async function signup(email, password, name, role, qualification) {
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
        const id = data.user.id;
        console.log(id);

        try {
            const response = await fetch('http://localhost:8000/api/users/', {
                method: 'POST',
                headers: {"Content-Type": 'application/json'},
                body: JSON.stringify({ id, name, role, qualification })
            })
            const resData = await response.json();
            console.log(resData);

            if(!response.ok) {
                setError(resData?.message || "Failed to add custom user data");
                setIsLoading(false);
                return;
            }

            setUser(data.user)
        } catch(e) {
            console.log(e);
            setError("Server error while uploading data");
        }

        setIsLoading(false);
    }

    return { signup, isLoading, error}
}