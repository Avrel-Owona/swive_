import React from 'react';
import BoxAuth from "../../components/BoxAuth";
import Link from "next/link";
import {useForm} from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup";
import {loginSchema} from "../../utils/schema";
import {loginForm} from '../../_types/auth_types'

const Login = () => {
    const {register, handleSubmit, formState:{errors}} = useForm<loginForm>({
        resolver : yupResolver(loginSchema)
    })
    const onLogin = (data) => {
        console.log(data)
    }

    return (
        <div className="flex w-screen h-screen z-10">
            <BoxAuth title="Sign In" />
            <div className="border w-full flex flex-column flex items-center justify-center">
                <form onSubmit={handleSubmit(onLogin)} className="flex flex-col items-center w-1/2">
                    <div className="flex flex-col mb-3 w-full">
                        <label className="font-medium text-gray-700 text-custom-form text-sm">
                            Email
                        </label>
                        <input
                            className="input-form mt-2 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm"
                            type="email"
                            name='email'
                            {...register('email')}
                        />
                        <small className="text-red-500 text-xs">
                            {errors.email?.message}
                        </small>
                    </div>
                    <div className="flex flex-col mb-3 w-full">
                        <label className="font-medium text-gray-700 text-custom-form text-sm">
                            Password
                        </label>
                        <input
                            className="input-form mt-2 bg-custom-grey focus:bg-custom-grey focus:ring-transparent focus:border-transparent border-gray-300 focus:border-gray-300 text-sm"
                            type="password"
                            name='password_min'
                        />
                        <small className="text-red-500 text-xs">
                            {errors.password_min?.message}
                        </small>
                    </div>

                    <button type="submit" className="bg-blue-500 text-gray-100 py-3 text-sm w-full mt-2">
                        {/*{isLoading ? "processing..." : "Sign In"}*/}
                        Sign In
                    </button>
                    <span className='text-xs mt-3 w-full text-right'>
            Not a member ?
            <Link href="/auth/register">
              <span className="text-blue-600 cursor-pointer"> Sign Up</span>
            </Link>
          </span>
                </form>
            </div>
        </div>
    );
};

export default Login;