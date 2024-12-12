import React from 'react';
import Image from "next/image";
import girl from '@/public/red-final-girl.png';

const LoginPage = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      
      {/* Image Section */}
      <div className="h-30vh sm:h-full sm:w-1/2 hidden sm:block">
        <Image 
          src={girl} 
          alt="girl" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:hidden h-[30vh]">
        <Image 
          src={girl} 
          alt="girl" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Login Form Section */}
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="shadow-md rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center">Login to your Account</h1>
          <p className="text-gray-600 mb-6 text-center">Login with your details</p>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring focus:ring-red-500"
                placeholder="myemail@abc.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring focus:ring-red-500"
                placeholder="********"
              />
            </div>
            <button
              type="submit"
              className="bg-red-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-lg w-full"
            >
              LOGIN
            </button>
          </form>
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Not Registered Yet?{' '}
              <a href="#" className="text-blue-500 hover:underline">
                Create an Account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
