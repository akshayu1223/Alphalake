

import ShiftFollowUpsTrendLayout from "./ShiftFollowUpsTrendLayout";
import ShiftRatingsFollowUpsTrendChart from "@/components/charts/Area_chart//ShiftRatingsFollowUpsTrendChart";

import XAxisBox from "./XAxisBox";
import YAxisBox from "./YAxisBox";

const data = [
  { name: "Sep 12", green: 22, pink: 18 },
  { name: "Sep 13", green: 45, pink: 20 },
  { name: "Sep 14", green: 33, pink: 25 },
  { name: "Sep 15", green: 50, pink: 30 },
  { name: "Sep 16", green: 35, pink: 28 },
  { name: "Sep 17", green: 60, pink: 40 },
  { name: "Sep 18", green: 55, pink: 35 },
];

const xLabels = ["Sep 12","Sep 13","Sep 14","Sep 15","Sep 16","Sep 17","Sep 18"];
const yLabels = [0, 15, 30, 45, 60];

export default function ShiftFollowUpsTrendBox() {
  return (
    <ShiftFollowUpsTrendLayout>

      {/* Chart box */}
      <div className="absolute top-[9.98px] left-[129.68px] w-[1193.01px] h-[319.2px] border-2 border-[#CCCCCC]">
        <ShiftRatingsFollowUpsTrendChart 
          data={data} 
          xLabels={xLabels} 
          yLabels={yLabels} 
        />
      </div>

      {/* X-axis */}
      <XAxisBox
        className="absolute top-[432.18px] left-[92.7px] w-[1274.01px] h-[54.97px] border-2"
        xLabels={xLabels}
      />

      {/* Y-axis */}
      <YAxisBox
        className="absolute top-[105.91px] left-[79.81px] w-[50.86px] h-[336.82px] border-2"
        yLabels={yLabels}
      />

    </ShiftFollowUpsTrendLayout>
  );
}
