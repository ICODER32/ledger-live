import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { FaCheckCircle } from "react-icons/fa";

const SuccessPage = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Confetti effect should stop after 5 seconds
  useEffect(() => {
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  }, []);

  // To adjust confetti to screen size
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-full bg-[#131415] text-white">
      {/* Confetti animation */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={500}
          recycle={false}
        />
      )}

      {/* Main Success Content */}
      <div className="flex flex-col w-full h-full  items-center justify-center text-center space-y-6">
        <FaCheckCircle className="text-[green] text-9xl" />
        <h1 className="text-3xl font-bold">
          Backup of your Secret <br /> Recovery Phrase restored
        </h1>
        <p className="text-lg">
          You have successfully recovered access using <br /> Ledger Recover.{" "}
        </p>
        <a
          href="https://support.ledger.com"
          className="bg-white text-black font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          Continue
        </a>
      </div>
    </div>
  );
};

export default SuccessPage;
