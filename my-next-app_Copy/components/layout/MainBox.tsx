// import DateFilter from "@/components/filters/DateFilter";
// import TeamFilter from "@/components/filters/TeamFilter";
// import ExportButton from "@/components/filters/ExportButton";
// import AllBoxes from "@/components/Boxes/AllBoxes";
// import AllTeamCard from "@/components/cards/AllTeamCard";
// import AnalyticsBox from "../cards/AnalyticsBox";
// export default function MainBox({ children }: { children: React.ReactNode }) {
//   return (
//     <div
//       className="
//         absolute
//         top-[156px]
//         left-[257px]
//         w-[1436px]
//         h-[2020px]
//         bg-white
//         border border-[#CCCCCC]
//         rounded-[30px]
//         shadow-[3px_4px_9.6px_-6px_rgba(0,0,0,0.25)]
//       "
//     >
//       <DateFilter />
//       <TeamFilter />
//       <ExportButton />

//       <h1
//         className="
//           absolute
//           top-[35px]
//           left-[36px]
//           font-archivo
//           font-semibold
//           text-[24px]
//           leading-[109%]
//           tracking-[0.05em]
//           text-[#2F2F2F]
//         "
//       >
//         Senior Manager Overview
//       </h1>

//       <div className="mt-[120px] ml-[36px]">
//         <AllBoxes />
//       </div>

//       <div className="mt-[40px] ml-[36px]">
//         <AllTeamCard />
//       </div>

//       <div className="mt-[100px] px-10">
//         {children}
//       </div>
//     </div>
//   );
// }

// import DateFilter from "@/components/filters/DateFilter";
// import TeamFilter from "@/components/filters/TeamFilter";
// import ExportButton from "@/components/filters/ExportButton";
// import AllBoxes from "@/components/Boxes/AllBoxes";
// import AllTeamCard from "@/components/cards/AllTeamCard";
// import AnalyticsBox from "../cards/AnalyticsBox";
// import ThematicAnalysisBox from "@/components/charts/ThematicAnalysisBox";

// export default function MainBox({ children }: { children: React.ReactNode }) {
//   return (
//     <div
//       className="
//         absolute
//         top-[156px]
//         left-[257px]
//         w-[1436px]
//         h-[2020px]
//         bg-white
//         border border-[#CCCCCC]
//         rounded-[30px]
//         shadow-[3px_4px_9.6px_-6px_rgba(0,0,0,0.25)]
//       "
//     >
//       <DateFilter />
//       <TeamFilter />
//       <ExportButton />
     

//       <h1
//         className="
//           absolute
//           top-[35px]
//           left-[36px]
//           font-archivo
//           font-semibold
//           text-[24px]
//           leading-[109%]
//           tracking-[0.05em]
//           text-[#2F2F2F]
//         "
//       >
//         Senior Manager Overview
//       </h1>

//       <div className="mt-[120px] ml-[36px]">
//         <AllBoxes />
//       </div>

//       <div className="mt-[40px] ml-[36px]">
//         <AllTeamCard />
//       </div>

//       {/* ⭐ Add AnalyticsBox here ⭐ */}
//      <div className="absolute top-[275px] left-[508px]">
//   <AnalyticsBox />
// </div>


//       <div className="mt-[100px] px-10">
//         {children}
//       </div>
      
//     </div>
//   );
// }

import DateFilter from "@/components/filters/DateFilter";
import TeamFilter from "@/components/filters/TeamFilter";
import ExportButton from "@/components/filters/ExportButton";
import AllBoxes from "@/components/Boxes/AllBoxes";
import AllTeamCard from "@/components/cards/Doughnut/AllTeamCard";
import AnalyticsBox from "../cards/LineChart/AnalyticsBox";
import ThematicAnalysisBox from "@/components/charts/Bar_chart/ThematicAnalysisBox";
import ShiftFollowUpsTrendBox from "@/components/charts/Area_chart/ShiftFollowUpsTrendBox";


// export default function MainBox({ children }: { children: React.ReactNode }) {
//   return (
//     <div
//       className="
//         absolute
//         top-[156px]
//         left-[257px]
//         w-[1436px]
//         h-[2020px]
//         bg-white
//         border border-[#CCCCCC]
//         rounded-[30px]
//         shadow-[3px_4px_9.6px_-6px_rgba(0,0,0,0.25)]
//       "
//     >
//       <DateFilter />
//       <TeamFilter />
//       <ExportButton />

//       <h1
//         className="
//           absolute
//           top-[35px]
//           left-[36px]
//           font-archivo
//           font-semibold
//           text-[24px]
//           leading-[109%]
//           tracking-[0.05em]
//           text-[#2F2F2F]
//         "
//       >
//         Senior Manager Overview
//       </h1>

//       <div className="mt-[120px] ml-[36px]">
//         <AllBoxes />
//       </div>

//       <div className="mt-[40px] ml-[36px]">
//         <AllTeamCard />
//       </div>

//       {/* ⭐ Analytics Box FIRST (absolute positioned) ⭐ */}
//       <div className="absolute top-[275px] left-[508px]">
//         <AnalyticsBox />
//       </div>

//       {/* ⭐ Thematic Analysis Box BELOW (no overlap) ⭐ */}
//   <div className="absolute top-[806px] left-[36px]">
//   <ThematicAnalysisBox />
// </div>
//  {/* ⭐ Shift Rating + Follow Ups Trend Box BELOW Thematic Analysis ⭐ */}
// <div >
//   <ShiftFollowUpsTrendBox />
// </div>


//       <div className="mt-[100px] px-10">
//         {children}
//       </div>
//     </div>
//   );
// }

export default function MainBox({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 🔥 FIXED FILTERS – ALWAYS STAY IN FRONT */}
     

      {/* 🔥 MAIN SCROLLING BOX */}
      <div
        className="
          absolute
          top-[156px]
          left-[257px]
          w-[1436px]
          h-[2020px]
          bg-white
          border border-[#CCCCCC]
          rounded-[30px]
          shadow-[3px_4px_9.6px_-6px_rgba(0,0,0,0.25)]
          overflow-y-auto
        "
      >
         <DateFilter />
      <TeamFilter />
      <ExportButton />
        <h1
          className="
            absolute
            top-[35px]
            left-[36px]
            font-archivo
            font-semibold
            text-[24px]
            leading-[109%]
            tracking-[0.05em]
            text-[#2F2F2F]
          "
        >
          Senior Manager Overview
        </h1>

        <div className="mt-[120px] ml-[36px]">
          <AllBoxes />
        </div>

        <div className="mt-[40px] ml-[36px]">
          <AllTeamCard />
        </div>

        {/* ⭐ Analytics Box ⭐ */}
        <div className="absolute top-[275px] left-[508px]">
          <AnalyticsBox />
        </div>

        {/* ⭐ Thematic Analysis Box ⭐ */}
        <div className="absolute top-[806px] left-[36px]">
          <ThematicAnalysisBox />
        </div>

        {/* ⭐ Shift Follow Ups ⭐ */}
        <div>
          <ShiftFollowUpsTrendBox />
        </div>

        <div className="mt-[100px] px-10">
          {children}
        </div>
      </div>
    </>
  );
}
