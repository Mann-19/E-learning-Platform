import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export const useLogin = () => {
    const [error, setError] = useState(null);

    async function login({ email, password }) {
        setError(null);
        console.log({ email, password });
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });
        console.log(data?.user?.id);

        if(error) {
            setError("Failed to login :" + error.message);
            return;
        }
    }

    return { login, error}
}