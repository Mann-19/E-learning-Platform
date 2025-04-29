import { useSignup } from "../hooks/useSignup";
import { useState } from "react";
import { Link } from "react-router";
import LoadingSpinner from '../components/LoadingSpinner';

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  const [qualification, setQualification] = useState("");
  const { signup, isLoading, error } = useSignup();

  const [passwordVisible, setPasswordVisible] = useState(true);
  const toggleVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password, name, accountType, qualification);
  };

  return (
    <section className="flex flex-col items-center justify-center max-w-[50%] min-w-[50%]">
      <form
        className="flex flex-col items-center justify-center w-[60%]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center gap-2 mb-10">
          <h3 className="text-3xl font-extrabold text-primary-accent">
            Sign Up
          </h3>
          <Link to={"/login"} className="text-sm text-gray-400">
            Already have an account? Log In
          </Link>
        </div>

        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          placeholder="Name"
          className="border-2 border-primary-accent rounded-xl w-full px-6 py-1.5 outline-none"
        />

        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          placeholder="Email"
          className="border-2 border-primary-accent rounded-xl w-full px-6 py-1.5 outline-none mt-3"
        />

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

        <div className="flex justify-between px-6 items-center w-full mt-4 border-2 border-primary-accent py-2 rounded-xl">
          <label className="text-base text-gray-500 min-w-max font-regular">
            Account Type:
          </label>
          <div className="flex items-center justify-around w-full">
            <label className="flex justify-center items-center gap-3">
              <input
                type="radio"
                name="accountType"
                value="Student"
                checked={accountType === "Student"}
                onChange={(e) => setAccountType(e.target.value)}
                className="h-4 w-4 mt-0.5"
              />
              <span className="">Student</span>
            </label>

            <label className="flex justify-center items-center gap-3">
              <input
                type="radio"
                name="accountType"
                value="Mentor"
                checked={accountType === "Mentor"}
                onChange={(e) => setAccountType(e.target.value)}
                className="h-4 w-4 mt-0.5"
              />
              <span className="">Mentor</span>
            </label>
          </div>
        </div>

        {/* <label className="">Qualification:</label> */}
        <select
          onChange={(e) => {
            setQualification(e.target.value);
          }}
          value={qualification}
          className="border-2 border-primary-accent mt-4 px-4 py-2 w-full rounded-xl text-gray-500"
        >
          <option value="Under-graduate">Undergrad</option>
          <option value="Graduate">Graduate</option>
          <option value="Post-graduate">Postgrad</option>
          <option value="PhD">PhD</option>
        </select>

          {isLoading ? 
          <LoadingSpinner /> : 
          <button
          disabled={isLoading}
          className="bg-primary-accent text-white rounded-xl w-full mt-6 py-2 text-lg font-semibold cursor-pointer hover:bg-primary-accent/80"
        >
          Signup
        </button> }
        
        {error && (
          <div className="text-sm text-red-400 italic font-medium">{error}</div>
        )}
      </form>

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
