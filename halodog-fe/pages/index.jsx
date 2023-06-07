import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
          src='/logo.png'
          alt='Next.js Logo'
          width={180}
          height={100}
          priority
        />
      </div>
      <p className='text-black text-2xl font-bold mt-4'>
        "Ketahui Penyakit Hewan Peliharaanmu Di sini"
      </p>
      <div className="relative flex place-items-center before:absolute before:rounded-full before:bg-gradient-radial  after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <div className='flex justify-center space-x-4'>
          <Link href='/auth/register'>
            <h2 className='text-2xl text-black font-bold block bg-red-500 px-8 py-4 rounded-lg hover:bg-blue-800 transition duration-300'>
              Daftarkan Akun Baru
            </h2>
          </Link>
          <Link href='/auth/login'>
            <h2 className='text-2xl text-black font-bold block bg-red-500 px-8 py-4 rounded-lg hover:bg-blue-800 transition duration-300'>
              Masuk ke akun Anda
            </h2>
          </Link>
        </div>
      </div>
    </main>
  );
}
