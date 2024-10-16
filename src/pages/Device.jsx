import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
export default function Device() {
  const navigate = useNavigate();
  return (
    <div className="min-h-[100vh] relative w-[100vw] bg-[#131415]">
      <div>
        <div className=" w-full sticky top-8 flex items-center p-10 justify-between">
          <button
            onClick={() => {
              navigate("/");
            }}
            className=" z-10 flex items-center justify-center gap-3 hover:border hover:border-purple-400 hover:underline text-white font-semibold text-[18px]  w-[150px] py-3 rounded-full transition-all duration-75"
          >
            <FaArrowLeft />
            <span>Previous</span>
          </button>
          <img src="/ledger.png" className="w-[90px] h-[40px]" alt="" />
          <select
            className=" bg-[#191919] text-white font-semibold text-[18px]"
            name=""
            id=""
          >
            <option className=" bg-white" value="English">
              English
            </option>
          </select>
        </div>
        <div className="flex items-center justify-center flex-col w-full ">
          <div className="mt-[200px] w-[80%] flex justify-between">
            <h1 className=" text-white main_heading text-6xl">
              First Time Using <br /> Your Nano S Plus?
            </h1>
            <div className="w-[400px] relative border h-[450px] border-[#ffffff31] p-10">
              <img
                className=" 
              h-[200px] w-[200px]
              "
                src="/device1.png"
                alt=""
              />
              <h1 className=" text-white text-4xl main_heading mt-5">
                Setup a new nano
              </h1>
              <p
                className="
                text-white
                text-[18px]
                font-semibold
                mt-5"
              >
                Let&apos;s start and setup your device
              </p>
              <button
                onClick={() => {
                  navigate("/recovery");
                }}
                className="
                bg-white
               
                text-black
                font-semibold
                text-[18px]
                rounded-full
                absolute
                bottom-3
                right-3
                mt-5
                p-3
                flex
                items-center
                justify-center
                gap-3"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
          <hr />
        </div>
        <hr
          className="
        w-full
        border-t-2
        border-[#ffffff31]
        mt-10
        
        "
        />

        <div className="flex p-16 items-center justify-center flex-col w-full ">
          <div className=" w-[88%] flex flex-row-reverse justify-between">
            <div className="  w-[400px]  relative border h-[480px] border-[#ffffff31] p-10">
              <img
                className=" 
              h-[200px] w-[200px]
              mx-auto
              "
                src="/recovery2.png"
                alt=""
              />
              <h1 className=" text-white text-4xl main_heading mt-5">
                Restore your recovery phrase on new wallet
              </h1>
              <p
                className="
                text-white
                text-[18px]
                font-semibold
                mt-5"
              >
                Use an existing recovery phrase to restore your private keys on
                new Nano!
              </p>
              <button
                onClick={() => {
                  navigate("/recovery");
                }}
                className="
                bg-white
               
                text-black
                font-semibold
                text-[18px]
                rounded-full
                absolute
                bottom-3
                right-3
                mt-5
                p-3
                flex
                items-center
                justify-center
                gap-3"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
          <hr />
        </div>

        <div className="flex p-16 items-center justify-center flex-col w-full ">
          <div className=" w-[88%] flex flex-row-reverse justify-between">
            <div className="  w-[400px]  relative border h-[480px] border-[#ffffff31] p-10">
              <img
                className=" 
              h-[200px] w-[200px]
              mx-auto
              "
                src="/recovery3.png"
                alt=""
              />
              <h1 className=" text-white text-4xl main_heading mt-5">
                Restore using ledger <br /> Recovery
              </h1>
              <p
                className="
                text-white
                text-[18px]
                font-semibold
                mt-5"
              >
                You need to have a ledger recovery subscription
              </p>
              <button
                onClick={() => {
                  navigate("/recovery");
                }}
                className="
                bg-white
               
                text-black
                font-semibold
                text-[18px]
                rounded-full
                absolute
                bottom-3
                right-3
                mt-5
                p-3
                flex
                items-center
                justify-center
                gap-3"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
