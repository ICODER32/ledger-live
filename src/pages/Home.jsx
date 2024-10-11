import { FaA, FaArrowRight } from "react-icons/fa6";
export default function Home() {
  return (
    <div className="bg-[#0a0a0a] p-10 h-[100vh] gap-7 flex">
      <div className=" w-[28%] flex flex-col justify-between">
        <div className="flex flex-col justify-between`gap-3">
          <img className="text-white w-[200px]" src="/logo.png" alt="abc" />
          <h1 className="text-white text-6xl font-light main_heading">
            THE MOST SECURE <br /> CRYPTO CURRENCY <br /> & NFT WALLET
          </h1>
          <p className=" mt-4 text-[20px] text-white">
            Securely manage, buy and grow your crypto and NFTs on Ledger Live
          </p>
        </div>
        <div className=" flex flex-col gap-3 ">
          <button className="w=[600px] flex items-center justify-center gap-4 font-semibold rounded-full p-3 bg-white text-black">
            <span>Get Started</span> <FaArrowRight />
          </button>
          <button className="text-white font-semibold rounded-full text-[18px] p-2 border border-white">
            No device? Buy a Ledger Nano X
          </button>
        </div>

        <div>
          <p className=" text-[20px] text-white text-center ">
            By tapping &quot;Get Started&quot; you consent and agree to our{" "}
            <span className="text-[#d4a0ff] underline">
              Terms and conditions
            </span>{" "}
            and <br />
            <span className="text-[#d4a0ff] underline">Privacy Policy</span>
          </p>
        </div>
      </div>
      <div className="bg-pink-400 ">h</div>
    </div>
  );
}
