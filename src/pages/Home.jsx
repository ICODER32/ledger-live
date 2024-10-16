import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#131415]  h-[100vh] gap-7 flex">
      <div className=" w-[28%] flex p-5 flex-col justify-between">
        <div className="flex flex-col justify-between gap-10">
          <img className="text-white w-[200px]" src="/logo.png" alt="abc" />
          <h1 className="text-white text-5xl font-[300]  main_heading">
            THE MOST SECURE <br /> CRYPTO CURRENCY <br /> & NFT WALLET
          </h1>
          <p className=" mt-4 text-[18px] mb-4 text-white">
            Securely manage, buy and grow your crypto and NFTs on Ledger Live
          </p>
        </div>
        <div className=" flex flex-col gap-3 ">
          <button
            onClick={() => {
              navigate("/ledger");
            }}
            className="w-[300px] flex items-center justify-center gap-4 font-semibold rounded-full p-3 bg-white text-black"
          >
            <span className="text-[16px]">Get Started</span> <FaArrowRight />
          </button>
          <button className="text-white w-[300px] font-semibold rounded-full text-[16px] p-2 border border-white">
            No device? Buy a Ledger Nano X
          </button>
        </div>

        <div>
          <p className=" text-[16px] text-white text-center ">
            By tapping &quot;Get Started&quot; you consent and agree to our{" "}
            <span className="text-[#d4a0ff] underline">
              Terms and conditions
            </span>{" "}
            and <br />
            <span className="text-[#d4a0ff] underline">Privacy Policy</span>
          </p>
        </div>
      </div>
      <div className="h-[100vh] ">
        <img src="/main.png" className="w-full h-full" alt="" />
      </div>
    </div>
  );
}
