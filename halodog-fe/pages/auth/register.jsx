// import axios from 'axios'
import { axiosInstance } from "@/utils/config";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Navbar from "../../components/navbar.jsx";
// import api from '../api/ap

export default function register() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async () => {
    await axiosInstance
      .post("/auth/register", {
        name: nama,
        email: email,
        password: password,
      })
      .then((res) => {
        // const token =
        console.log(res);
        router.push("/auth/login");
      });
  };
  return (
    <div className='h-[100vh]'>
      <div className='flex items-center h-full justify-center'>
        <form className='w-[776px] h-[719px] bg-[#FFFF] flex flex-col items-center justify-center rounded-[12px] ml-[-10px] border-2'>
          <p className='font-poppins font-[900] text-[36px] mb-[90px]'>
            Register
          </p>
          <input
            type='text'
            name='name'
            className='border-2 w-[300px] h-[40px] font-poppins mb-[20px] px-[10px] rounded-[12px] text-black'
            placeholder='name'
            onChange={(e) => setNama(e.target.value)}
          />
          <input
            type='text'
            name='email'
            className='border-2 w-[300px] h-[40px] font-poppins mb-[20px] px-[10px] rounded-[12px] text-black'
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            name='password'
            className='border-2 w-[300px] h-[40px] font-poppins mb-[20px] px-[10px] rounded-[12px] text-black'
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type='button'
            className='bg-[#0066FF] w-[200px] rounded-[12px] text-white font-bold py-[5px]'
            name='login'
            onClick={handleSubmit}
          >
            Register
          </button>
        </form>
      </div>
      {/* <button onClick={testAPI}>TEST</button> */}
    </div>
  );
}
