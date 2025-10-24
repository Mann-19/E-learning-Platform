import Sidebar from "../components/Sidebar";
import { useAuthContext } from "../hooks/useAuthContext";
import InstructorCourses from "../components/InstructorCourses";
import { supabase } from "../lib/supabaseClient";
import LearnerCourses from "../components/LearnerCourses";

const Profile = () => {
  const { state } = useAuthContext();
  const user = state?.user;
  const role = user.user_metadata?.role;

  const handleSwitchAccount = async () => {
    // const currentRole = user.user_metadata?.role;
    const newRole = "Instructor"; // Or whatever logic you need

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
    <div className="bg-[#262626]">
      <div className="flex gap-10 w-full">
        <Sidebar />

        <div className="mt-10 w-full pr-20 pl-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-[#EAD300]">Profile</h2>

            <p className="text-[#EAD300] text-2xl font-medium mt-4">
              Welcome back,{" "}
              <span className="text-white/">
                {user.user_metadata?.full_name}
              </span>
            </p>

            <div className="flex items-center gap-6">
              <p className="text-white/85 text-lg">{user.email}</p>

              <p className="text-black bg-white/85 rounded-full w-fit px-4 py-0.5 font-medium">
                {role} Profile
              </p>
              <button
                onClick={handleSwitchAccount}
                className={`text-sm italic underline cursor-pointer text-[#a0a0a0] ${
                  role === "Learner" ? "" : "hidden"
                }`}
              >
                Switch to Instructor Account
              </button>
            </div>
          </div>

          {role === "Instructor" ? (
            <div>
              <InstructorCourses />
            </div>
          ) : (
            <div>
              <LearnerCourses />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Profile;
