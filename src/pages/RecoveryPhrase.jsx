import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";

export default function RecoveryPhrase() {
  const navigate = useNavigate();
  return (
    <div className=" h-[100vh] flex bg-[#131415]">
      <img src="/recoverypic.png" className=" h-full" alt="" />
      <div className=" w-full h-full flex items-start justify-center">
        <div className=" flex items-start justify-center flex-col w-[80%] h-[100%]">
          <img src="/recoveryphrase.png" className="w-[80%] mb-9" alt="" />
          <img src="/recoveryphrasemain.png" className="w-[80%] mb-9" alt="" />

          <div
            className=" 
          flex
          items-center
          justify-between
          gap-4
          w-[80%]
          mt-24

          "
          >
            <button
              className="
            w-[200px]
            flex
            items-center
            justify-center
            gap-4
            font-semibold
            rounded-full
            p-3
            text-white
            border
            border-white
            mt-9
            "
              onClick={() => navigate("/device")}
            >
              <span>
                <FaArrowLeft />
              </span>{" "}
              Back
            </button>

            <button
              className="
            w-[200px]
            flex
            items-center
            justify-center
            gap-4
            font-semibold
            rounded-full
            p-3
            bg-white
            text-black
            mt-9
            disabled:opacity-10

            "
              onClick={() => navigate("/recoveryphrasefinal")}
            >
              Next Step
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
