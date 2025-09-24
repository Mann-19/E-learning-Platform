import Sidebar from "../components/Sidebar";
import { useAuthContext } from "../hooks/useAuthContext";
import InstructorCourses from "../components/InstructorCourses";
import { supabase } from "../lib/supabaseClient"; 

const Profile = () => {
  const { state, dispatch } = useAuthContext();
  const user = state?.user;
  const role = user.user_metadata?.role;

  const handleSwitchAccount = async () => {
    // const currentRole = user.user_metadata?.role;
    const newRole = "Instructor" // Or whatever logic you need

    try {
      // 1. Call the database function directly.
      const { data, error } = await supabase.rpc("update_user_role", {
        new_role: newRole,
      });

      if (error) {
        throw error;
      }

      // 2. Refresh the session to get the new token with the updated role
      await supabase.auth.refreshSession();

      console.log("Function response:", data); // Should say "Role updated successfully"
    } catch (error) {
      console.error("Error switching account:", error.message);
    }
  };
  
  return (
    <div>
      <div className="flex gap-10">
        <Sidebar />

        <div className="mt-11">
          <h2 className="text-2xl">Profile</h2>

          <p className="mt-4">Welcome back, {user.user_metadata?.full_name}</p>

          <p>
            Role: {role}{" "}
            <button
              onClick={handleSwitchAccount}
              className={`text-sm italic underline cursor-pointer ${
                role === "Learner" ? "" : "hidden"
              }`}
            >
              Switch to Instructor Account
            </button>
          </p>

          <p>Email: {user.email}</p>

          {role === "Instructor" ? (
            <div>
              <InstructorCourses />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Profile;
