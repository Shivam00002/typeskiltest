import React from "react";
import { RxCrossCircled } from "react-icons/Rx";
import { SiSimpleanalytics } from "react-icons/si";
import { RiCheckDoubleLine, RiTimerLine } from "react-icons/Ri";
import { GiChart } from "react-icons/gi";
import { BsListStars, BsPercent } from "react-icons/Bs";
import { FaRegTimesCircle } from "react-icons/Fa";
import { FiFlag } from "react-icons/Fi";
import { AiTwotoneStar } from "react-icons/ai";
import PieChart from "./piechart/PieChart";
import WrongAnsPie from "./piechart/wrongAnsPie";
import LeftAnsPie from "./piechart/LeftPie";
import AccuracyChart from "./piechart/AccuChart";
import { header } from "@/data/header";
import { Container } from "./Container";

const Result: React.FC = () => {
  return (
    <Container>
      <div className="w-full   mt-20  ">
        <h1 className="font-semibold text-start text-[19px] ">
          Overall Performance Analysis
        </h1>

        <div className="grid md:grid-cols-5 lg:grid-cols-8 grid-cols-4 mt-5 border ">
          <div className="border-l-2  text-left px-2  full h-16">
            <p className="font-semibold md:text-center text-left text-green-600 text-sm md:text-lg ">
              0/30
            </p>

            <div className="flex md:justify-center gap-1 py-2">
              <div className="flex items-center ">
                {" "}
                <RiCheckDoubleLine size={18} />
              </div>
              <p className="font-semibold md:text-center text-lefttext-gray-600 text-xs md:text-lg lg:text-[14px]">
                Right
              </p>{" "}
            </div>
          </div>

          <div className="border-l-2 text-left px-2  full h-16">
            <p className="font-semibold md:text-center text-left text-red-600 text-sm md:text-lg  ">
              0/30
            </p>

            <div className="flex md:justify-center gap-1 py-2 items-center">
              <RxCrossCircled size={15} />
              <p className="font-semibold md:text-center text-lefttext-gray-600  text-xs md:text-lg lg:text-[14px]">
                Wrong
              </p>{" "}
            </div>
          </div>

          <div className="border-l-2  text-left px-2  full h-16">
            <p className="font-semibold md:text-center text-left  text-sm md:text-lg  ">
              0/30
            </p>

            <div className="flex md:justify-center gap-1 items-center">
              <SiSimpleanalytics size={12} />
              <p className="font-semibold md:text-center text-lefttext-gray-600 py-2 text-xs md:text-lg lg:text-[14px]">
                Score
              </p>{" "}
            </div>
          </div>

          <div className="border-l-2  text-left px-2 full h-16">
            <p className="font-semibold md:text-center text-left  text-sm md:text-lg  ">
              00:00:05
            </p>

            <div className="flex md:justify-center gap-1 items-center">
              <RiTimerLine size={18} />
              <p className="font-semibold md:text-center text-left.
text-gray-600 py-2 text-xs md:text-lg lg:text-[14px]">
Time
</p>{" "}
</div>
</div>

<div className="border-l-2  text-left px-2 full h-16">
<div className="flex items-center">
<GiChart size={18} />
</div>

<p className="font-semibold md:text-center text-left  text-sm md:text-lg  ">
<span className="text-gray-600">1/</span>5
</p>

<div className="flex md:justify-center gap-1 items-center">
<BsListStars size={15} />
<p className="font-semibold md:text-center text-lefttext-gray-600 py-2 text-xs md:text-lg lg:text-[14px]">
Accuracy
</p>{" "}
</div>
</div>

<div className="border-l-2  text-left px-2 full h-16">
<div className="flex items-center">
<BsPercent size={18} />
</div>

<p className="font-semibold md:text-center text-left  text-sm md:text-lg  ">
<span className="text-gray-600">0%</span>
</p>

<div className="flex md:justify-center gap-1 items-center">
<AiTwotoneStar size={15} />
<p className="font-semibold md:text-center text-lefttext-gray-600 py-2 text-xs md:text-lg lg:text-[14px]">
Accuracy Level
</p>{" "}
</div>
</div>

<div className="border-l-2  text-left px-2 full h-16">
<div className="flex items-center">
<FaRegTimesCircle size={18} />
</div>

<p className="font-semibold md:text-center text-left  text-sm md:text-lg  ">
<span className="text-gray-600">0/</span>5
</p>

<div className="flex md:justify-center gap-1 items-center">
<FiFlag size={15} />
<p className="font-semibold md:text-center text-lefttext-gray-600 py-2 text-xs md:text-lg lg:text-[14px]">
Left Questions
</p>{" "}
</div>
</div>
</div>

<div className="grid gap-5 grid-cols-2 mt-10">
<div className="col-span-1">
<PieChart />
</div>
<div className="col-span-1">
<WrongAnsPie />
</div>
<div className="col-span-1">
<LeftAnsPie />
</div>
<div className="col-span-1">
<AccuracyChart />
</div>
</div>
</div>
</Container>
);
};

export default Result;
