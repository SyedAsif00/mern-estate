import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="p- max-w-lg mx-auto">
      <h1 className="my-7 text-3xl text-center font-semibold">Sign Up</h1>
      <form className="flex flex-col gap-4 ">
        <input
          type="text"
          id="username"
          placeholder="username.."
          className="p-3 border rounded-lg "
        />
        <input
          className="p-3 border rounded-lg "
          type="text"
          id="username"
          placeholder="username.."
        />
        <input
          className="p-3 border rounded-lg "
          type="text"
          id="username"
          placeholder="username.."
        />
        <button className="uppercase bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80">
          Sign up
        </button>
      </form>
      <div className="flex gap-2 my-2">
        <p>Have account?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-700">sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
