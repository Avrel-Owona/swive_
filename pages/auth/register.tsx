import React from "react";
import BoxAuth from "../../components/BoxAuth";
import Link from "next/link";
import {useForm} from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup";
import {registerSchema} from "../../utils/schema";
import {registerForm} from '../../_types/auth_types'

const Register = () => {
  const {register, handleSubmit, formState:{errors}} = useForm<registerForm>({
    resolver: yupResolver(registerSchema)
  })
const onRegister = (data) => {
    console.log(data)
}


  return (
    <div className="flex w-screen h-screen z-10">
      <BoxAuth title="Sign Up" />
      <div className="border w-full flex flex-column flex items-center justify-center">
        <form className="flex flex-col items-center w-1/2" onSubmit={handleSubmit(onRegister)}>
          <div className="flex flex-col mb-3 w-full mt-8">
            <label className="font-medium text-gray-700 text-custom-form text-sm">
              Firstname *
            </label>
            <input
              className="input-form mt-2 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm"
              type="text"
              name='firstname'
              {...register("firstname")}
            />
            <small className="text-red-500 text-xs">
              {errors.firstname?.message}
            </small>
          </div>
          <div className="flex flex-col mb-3 w-full">
            <label className="font-medium text-gray-700 text-custom-form text-sm">
              Lastname *
            </label>
            <input
                className="input-form mt-2 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm"
                type="text"
                name='lastname'
                {...register("lastname")}
            />
            <small className="text-red-500 text-xs">
              {errors.lastname?.message}
            </small>
          </div>
          <div className="flex flex-col mb-3 w-full">
            <label className="font-medium text-gray-700 text-custom-form text-sm">
              Email *
            </label>
            <input
                className="input-form mt-2 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm"
                type="email"
                name='email'
                {...register("email")}
            />
            <small className="text-red-500 text-xs">
              {errors.email?.message}
            </small>
          </div>
          <div className="flex flex-col mb-3 w-full">
            <label className="font-medium text-gray-700 text-custom-form text-sm">
              Phone number *
            </label>
            <input
                className="input-form mt-2 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm"
                type="tel"
                name='phone'
                {...register("phone")}
            />
            <small className="text-red-500 text-xs">
              {errors.phone?.message}
            </small>
          </div>
          <div className="flex flex-col mb-3 w-full">
            <label className="font-medium text-gray-700 text-custom-form text-sm">
              Password *
            </label>
            <input
                className="input-form mt-2 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm"
                type="password"
                name="password"
                {...register("password")}
            />
            <small className="text-red-500 text-xs">
              {errors.password?.message}
            </small>
          </div>
          <div className="flex flex-col mb-3 w-full">
            <label className="font-medium text-gray-700 text-custom-form text-sm">
              Confirm password *
            </label>
            <input
                className="input-form mt-2 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm"
                type="password"
                name="confirm_password"
                {...register("confirm_password")}
            />
            <small className="text-red-500 text-xs">
              {errors.confirm_password?.message}
            </small>
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
