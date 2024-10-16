import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#65C466",
        opacity: 1,
        border: 0,
        ...theme.applyStyles("dark", {
          backgroundColor: "#2ECA45",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[600],
      }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
      ...theme.applyStyles("dark", {
        opacity: 0.3,
      }),
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#39393D",
    }),
  },
}));

export default function Recovery() {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  return (
    <div className=" h-[100vh] flex bg-[#131415]">
      <img src="/recoverypic.png" className=" h-full" alt="" />
      <div className=" w-full h-full flex items-start justify-center">
        <div className=" flex items-start justify-center flex-col w-[80%] h-[100%]">
          <img
            src="/recoveryprogress.png"
            className="w-[80%] mt-[0px]"
            alt=""
          />
          <h1 className="text-white w-full mt-8 text-[30px]">
            ENTER YOUR RECOVERY PHRASE
          </h1>

          <p className=" text-[#ffffffaa] mt-8 text-[18px]">
            Your recovery phrase is the secret list of words that you backed up
            when you first set up <br /> you wallet . <br />
            Ledger does not keep a copy of your recovery phrase. <br />
          </p>

          <div className="  border-[0.5px]    rounded-lg flex items-center  border-white  px-7 mt-16">
            <FormControlLabel
              control={<IOSSwitch sx={{ m: 3 }} />}
              onChange={(e) => setIsDisabled(!isDisabled)}
            />
            <p
              className="
            text-white
            text-[18px]
            "
            >
              I understand if I lose my recovery phrase, I won&apos;t be able to
              access my <br /> crypto in case I lose access to my Nano
            </p>
          </div>

          <div
            className=" 
          flex
          items-center
          justify-between
          gap-4
          w-[80%]
          mt-28

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
            w-[250px]
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
              onClick={() => navigate("/recoveryphrase")}
              disabled={isDisabled}
            >
              Enter Recovery Phrase
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
