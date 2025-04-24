import { Link } from "react-router";
import { useLogin } from "../hooks/useLogin";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { login, error, isLoading } = useLogin();

  const toggleVisibility = () => {setPasswordVisible((prev) => !prev)};

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <section className="flex flex-col items-center justify-center max-w-[50%] min-w-[50%]">
      <form
        className="flex flex-col items-center justify-center w-[60%]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center gap-2 mb-10">
          <h3 className="text-3xl font-extrabold text-primary-accent">
            Log In
          </h3>
          <Link to={"/signup"} className="text-sm text-gray-400">
            Don't have an account? Create one
          </Link>
        </div>

        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          className="border-2 border-primary-accent rounded-xl w-full px-6 py-1.5 outline-none"
        />

        <div className="border-2 border-primary-accent rounded-xl w-full mt-4 px-6 py-1.5 flex justify-between">
          <input
            type={passwordVisible ? 'text' : 'password'}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            className=" outline-none"
          />
          <span onClick={toggleVisibility} className="cursor-pointer">{passwordVisible ? '🙈' : '👁️'}</span>
        </div>
        <span className="text-right w-full text-xs mr-2 underline text-gray-400 mt-1">
          Forgot Password?
        </span>

        <button
          disabled={isLoading}
          type="submit"
          className="bg-primary-accent text-white rounded-xl w-full mt-6 py-2 text-lg font-semibold cursor-pointer hover:bg-primary-accent/80"
        >
          Proceed
        </button>

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
        className="border-2 border-primary-accent text-center py-1.5 text-primary-accent font-semibold rounded-xl w-[60%] mt-8 cursor-pointer"
        onClick={() => {
          console.log("Not implemented yet");
        }}
      >
        Sign In with Google
      </button>
    </section>
  );
};
export default LoginForm;
