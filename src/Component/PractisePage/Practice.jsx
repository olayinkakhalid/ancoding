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
            Dive deeper by learning HTML, simple and easily understood. <br />
            <span className="text-green-500">Code with Another World</span>
          </p>

        </div>
      </div>

      {/* PRACTICE MODES */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-gray-100 p-6 md:p-9">

        {/* QUICK DRILLS */}
        <div className="relative overflow-hidden bg-green-500 hover:bg-green-600 transition-colors duration-300 p-10 text-white w-full md:w-64 text-center rounded-lg shadow-md">

          <h2 className="text-xl font-bold animate-float">
            Quick Drills
          </h2>

          <p className="text-sm opacity-80 mt-2">
            Fast questions, quick answers
          </p>

        </div>

        {/* CHALLENGES */}
        <div className="relative overflow-hidden bg-green-600 hover:bg-green-700 transition-colors duration-300 p-14 text-white w-full md:w-96 text-center rounded-lg shadow-lg">

          <h2 className="text-2xl font-bold animate-float">
            Challenges
          </h2>

          <p className="text-sm opacity-80 mt-2">
            Build real coding skills step by step
          </p>

        </div>

        {/* SANDBOX */}
        <div className="relative overflow-hidden bg-green-500 hover:bg-green-700 transition-colors duration-300 p-10 text-white w-full md:w-64 text-center rounded-lg shadow-md">

          <h2 className="text-xl font-bold animate-float">
            Sandbox
          </h2>

          <p className="text-sm opacity-80 mt-2">
            Free coding playground
          </p>

        </div>

      </div>

    </div>
  );
};

export default Practice;