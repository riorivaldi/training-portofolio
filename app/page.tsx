"use client";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Cards from './components/cards'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex h-screen w-full justify-between grid-cols-2 bg-slate-500 bg-cover bg-center">
        <div className=" mx-24 mt-8">
          <p className="text-xl text-white font-black mt-20">HII, IAM</p>
          <p className="text-7xl hover:text-blue-50 mt-2 shadow-blue-500 text-shadow-xl font-bold transform hover:scale-105 transition-transform duration-300">
            RIO RIVALDI
          </p>
          <p className="text-1x1 font-medium mt-2">Web Development</p>
          <div className="bg-blue-400 w-20 h-2 mt-2 rounded-lg"></div>

          <div className="mt-3 transform hover:scale-105 transition-transform duration-700">
            <a href="https://web.whatsapp.com/">
              <Image src="/img/wa.png" width={34} height={540} alt="wa" />
            </a>
          </div>

          <div className="relative -top-8 mx-10 transform hover:scale-105 transition-transform duration-700">
            <a href="https://www.instagram.com/riorivaldii._/">
              <Image src="/img/ig.png" width={30} height={100} alt="ig" />
            </a>
          </div>
        </div>
        <div className="cols-span-6">
          <Image src="/img/dede.png" width={300} height={400} alt="character" />
        </div>
      </div>
      <div>
        <section id="about">
          <div className="grid grid-cols-2 bg-slate-900 w-full h-screen">
            <div className="flex justify-center items-center">
              <Image src="/img/hello.png" width={450} height={350} alt="Rio" />
            </div>
            <div className="bg-slate-900 p-4 border-4 border-x-blue-700 h-64 rounded-xl my-40 mx-10 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-4xl font-bold mb-7 text-white">About Me</h3>
              <p className="text-white text-lg font-serif">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                velit consectetur deserunt a necessitatibus quam nesciunt itaque
                tempore repellendus fugiat perspiciatis vel, repellat deleniti
                aliquam. Modi vitae pariatur saepe sunt?
              </p>
            </div>
          </div>
        </section>
      </div>
      <section
        id="contact"
        className="flex h-screen items-center bg-slate-500 "
      >
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-slate-900">
            Contact Me
          </h1>
          <p className="text-lg mb-8 text-center strong font-semibold text-slate-900">
            Berikut adalah informasi saya, Jika ada pertanyaan silahkan hubungi
            kontak saya.
          </p>

          <div className="bg-slate-900 border-4 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-5">Kontak kami disini</h2>
            <p className="mb-2">
              <i>Alamat:</i> Jl. Moch Toha. 123, Bandung, Indonesia
            </p>
            <p className="mb-2">
              <i>Telepon:</i> 0812345678
            </p>
            <p className="mb-2">
              <i>Email:</i> 123456789@gmail.com
            </p>
            <p className="mb-2">
              <i>
                Jika anda mengalami masalah jangan sungkan untuk hubungi kami di
                atas
              </i>
            </p>
          </div>
        </div>
      </section>
      <section id="projects" className="w-full h-screen bg-neutral-700 mb-2 ">
        <h1 className="m-10  text-7xl text-white  text-center font-bold">
          Projects
        </h1>

        <div className="flex gap-4 justify-center items-center ">
          <Cards img={"/img/Makanan.jpeg"} desc={"gk"}>
            <p>makanan pedas</p>
          </Cards>

          <div className="flex gap-4 justify-center items-center ">
            <Cards img={"/img/Makanan.jpeg"} desc={"gk"}>
              <p>makanan pedas</p>
            </Cards>
          </div>

          <div className="flex gap-4 justify-center items-center ">
            <Cards img={"/img/Makanan.jpeg"} desc={"gk"}>
              <p>makanan pedas</p>
            </Cards>
          </div>
        </div>
      </section>
    </div>
  );
}
