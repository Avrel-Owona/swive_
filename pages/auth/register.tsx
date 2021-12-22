import React from "react";
import BoxAuth from "../../components/BoxAuth";
import Link from "next/link";

const Register = () => {
  return (
    <div className="flex w-screen h-screen z-10">
      <BoxAuth title="Sign Up" />
      <div className="border w-full flex flex-column flex items-center justify-center">
        <form className="flex flex-col items-center w-1/2">
          <div className="flex flex-col mb-3 w-full mt-8">
            <label className="font-medium text-gray-700 text-custom-form text-sm">
              Firstname *
            </label>
            <input
              className="input-form mt-2 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm"
              type="text"
            />
          </div>
          <div className="flex flex-col mb-3 w-full">
            <label className="font-medium text-gray-700 text-custom-form text-sm">
              Lastname *
            </label>
            <input
                className="input-form mt-2 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm"
                type="text"
            />
          </div>
          <div className="flex flex-col mb-3 w-full">
            <label className="font-medium text-gray-700 text-custom-form text-sm">
              Email *
            </label>
            <input
                className="input-form mt-2 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm"
                type="email"
            />
          </div>
          <div className="flex flex-col mb-3 w-full">
            <label className="font-medium text-gray-700 text-custom-form text-sm">
              Phone number *
            </label>
            <input
                className="input-form mt-2 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm"
                type="tel"
            />
          </div>
          <div className="flex flex-col mb-3 w-full">
            <label className="font-medium text-gray-700 text-custom-form text-sm">
              Password *
            </label>
            <input
                className="input-form mt-2 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm"
                type="password"
            />
          </div>
          <div className="flex flex-col mb-3 w-full">
            <label className="font-medium text-gray-700 text-custom-form text-sm">
              Confirm password *
            </label>
            <input
                className="input-form mt-2 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm"
                type="password"
            />
          </div>

          <button type="submit" className="bg-blue-500 text-gray-100 py-3 text-sm w-full mt-2">
            {/*{isLoading ? "processing..." : "Sign In"}*/}
            Sign Up
          </button>
          <span className='text-xs mt-3 w-full text-right'>
            Already a member ?
            <Link href="/auth/login">
              <span className="text-blue-600 cursor-pointer"> Log in</span>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
