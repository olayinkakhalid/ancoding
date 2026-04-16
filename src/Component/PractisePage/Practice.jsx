import React from "react";
import anvid from "../../assets/anvid.mp4";

const Practice = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <div className="relative w-full h-[650px] md:h-screen">
        <video
          src={anvid}
          className="brightness-90 object-cover h-full w-full"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 text-white flex flex-col justify-center items-center text-center px-4">

          <p className="text-5xl font-bold text-white mb-4">
            PRACTICE WITH <span className="text-green-500">AN-CODING</span>
          </p>

          <p className="text-sm md:text-lg max-w-xl mx-auto">
            Dive deeper by Practising simple and easily understand codes. <br />
            <span className="text-green-500">Code with Another World</span>
          </p>

        </div>
      </div>

      {/* PRACTICE MODES */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-gray-100 p-6 md:p-9">

        {/* QUICK DRILLS */}
        <div className="relative overflow-hidden bg-green-500 hover:bg-green-600 transition-colors duration-300 p-10 text-white w-full md:w-64 text-center rounded-lg shadow-md" data-aos="fade-up" data-aos-duration="1000">

          <h2 className="text-xl font-bold animate-float">
            Quick Drills
          </h2>

          <p className="text-sm opacity-80 mt-2">
            Fast questions, quick answers
          </p>

        </div>

        {/* CHALLENGES */}
        <div className="relative overflow-hidden bg-green-600 hover:bg-green-700 transition-colors duration-300 p-14 text-white w-full md:w-96 text-center rounded-lg shadow-lg" data-aos="fade-up" data-aos-duration="3000">

          <h2 className="text-2xl font-bold animate-float">
            Challenges
          </h2>

          <p className="text-sm opacity-80 mt-2">
            Build real coding skills step by step
          </p>

        </div>

        {/* SANDBOX */}
        <div className="relative overflow-hidden bg-green-500 hover:bg-green-700 transition-colors duration-300 p-10 text-white w-full md:w-64 text-center rounded-lg shadow-md" data-aos="fade-up" data-aos-duration="1000">

          <h2 className="text-xl font-bold animate-float">
            Sandbox
          </h2>

          <p className="text-sm opacity-80 mt-2">
            Free coding playground
          </p>

        </div>

      </div>


      <div className="text-center space-y-2 md:space-y-3 py-4 md:py-6" data-aos="fade-up" data-aos-duration="2000">
        <h1 className="font-bold text-green-500 text-2xl md:text-4xl tracking-tight">Build a Button</h1>

        <p className="text-sm md:hidden text-gray-400 text-center py-2">Tap and hold to preview animations</p>

        <p className="text-sm hidden md:block text-gray-400 text-center">Hover to preview animations</p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12" data-aos="fade-up" data-aos-duration="1000">
          <button className="bg-green-500 w-20 h-10 text-white font-bold shadow-md" data-aos="fade-up" data-aos-duration="2000">
            Start
          </button>

          <button className="relative px-6 py-2 font-semibold rounded-xl overflow-hidden group bg-white" data-aos="fade-up" data-aos-duration="3000">

            {/* TOP */}
            <span className="absolute top-0 right-0 h-[2px] w-0 bg-green-500 group-hover:w-full group-active:w-full transition-all duration-300"></span>

            {/* RIGHT */}
            <span className="absolute top-0 right-0 w-[2px] h-0 bg-green-500 group-hover:h-full group-active:h-full transition-all duration-300 delay-150"></span>

            {/* BOTTOM */}
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-green-500 group-hover:w-full group-active:w-full transition-all duration-300 delay-300"></span>

            {/* LEFT */}
            <span className="absolute bottom-0 left-0 w-[2px] h-0 bg-green-500 group-hover:h-full group-active:h-full transition-all duration-300 delay-500"></span>

            {/* TEXT */}
            <span className="relative text-green-600 group-hover:text-green-500 group-active:text-green-500 transition duration-300">
              Start
            </span>

          </button>

          <button className="relative px-6 py-2 font-semibold rounded-xl overflow-hidden bg-white border border-green-500 text-green-600 group" data-aos="fade-up" data-aos-duration="4000">

  {/* moving light sweep */}
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-green-200 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] group-active:translate-x-[100%] transition-transform duration-700"></span>

  {/* text */}
  <span className="relative z-10 group-hover:text-green-700 group-active:text-green-700 transition">
    Start
  </span>

</button>
        </div>
      </div>

    </div>
  );
};

export default Practice;