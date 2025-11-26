// import TheoreticalGraphBox from "./TheoreticalGraphBox";
// export default function ThematicAnalysisBox({ children }: any) {
//   return (
//     <div
//       className="
//         w-[1365px]
//         h-[542px]
//         rounded-[20px]
//         border-[1.27px]
//         border-[#CCCCCC]
//         shadow-[3.8px_5.07px_12.17px_-7.6px_rgba(0,0,0,0.25)]
//         bg-white
//         relative
//         overflow-hidden
//         text-black
//       "
//     >
//       {/* --- Thematic Analysis Title --- */}
//       <div
//         className="
//           absolute
//           top-[26px]
//           left-[30px]
//           font-archivo
//           font-[600]
//           text-[24px]
//           leading-[109%]
//           tracking-[5%]
//           text-black
//           z-20
//         "
//       >
//         Thematic Analysis
//       </div>

//       {/* --- Themes Label WITH BLACK BORDER --- */}
//       <div
//         className="
//           absolute
//           top-[496px]
//           left-[618px]
//           w-[129.28px]
//           h-[19.88px]
//           flex
//           items-center
//           justify-center
//           font-archivo
//           font-semibold
//           text-[18.08px]
//           leading-[100%]
//           text-black
//           text-center
//           border
//           border-black
//           rounded-[4px]
//           z-20
//         "
//       >
//         Themes
//       </div>
//    <TheoreticalGraphBox />
//       {/* Children Layer */}
//       <div className="absolute inset-0 p-6 z-0 text-black">
//         {children}
//       </div>
//     </div>
//   );
// }


// import TheoreticalGraphBox from "@/components/charts/TheoreticalGraphBox";

// export default function ThematicAnalysisBox({ children }: any) {
//   return (
//     <div
//       className="
//         w-[1365px]
//         h-[542px]
//         rounded-[20px]
//         border-[1.27px]
//         border-[#CCCCCC]
//         shadow-[3.8px_5.07px_12.17px_-7.6px_rgba(0,0,0,0.25)]
//         bg-white
//         relative
//         overflow-hidden
//       "
//     >
//       {/* --- Thematic Analysis Title --- */}
//       <div
//         className="
//           absolute
//           top-[26px]
//           left-[30px]
//           font-archivo
//           font-[600]
//           text-[24px]
//           leading-[109%]
//           tracking-[5%]
//           text-black
//           z-30
//         "
//       >
//         Thematic Analysis
//       </div>

//       {/* --- Themes Label --- */}
//       <div
//         className="
//           absolute
//           top-[496px]
//           left-[618px]
//           w-[129.28px]
//           h-[19.88px]
//           flex
//           items-center
//           justify-center
//           font-archivo
//           font-semibold
//           text-[18.08px]
//           text-black
//           border border-black
//           rounded-[4px]
//           z-30
//         "
//       >
//         Themes
//       </div>

//       {/* --- Graph Box MUST be above children --- */}
//       <TheoreticalGraphBox />   {/* z-20 */}

//       {/* Children Layer UNDER graph box */}
//       <div className="absolute inset-0 p-6 z-10 text-black">
//         {children}
//       </div>
//     </div>
//   );
// }

// import TheoreticalGraphBox from "@/components/charts/TheoreticalGraphBox";

// export default function ThematicAnalysisBox({ children }: any) {
//   return (
//     <div
//       className="
//         w-[1365px]
//         h-[542px]
//         rounded-[20px]
//         border-[1.27px]
//         border-[#CCCCCC]
//         shadow-[3.8px_5.07px_12.17px_-7.6px_rgba(0,0,0,0.25)]
//         bg-white
//         relative
//         overflow-hidden
//       "
//     >
//       {/* Title */}
//       <div
//         className="
//           absolute top-[26px] left-[30px]
//           font-archivo font-[600] text-[24px] text-black
//           z-30
//         "
//       >
//         Thematic Analysis
//       </div>

//       {/* Themes Box */}
//       <div
//         className="
//           absolute top-[496px] left-[618px]
//           w-[129.28px] h-[19.88px]
//           flex items-center justify-center
//           font-archivo font-semibold text-[18.08px] text-black
//           border border-black rounded-[4px]
//           z-30
//         "
//       >
//         Themes
//       </div>

//       {/* Graph Box - sits ABOVE children */}
//       <div className="absolute inset-0 z-20 pointer-events-none">
//         <TheoreticalGraphBox />
//       </div>

