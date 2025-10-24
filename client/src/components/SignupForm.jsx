import { useSignup } from "../hooks/useSignup";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";
import { useAuthContext } from "../hooks/useAuthContext";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, error } = useSignup();
  const { state } = useAuthContext();

  const [passwordVisible, setPasswordVisible] = useState(true);

  const toggleVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup({ name, email, password });
  };

  return (
    <section className="flex flex-col items-center justify-center max-w-[50%] min-w-[50%]">
      <form
        className="flex flex-col items-center justify-center w-[60%]"
        onSubmit={handleSubmit}
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-2 mb-10">
          <h3 className="text-3xl font-extrabold text-primary-accent">
            Sign Up
          </h3>
          <Link to={"/login"} className="text-sm text-gray-400">
            Already have an account? Log In
          </Link>
        </div>

        {/* Name */}
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          placeholder="Name"
          className="border-2 border-primary-accent rounded-xl w-full px-6 py-1.5 outline-none"
        />

        {/* Email */}
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          placeholder="Email"
          className="border-2 border-primary-accent rounded-xl w-full px-6 py-1.5 outline-none mt-3"
        />

        {/* Password */}
        <div className="border-2 border-primary-accent rounded-xl w-full mt-4 px-6 py-1.5 flex justify-between">
          <input
            type={passwordVisible ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            className=" outline-none"
          />
          <span onClick={toggleVisibility} className="cursor-pointer">
            {passwordVisible ? "🙈" : "👁️"}
          </span>
        </div>

        {/* Submit button */}
        <button
          disabled={state.isLoading}
          className="bg-primary-accent text-white rounded-xl w-full mt-6 py-2 text-lg font-semibold cursor-pointer hover:bg-primary-accent/80"
        >
          {!state.isLoading ? ( <span>Signup</span> ) : ( <LoadingSpinner /> ) }
        </button>

        {/* Error line */}
        {error && (
          <div className="text-sm text-red-400 italic font-medium">{error}</div>
        )}
      </form>

      {/* Divider */}
      <div className="w-[60%] flex justify-between items-center mt-5">
        <div className="w-[40%] border-1 border-gray-400"></div>
        <span className="text-gray-400">OR</span>
        <div className="w-[40%] border-1 border-gray-400"></div>
      </div>

      <button
        className="border-2 border-primary-accent text-center py-1.5 text-primary-accent font-semibold rounded-xl w-[60%] mt-4 cursor-pointer"
        onClick={() => {
          console.log("Not implemented yet");
        }}
      >
        Sign In with Google
      </button>
    </section>
  );
};
export default SignupForm;
