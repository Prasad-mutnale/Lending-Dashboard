import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [credentials, setCredentials] = React.useState({
    username: "",
    password: "",
    confirmPassword:""
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = credentials;
    const response = await fetch("http://localhost:8000/Lenders/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        // confirmPassword,
      }),
    });
    const json = await response.json();
    // console.log(json);
    if (json.status==="SUCCESS") {
      localStorage.setItem("token", json.token);
      navigate("/login");
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="flex flex-col w-[100vw] justify-center items-center">
        <div className="flex flex-col mt-[160px] w-[677px] h-[704px] px-6 py-4 overflow-hidden shadow-md sm:max-w-md sm:rounded-lg border-5 border-solid rounded-3xl border-blue relative">
          <div className="flex mt-[10px] flex-row justify-start items-start">
            <svg
              className="h-8 w-8 text-black cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={()=>{navigate("/login")}}
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <line x1="18" y1="6" x2="6" y2="18" />{" "}
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <div className="flex mt-[40px] flex-row justify-start items-start font-bold">
            <span className="text-4xl/[35px]">Sign Up</span>
          </div>
          <div className="flex mt-[18px] flex-row justify-start items-start">
            <span className="text-2xl/[26px] ml-2">
              Use the assigned username and password to sign in.
            </span>
          </div>
          <form
            className="flex flex-col flex-grow ml-2"
            onSubmit={handleSubmit}
          >
            <div className="flex mt-[20px] flex-row items-start">
              <input
                type="text"
                name="username"
                id="username"
                className="block w-full mt-1 font-normal text-3xl border-solid border-blue border-t-0 border-x-0 border-black-300 text-left placeholder-blue outline-transparent"
                placeholder="User Name"
                value={credentials.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex mt-4 flex-row items-start">
              <input
                type="password"
                name="password"
                id="password"
                className="block w-full mt-1 font-normal text-3xl border-solid border-blue border-1 border-t-0 border-x-0 border-black-300 text-left placeholder-blue outline-transparent"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>
            {/* <div className="flex mt-4 flex-row items-start">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="block w-full mt-1 font-normal text-3xl border-solid border-blue border-1 border-t-0 border-x-0 border-black-300 text-left placeholder-blue outline-transparent"
                placeholder="Confirm Password"
                value={credentials.confirmPassword}
                onChange={handleChange}
                required
              />
            </div> */}
            <div className="flex-grow"></div>
            <div className="flex flex-row justify-center items-center mt-4">
              <button
                type="submit"
                className="text-white bg-blue cursor-pointer border-none text-3xl rounded-lg px-5 py-2.5 mr-2 mb-2 w-[594px] h-[51px]"
              >
                <span className=" font-['Poppins'] font-bold">SIGN UP</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