//       {/* Children under graph */}
//       <div className="absolute inset-0 p-6 z-0">
//         {children}
//       </div>
//     </div>
//   );
// }


// import TheoreticalGraphBox from "@/components/charts/TheoreticalGraphBox";
// import ThematicAnalysisChart from "@/components/charts/ThematicAnalysisChart";

// export default function ThematicAnalysisBox({ children }: any) {
//   return (
//     <div
//       className="
//         w-[1365px]
//         h-[542px]
//         rounded-[20px]
//         border-[1.27px]
//         border-[#CCCCCC]
//         shadow-[3.8px_5.07px_12.17px_-7.6px_rgba(0,0,0,0.25)]
//         bg-white
//         relative
//         overflow-hidden
//       "
//     >
//       {/* Title */}
//       <div
//         className="
//           absolute top-[26px] left-[30px]
//           font-archivo font-[600] text-[24px] text-black
//           z-30
//         "
//       >
//         Thematic Analysis
//       </div>

//       {/* Themes Box */}
//       <div
//         className="
//           absolute top-[496px] left-[618px]
//           w-[129.28px] h-[19.88px]
//           flex items-center justify-center
//           font-archivo font-semibold text-[18.08px] text-black
//           border border-black rounded-[4px]
//           z-30
//         "
//       >
//         Themes
//       </div>

//       {/* Graph Box on top of children */}
//      import ThematicAnalysisChart from "@/components/charts/ThematicAnalysisChart";

// <ThematicAnalysisBox>
//   <ThematicAnalysisChart />
// </ThematicAnalysisBox>

//       {/* Children layer under graph */}
//       <div className="absolute inset-0 p-6 z-0">
//         {children}
//       </div>
//     </div>
//   );
// }

// "use client";

// import TheoreticalGraphBox from "@/components/charts/TheoreticalGraphBox";
// import ThematicAnalysisChart from "@/components/charts/ThematicAnalysisChart";

// export default function ThematicAnalysisBox() {
//   return (
//     <div
//       className="
//         w-[1365px]
//         h-[542px]
//         rounded-[20px]
//         border-[1.27px]
//         border-[#CCCCCC]
//         shadow-[3.8px_5.07px_12.17px_-7.6px_rgba(0,0,0,0.25)]
//         bg-white
//         relative
//         overflow-hidden
//       "
//     >
//       {/* TITLE */}
//       <div
//         className="
//           absolute top-[26px] left-[30px]
//           font-archivo font-[600] text-[24px] text-black
//           z-30
//         "
//       >
//         Thematic Analysis
//       </div>

//       {/* THEMES LABEL */}
//       <div
//         className="
//           absolute bottom-[20px] left-1/2 -translate-x-1/2
//           w-[130px] h-[24px]
//           flex items-center justify-center
//           font-archivo font-semibold text-[16px] text-black
//           border border-black rounded-[4px]
//           z-30
//         "
//       >
//         Themes
//       </div>

//       {/* OPTIONAL BACKGROUND BOX OVERLAY */}
//       <div className="absolute inset-0 z-0">
//         <TheoreticalGraphBox />
//       </div>

//       {/* CHART AREA */}
//       <div className="absolute top-[90px] left-[40px] right-[40px] bottom-[70px] z-10">
//         <ThematicAnalysisChart />
//       </div>
//     </div>
//   );
// }

// "use client";

// import TheoreticalGraphBox from "@/components/charts/TheoreticalGraphBox";
// import ThematicAnalysisChart from "@/components/charts/ThematicAnalysisChart";

// export default function ThematicAnalysisBox() {
//   return (
//     <div
//       className="
//         w-[1365px] h-[542px]
//         bg-white rounded-[20px]
//         border border-[#CCCCCC]
//         relative overflow-hidden
//       "
//     >
//       {/* Title */}
//       <div className="absolute top-[26px] left-[30px] font-archivo font-semibold text-[24px]">
//         Thematic Analysis
//       </div>

//       {/* Background Grid */}
//       <div className="absolute top-[90px] left-[30px] right-[30px] bottom-[70px] z-0">
//         <TheoreticalGraphBox />
//       </div>

//       {/* Chart */}
//       <div className="absolute top-[90px] left-[30px] right-[30px] bottom-[70px] z-10">
//         <ThematicAnalysisChart />
//       </div>

//       {/* Themes Label */}
//       <div
//         className="
//           absolute bottom-[20px] left-1/2 -translate-x-1/2
//           px-3 py-1
//           border border-black rounded-md
//           font-archivo font-semibold text-[16px]
//           z-20
//         "
//       >
//         Themes
//       </div>
//     </div>
//   );
// }

