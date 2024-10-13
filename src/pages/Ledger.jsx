import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
export default function Ledger() {
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] relative w-[100vw] bg-[#191919]">
      <div>
        <div className=" w-full absolute top-8 flex items-center p-10 justify-between">
          <button
            onClick={() => {
              navigate("/");
            }}
            className=" z-10 flex items-center justify-center gap-3 hover:border hover:border-purple-400 hover:underline text-white font-semibold text-[18px]  w-[150px] py-3 rounded-full transition-all duration-75"
          >
            <FaArrowLeft />
            <span>Previous</span>
          </button>
          <img src="/ledger.png" className="w-[90px] h-[40px] z-10" alt="" />
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
        <h1 className=" z-10 main_heading absolute top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl text-center">
          What&apos;s Your Ledger?
        </h1>

        <div className=" z-0 w-full h-[100vh] flex items-centerjustify-center">
          <div className="group hover:translate-y-2 h-[100vh] w-[20%] gap-10 flex-col hover:bg-[#2c2c2c] flex items-center justify-center">
            <img className=" mt-32 h-[250px]" src="/stax.png" alt="" />
            <h2 className="main_heading text-5xl text-white">Ledger Stax</h2>
            <button
              onClick={() => {
                navigate("/device");
              }}
              className="w-[200px] flex items-center justify-center gap-4 font-semibold rounded-full p-3 bg-white text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Select
            </button>
          </div>
          <div className="group hover:translate-y-2 h-[100vh] w-[20%] gap-10 flex-col hover:bg-[#2c2c2c] flex items-center justify-center">
            <img className=" mt-32 h-[250px]" src="/flex.png" alt="" />
            <h2 className="main_heading text-5xl text-white">Ledger Flex</h2>
            <button
              onClick={() => {
                navigate("/device");
              }}
              className="w-[200px] flex items-center justify-center gap-4 font-semibold rounded-full p-3 bg-white text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Select
            </button>
          </div>
          <div className="group hover:translate-y-2 h-[100vh] w-[20%] gap-10 flex-col hover:bg-[#2c2c2c] flex items-center justify-center">
            <img className=" mt-32 h-[250px]" src="/nanos.png" alt="" />
            <h2 className="main_heading text-5xl text-white">Ledger Nano S</h2>
            <button
              onClick={() => {
                navigate("/device");
              }}
              className="w-[200px] flex items-center justify-center gap-4 font-semibold rounded-full p-3 bg-white text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Select
            </button>
          </div>
          <div className="group hover:translate-y-2 h-[100vh] w-[20%] gap-10 flex-col hover:bg-[#2c2c2c] flex items-center justify-center">
            <img className=" mt-32 h-[250px]" src="/nanosp.png" alt="" />
            <h2 className="main_heading text-5xl text-white">
              Ledger Nano S Plus
            </h2>
            <button
              onClick={() => {
                navigate("/device");
              }}
              className="w-[200px] flex items-center justify-center gap-4 font-semibold rounded-full p-3 bg-white text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Select
            </button>
          </div>
          <div className="group hover:translate-y-2 h-[100vh] w-[20%] gap-10 flex-col hover:bg-[#2c2c2c] flex items-center justify-center">
            <img className=" mt-32 h-[250px]" src="/nanox.png" alt="" />
            <h2 className="main_heading text-5xl text-white">Ledger Nano X</h2>
            <button
              onClick={() => {
                navigate("/device");
              }}
              className="w-[200px] flex items-center justify-center gap-4 font-semibold rounded-full p-3 bg-white text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
