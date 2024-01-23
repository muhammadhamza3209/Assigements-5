import Image from "next/image";

import Img from "./(compoments)/img/img";

import Card from "./(compoments)/card/card";

import a from "../public/hero image.png";

import { FaBars } from "react-icons/fa";

import client from "../public/client.png";

import Div from "./(compoments)/div/div";

import Footer from "./(compoments)/footer/footer";

export default function Home() {
  return (
    <>
      {/* Nav */}

      <nav>
        <div class="logo pl-5">
          <b>basnik</b>
        </div>
        <input type="checkbox" id="click" />
        <label for="click">
          <FaBars />
        </label>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Contect</a>
          </li>
          <li>
            <a href="#">
              <button className="border-2 border-green-600 px-3 py-1">
                Sigen in
              </button>
            </a>
          </li>
          <li>
            <a href="#">
              <button className="bg-blue-800 text-white px-3 py-1">
                Sigen in
              </button>
            </a>
          </li>
        </ul>
      </nav>

      {/* Nav Close */}

      {/* Section 1 start */}
      <div className="lg:flex lg:flex-row gap-[15%] max-w-[1500px] mx-auto justify-center mt-7 ">
        <div className="max-w-[500px]  mt-10">
          <p className="lg:text-6xl md:text-5xl text-3xl font-bold :leading-[80px]">
            Search for Homes in your Neighborhood
          </p>

          <p className="mt-8">
            Online Estate Agency, the modern way to sell your own home. You can
            use griffin residential to market your property.
          </p>

          <div className="flex gap-10 mt-9">
            <div>
              <p className="text-bold">
                <b>Adress</b>
              </p>
              <p>587 brended Road</p>
            </div>

            <div>
              <p>
                <b>city</b>
              </p>
              <p>Elso ppl</p>
            </div>

            <div>
              <button className="bg-blue-600 text-white py-1 px-3 rounded-2xl ">
                Send
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-[600px] ">
          <Image src={a} alt="" />
        </div>
      </div>

      {/* Section 1 Close */}

      {/* Section 2 Start  */}

      <div className="max-w-[1500px] flex mx-auto items-center gap-5 justify-around   mt-10 ">
        <Img pr={require("../public/image 531 (1).png")} />
        <Img pr={require("../public/image 527.png")} />
        <Img pr={require("../public/image 528.png")} />
        <Img pr={require("../public/image 529.png")} />
        <Img pr={require("../public/image 530.png")} />
      </div>

      {/* Section 2 Close  */}

      <div className="max-w-[550px] mx-auto justify-center text-center mt-16">
        <p className="text-3xl">
          <b>What Can We Help You Find?</b>
        </p>
      </div>

      {/* section 3 start card */}

      <div className="max-w-[1500px] md:flex lg:grid-cols-3 md:grid-cols-2 justify-center mx-auto gap-16 mt-16  ">
        <Card sr={require("../public/icon 01.png")} />
        <Card sr={require("../public/icon 02.png")} />
        <Card sr={require("../public/icon 02.png")} />
      </div>

      {/* Section 3 Cars Close */}

      {/* Section 4 start */}

      <div className="max-w-[1100px] mt-10 mx-auto">
        <div className="lg:flex lg:justify-between">
          <div className="max-w-[430px]">
            <p className="font-bold text-2xl">
              <b>Our trending latest proparty</b>
            </p>
            <p>
              Our unique process gives you peace of mind from home rent to
              service
            </p>
          </div>

          <div className="max-w-[440px] flex md:text-center  gap-3">
            <a href="">
              <button className="border-2 border-black rounded-xl py-3 px-4">
                Propty type
              </button>
            </a>
            <a href="">
              <button className="bg-blue-950 text-white px-5 py-3 rounded-xl">
                See All propty
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* section 4 Close */}

      {/* Section 5 start */}

      <div className="max-w-[1200px]  md:grid md:grid-cols-2 mx-auto justify-center ">
        <Div hr={require("../public/image (1).png")} />
        <Div hr={require("../public/image (2).png")} />

        <Div hr={require("../public/image.png")} />

        <Div hr={require("../public/image.png")} />
      </div>

      {/* Section 5 Close */}

      {/* section 6 start */}

      <div className="w-[100%]">
        <div className="max-w-[550px] mt-20 mx-auto justify-center">
          <div>
            <p className="text-center text-3xl">
              <b>TESTIMONIALS</b>
            </p>
            <p className="mt-5">
              Our Clients send us bunch of smilies with our services and we love
              them
            </p>

            <Image className="mx-auto" src={client} alt="" />
          </div>

          <div className="shadow-2xl py-4">
            <p className="text-center mt-3">
              "We are very pleased with the way Besnik handled our purchase of a
              lake home. He was prompt, friendly, and very knowledgeable. He
              followed up on any and all concerns.
            </p>
            <p className="text-center mt-4 text-2xl">
              <b>Becky Nelson</b>
            </p>
          </div>
        </div>
      </div>

      {/*section 6 Close  */}

      {/* Section 7 start footer */}

      <div className="max-w-[1300px] lg:grid lg:grid-cols-4 mg:gird md:grid-cols-2 mx-auto justify-center text-center  mt-24">
        <Footer para="Populares" />
        <Footer para="About Us" />
        <Footer para="Quick lines" />
        <Footer para="Sports" />
      </div>

      <div className="max-w-[1200px] mt-20 flex justify-between mb-5  mx-auto">
        <div>
          <p className="font-bold text-3xl">besnik</p>
        </div>

        <div className="shadow-2xl px-3 py-2">
          <button className="text-center">@ 2023 All copyright Resevers</button>
        </div>
      </div>
    </>
  );
}
