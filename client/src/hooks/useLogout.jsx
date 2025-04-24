import { supabase } from "../lib/supabaseClient";
import { useAuthContext } from "./useAuthContext";

const useLogout = () => {
    const { setUser, setRole } = useAuthContext();

    const logout = async() => {
        const { error } = await supabase.auth.signOut()

        if(error) {
            console.error("Error logging out ", error);
        } else {
            setUser(null);
            setRole(null);
            console.log("Logged out successfully");
        }
    }

    return {logout};
}

export default useLogout;