// "use client";

// import TheoreticalGraphBox from "@/components/charts/TheoreticalGraphBox";
// import ThematicAnalysisChart from "@/components/charts/ThematicAnalysisChart";

// export default function ThematicAnalysisBox() {
//   return (
//     <div
//       className="
//         w-[1365px]
//         h-[542px]
//         rounded-[20px]
//         border-[1.27px]
//         border-[#CCCCCC]
//         shadow-[3.8px_5.07px_12.17px_-7.6px_rgba(0,0,0,0.25)]
//         bg-white
//         relative
//         overflow-hidden
//       "
//     >
//       {/* TITLE */}
//       <div
//         className="
//           absolute top-[26px] left-[30px]
//           font-archivo font-[600] text-[24px] text-black
//           z-20
//         "
//       >
//         Thematic Analysis
//       </div>

//       {/* THEMES LABEL */}
//       <div
//         className="
//           absolute bottom-[20px] left-1/2 -translate-x-1/2
//           w-[130px] h-[24px]
//           flex items-center justify-center
//           font-archivo font-semibold text-[16px] text-black
//           border border-black rounded-[4px]
//           z-20
//         "
//       >
//         Themes
//       </div>

//       {/* BACKGROUND BOX - BEHIND GRAPH */}
//       <div className="absolute inset-0 z-0">
//         <TheoreticalGraphBox />
//       </div>

//       {/* CHART ON TOP OF BACKGROUND */}
//       <div className="absolute top-[90px] left-[40px] right-[40px] bottom-[70px] z-10">
//         <ThematicAnalysisChart />
//       </div>
//     </div>
//   );
// }

// "use client";

// import TheoreticalGraphBox from "@/components/charts/TheoreticalGraphBox";
// import ThematicAnalysisChart from "@/components/charts/ThematicAnalysisChart";

// export default function ThematicAnalysisBox() {
//   return (
//     <div
//       className="
//         w-[1365px]
//         h-[542px]
//         rounded-[20px]
//         border-[1.27px]
//         border-[#CCCCCC]
//         shadow-[3.8px_5.07px_12.17px_-7.6px_rgba(0,0,0,0.25)]
//         bg-white
//         relative
//         overflow-hidden
//       "
//     >
//       {/* TITLE */}
//       <div
//         className="
//           absolute top-[26px] left-[30px]
//           font-archivo font-[600] text-[24px] text-black
//           z-30
//         "
//       >
//         Thematic Analysis
//       </div>

//       {/* THEMES LABEL */}
//       <div
//         className="
//           absolute bottom-[20px] left-1/2 -translate-x-1/2
//           w-[130px] h-[24px]
//           flex items-center justify-center
//           font-archivo font-semibold text-[16px] text-black
//           border border-black rounded-[4px]
//           z-30
//         "
//       >
//         Themes
//       </div>

//       {/* BACKGROUND GRID AREA - EXACT FIGMA SIZE */}
//       <div
//         className="
//           absolute 
//           left-[18px]
//           top-[91px]
//           w-[1329px]
//           h-[398px]
//           z-0
//         "
//       >
//         <TheoreticalGraphBox />
//       </div>

//       {/* CHART AREA - EXACT SAME SIZE */}
//       <div
//         className="
//           absolute
//           left-[18px]
//           top-[91px]
//           w-[1329px]
//           h-[398px]
//           z-10
//         "
//       >
//         <ThematicAnalysisChart />
//       </div>
//     </div>
//   );
// }

// "use client";

// import TheoreticalGraphBox from "@/components/charts/TheoreticalGraphBox";
// import ThematicAnalysisChart from "@/components/charts/ThematicAnalysisChart";

// export default function ThematicAnalysisBox() {
//   return (
//     <div
//       className="
//         w-[1365px]
//         h-[542px]
//         rounded-[20px]
//         border-[1.27px]
//         border-[#CCCCCC]
//         shadow-[3.8px_5.07px_12.17px_-7.6px_rgba(0,0,0,0.25)]
//         bg-white
//         relative
//         overflow-hidden
//       "
//     >
//       {/* TITLE */}
//       <div
//         className="
//           absolute top-[26px] left-[30px]
//           font-archivo font-[600] text-[24px] text-black
//           z-30
//         "
//       >
//         Thematic Analysis
//       </div>

