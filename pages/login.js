import React from "react";
import Image from "next/image";
import Link from "next/link";
const Login = () => {
  return (
    <div>
      <Image src="/login.jpg" layout="fill" className="" />
      <div className=" container absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-[400px] rounded-xl bg-primary-dark p-4  flex items-center flex-col shadow">
          <Image src="/icon-white.svg" height="100px" width="100px" />
          <form className="w-full p-4 flex flex-col items-center space-y-4">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              autoComplete={false}
              className="bg-primary-light w-full rounded-2xl placeholder-white border-none px-4 py-3"
            />
            <input
              type="text"
              name="password"
              id="password"
              autoComplete={false}
              placeholder="Password"
              className="bg-primary-light w-full rounded-2xl placeholder-white border-none px-4 py-3"
            />

            <button
              type="submit"
              className="bg-secondary w-full h-12 rounded-xl"
            >
              Login
            </button>

            <div>
              <p>
                Dont have an account?
                <Link href="/signup">
                  <a className="text-secondary"> Sign up!</a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
