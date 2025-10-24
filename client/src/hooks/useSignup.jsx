import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { supabase } from "../lib/supabaseClient";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  async function signup({ name, email, password }) {
    setError(null);

    try {
      // Sign user up using email
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { 
            full_name: name,
            role: "Learner"
          }, // stored in raw_user_meta_data
        },
      });

      if (error) {
        setError(`Error creating user: ${error.message}`);
        return;
      }

      dispatch({ type: "SET_USER", payload: data.user });
    } catch (err) {
      console.log(err);
      setError("Server error while uploading data");
    }
  }

  return { signup, error };
};