//       {/* THEMES LABEL — ALL TAILWIND, EXACT FIGMA VALUES */}
//       <div
//         className="
//           absolute 
//           top-[496px] left-[618px]
//           w-[129.2837px] h-[19.8898px]
         
//           flex items-center justify-center
//           font-archivo font-semibold
//           text-[18.08px] leading-[100%] text-black
//           z-30
//         "
//       >
//         Themes
//       </div>

//       {/* BACKGROUND GRID BOX */}
//       <div
//         className="
//           absolute 
//           left-[18px]
//           top-[91px]
//           w-[1329px]
//           h-[398px]
//           z-0
//         "
//       >
//         <TheoreticalGraphBox />
//       </div>

//       {/* CHART */}
//       <div
//         className="
//           absolute
//           left-[18px]
//           top-[91px]
//           w-[1329px]
//           h-[398px]
//           z-10
//         "
//       >
//         <ThematicAnalysisChart />
//       </div>
//     </div>
//   );
// }

// "use client";

// import ThematicAnalysisChart from "@/components/charts/ThematicAnalysisChart";

// export default function ThematicAnalysisBox() {
//   return (
//     <div
//       className="
//         w-[1365px]
//         h-[542px]
//         rounded-[20px]
//         border-[1.27px]
//         border-[#CCCCCC]
//         shadow-[3.8px_5.07px_12.17px_-7.6px_rgba(0,0,0,0.25)]
//         bg-white
//         relative
//         overflow-hidden
//       "
//     >
//       {/* TITLE */}
//       <div
//         className="
//           absolute top-[26px] left-[30px]
//           font-archivo font-[600] text-[24px] text-black
//           z-30
//         "
//       >
//         Thematic Analysis
//       </div>

//       {/* THEMES LABEL */}
//       <div
//         className="
//           absolute 
//           top-[496px] left-[618px]
//           w-[129.2837px] h-[19.8898px]
//           flex items-center justify-center
//           font-archivo font-semibold
//           text-[18.08px] leading-[100%] text-black
//           z-30
//         "
//       >
//         Themes
//       </div>

//       {/* EMPTY BACKGROUND BOX */}
//       <div
//         className="
//           absolute 
//           left-[18px]
//           top-[91px]
//           w-[1329px]
//           h-[398px]
//           z-0
//           bg-white
//           border border-[#E5E5E5]
//           rounded-[4px]
//         "
//       ></div>

//       {/* CHART (OPTIONAL) */}
//       <div
//         className="
//           absolute
//           left-[18px]
//           top-[91px]
//           w-[1329px]
//           h-[398px]
//           z-10
//         "
//       >
//         <ThematicAnalysisChart />
//       </div>
//     </div>
//   );
// }


// "use client";

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Cell,
//   ReferenceLine,
// } from "recharts";

// const data = [
//   { name: "Breaks", value: 2 },
//   { name: "Communication", value: 9 },
//   { name: "RCS", value: 6 },
//   { name: "Staffing", value: 7 },
//   { name: "Work Pressure/ Acuity", value: 0 }, // EMPTY BAR
//   { name: "Equipment", value: 4 },
//   { name: "Skill Mix", value: 10 },
//   { name: "Personal Wellbeing", value: 6 },
//   { name: "Rostering", value: 6 },
// ];

// // Pastel bar colors from screenshot
// const barColors = [
//   "#FFAFA3", // Breaks
//   "#FFD8D1", // Communication
//   "#FFBE98", // RCS
//   "#D6D88D", // Staffing
//   "transparent", // Work Pressure (EMPTY)
//   "#F4C77F", // Equipment
//   "#FFEABA", // Skill Mix
//   "#F3A25B", // Personal Wellbeing
//   "#FBC57F", // Rostering
// ];

// export default function ThematicAnalysisChart() {
//   return (
//     <div className="w-[1329px] h-[398px]">
//       <BarChart
//         width={1329}
//         height={398}
//         data={data}
//         margin={{ top: 20, right: 20, left: 40, bottom: 40 }}
//       >
//         {/* Light grey grid */}
//         <CartesianGrid stroke="#E6E6E6" strokeDasharray="3 3" />

//         {/* Axes */}
//         <XAxis
//           dataKey="name"
//           tick={{ fontSize: 12 }}
//           interval={0}
//         />
//         <YAxis
//           tick={{ fontSize: 12 }}
//           domain={[0, 12]}
//         />

//         <Tooltip />

//         {/* Bars */}
//         <Bar dataKey="value">
//           {data.map((entry, index) => (
//             <Cell key={index} fill={barColors[index]} />
//           ))}
//         </Bar>

//         {/* DOTTED HORIZONTAL LINE (Avg ≈ 5.5 from screenshot) */}
//         <ReferenceLine
//           y={5.5}
//           stroke="#5AA9E6"
//           strokeDasharray="5 5"
//         />

//         {/* BLUE X POINT */}
//         <ReferenceLine
//           x="Work Pressure/ Acuity"
//           y={5.5}
//           label={{
//             value: "✖",
//             position: "center",
//             fill: "#5AA9E6",
//             fontSize: 26,
//             dy: -10,
//           }}
//           stroke="none"
//         />
//       </BarChart>
//     </div>
//   );
// }


// "use client";

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Cell,
// } from "recharts";

// const data = [
//   { name: "Breaks", value: 2 },
//   { name: "Communication", value: 9 },
//   { name: "RCS", value: 6 },
//   { name: "Staffing", value: 7 },
//   { name: "Work Pressure/ Acuity", value: 0 },
//   { name: "Equipment", value: 4 },
//   { name: "Skill Mix", value: 10 },
//   { name: "Personal Wellbeing", value: 6 },
//   { name: "Rostering", value: 6 },
// ];

// const barColors = [
//   "#FFAFA3",
//   "#FFD8D1",
//   "#FFBE98",
//   "#D6D88D",
//   "transparent",
//   "#F4C77F",
//   "#FFEABA",
//   "#F3A25B",
//   "#FBC57F",
// ];

// export default function ThematicAnalysisChart() {
//   return (
//     <div className="w-[1329px] h-[398px]">
//       <BarChart
//         width={1329}
//         height={398}
//         data={data}
//         margin={{ top: 20, right: 20, left: 40, bottom: 40 }}
//       >
//         {/* Light grid */}
//         <CartesianGrid stroke="#E6E6E6" strokeDasharray="3 3" />

//         <XAxis
//           dataKey="name"
//           tick={{ fontSize: 12 }}
//           interval={0}
//         />
//         <YAxis
//           tick={{ fontSize: 12 }}
//           domain={[0, 12]}
//         />

//         <Tooltip />

//         {/* Bars */}
//         <Bar dataKey="value">
//           {data.map((entry, index) => (
//             <Cell key={index} fill={barColors[index]} />
//           ))}
//         </Bar>
//       </BarChart>
//     </div>
//   );
// }

"use client";

import ThematicAnalysisChart from "@/components/charts/Bar_chart/ThematicAnalysisChart";

export default function ThematicAnalysisBox() {
  return (
    <div
      className="
        w-[1365px]
        h-[542px]
        rounded-[20px]
        border-[1.27px]
        border-[#CCCCCC]
        shadow-[3.8px_5.07px_12.17px_-7.6px_rgba(0,0,0,0.25)]
        bg-white
        relative
        overflow-hidden
      "
    >
      {/* TITLE */}
      <div
        className="
          absolute top-[26px] left-[30px]
          font-archivo font-[600] text-[24px] text-black
          z-30
        "
      >
        Thematic Analysis
      </div>

      {/* THEMES LABEL */}
      <div
        className="
          absolute 
          top-[496px] left-[618px]
          w-[129.2837px] h-[19.8898px]
          flex items-center justify-center
          font-archivo font-semibold
          text-[18.08px] leading-[100%] text-black
          z-30
        "
      >
        Themes
      </div>

      {/* FIXED — NO OF RATINGS (ROTATED, INSIDE MAIN BOX) */}
      <div
        className="
          absolute
          top-[230px]     /* Perfect vertical center according to Figma */
          left-[40px]     /* Matches your 46px Figma left */
          w-[26px]
          h-[144px]
          font-archivo
          font-normal
          text-[23.94px]
          leading-[100%]
          text-black
          text-center
          origin-top-left
          transform -translate-x-1/2 rotate-90
          z-20
          flex items-center justify-center
        "
      >
        No of Ratings
      </div>

      {/* EMPTY BACKGROUND BOX (MAIN GRAPH AREA) */}
      <div
        className="
          absolute 
          left-[18px]
          top-[91px]
          w-[1329px]
          h-[398px]
          z-0
          bg-white
          border border-[#E5E5E5]
          rounded-[4px]
        "
      ></div>

      {/* CHART OVERLAY */}
      <div
        className="
          absolute
          left-[18px]
          top-[91px]
          w-[1329px]
          h-[398px]
          z-10
        "
      >
        <ThematicAnalysisChart />
      </div>
    </div>
  );
}
