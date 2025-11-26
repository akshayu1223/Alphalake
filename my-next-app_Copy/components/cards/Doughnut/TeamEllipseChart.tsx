// "use client";

// import { Doughnut } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

// export default function TeamEllipseChart() {
//   const data = {
//     labels: ["Value"],
//     datasets: [
//       {
//         data: [100],                     // Full donut
//         backgroundColor: ["#F1756D"],    // Figma background
//         borderColor: ["#FAFAFA"],        // Figma border
//         borderWidth: 2.04,               // Exact border width
//         cutout: "60%",                   // Inner hole — donut size
//       },
//     ],
//   };

//   const options: any = {
//     responsive: false, // For exact size
//     plugins: {
//       legend: { display: false },
//       tooltip: { enabled: false },
//     },
//   };

//   return (
//     <div
//       style={{
//         position: "relative",
//         width: 398,
//         height: 398,
//       }}
//     >
//       <Doughnut
//         data={data}
//         options={options}
//         width={398}
//         height={398}
//       />

//       {/* Figma exact text placement */}
//       <p
//         style={{
//           position: "absolute",
//           top: 171.45,
//           left: 326.56,
//           fontFamily: "Archivo",
//           fontWeight: 500,
//           fontSize: "28.57px",
//           lineHeight: "100%",
//           letterSpacing: "0.02em",
//           color: "#1E1E1E",
//         }}
//       >
//         3
//       </p>
//     </div>
//   );
// }

// "use client";

// import { Doughnut } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

// export default function TeamEllipseChart() {
//   const data = {
//     labels: ["1", "3", "1", "1", "1"],
//     datasets: [
//       {
//         data: [1, 3, 1, 1, 1], // Slice sizes
//         backgroundColor: [
//           "#96AC40",
//           "#F1756D", // 3 slice
//            // 1 slice
//           "#D6D88D", // 1 slice
//           "#FBCC58", // 1 slice
//           "#F2A35E", // 1 slice
//         ],
//         borderColor: "#FFFFFF",
//         borderWidth: 2,
//         cutout: "55%", // inner white hole
//       },
//     ],
//   };

//   const options: any = {
//     responsive: false,
//     plugins: {
//       legend: { display: false },
//       tooltip: { enabled: false },
//     },
//   };

//   return (
//     <div style={{ width: 398, height: 398 }}>
//       <Doughnut data={data} options={options} width={398} height={398} />
//     </div>
//   );
// }

// "use client";

// import { Doughnut } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

// // Custom plugin to draw numbers on slices (like your first page)
// const sliceLabelPlugin = {
//   id: "sliceLabelPlugin",
//   afterDraw(chart: any) {
//     const ctx = chart.ctx;
//     const dataset = chart.data.datasets[0];
//     const meta = chart.getDatasetMeta(0);
//     const labels = chart.data.labels;

//     meta.data.forEach((slice: any, index: number) => {
//       const pos = slice.tooltipPosition();

//       ctx.save();
//       ctx.fillStyle = "#000";
//       ctx.font = "500 28px Archivo";
//       ctx.textAlign = "center";
//       ctx.textBaseline = "middle";
//       ctx.fillText(labels[index], pos.x, pos.y);
//       ctx.restore();
//     });
//   },
// };

// ChartJS.register(sliceLabelPlugin);

// export default function TeamEllipseChart() {
//   const data = {
//     labels: ["1", "3", "1", "1", "1"],

//     datasets: [
//       {
//         data: [1, 3, 1, 1, 1],

//         // EXACT SAME COLORS AS YOUR FIRST PAGE
//         backgroundColor: [
//           "#96AC40", // 1
//           "#F1756D", // 3
//           "#D6D88D", // 1
//           "#FBCC58", // 1
//           "#F2A35E", // 1
//         ],

//         borderColor: "#FFFFFF", // thin white lines
//         borderWidth: 2.04,
//         cutout: "55%", // same white hole size as your first page
//       },
//     ],
//   };

//   const options = {
//     responsive: false, // so size is exact
//     plugins: { legend: { display: false }, tooltip: { enabled: false } },
//   };

//   return (
//     <div style={{ width: 398, height: 398 }}>
//       <Doughnut data={data} options={options} width={398} height={398} />
//     </div>
//   );
// }

// "use client";

// import { Doughnut } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const sliceLabelPlugin = {
//   id: "sliceLabelPlugin",
//   afterDraw(chart: any) {
//     const ctx = chart.ctx;
//     const meta = chart.getDatasetMeta(0);
//     const labels = chart.data.labels;

//     meta.data.forEach((slice: any, index: number) => {
//       const pos = slice.tooltipPosition();

//       ctx.save();
//       ctx.fillStyle = "#000";
//       ctx.font = "500 28px Archivo";
//       ctx.textAlign = "center";
//       ctx.textBaseline = "middle";
//       ctx.fillText(labels[index], pos.x, pos.y);
//       ctx.restore();
//     });
//   },
// };

// ChartJS.register(sliceLabelPlugin);

// export default function TeamEllipseChart() {
//   const data = {
//     labels: ["1", "3", "1", "1", "1"],
//     datasets: [
//       {
//         data: [1, 3, 1, 1, 1],
//         backgroundColor: [
//           "#96AC40",
//           "#F1756D",
//           "#D6D88D",
//           "#FBCC58",
//           "#F2A35E",
//         ],
//         borderColor: "#FFFFFF",
//         borderWidth: 2.04,
//         cutout: "55%",
//       },
//     ],
//   };

//   const options = {
//     responsive: false,
//     plugins: { legend: { display: false }, tooltip: { enabled: false } },
//   };

//   return (
//     <div style={{ width: 398, height: 398 }}>
//       <Doughnut data={data} options={options} width={398} height={398} />
//     </div>
//   );
// }

// "use client";

// import { useRef, useState } from "react";
// import { Doughnut } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

// export default function TeamEllipseChart() {
//   const chartRef: any = useRef(null);

//   const [showBox, setShowBox] = useState(false);
//   const [boxPos, setBoxPos] = useState({ x: 0, y: 0 });

//   const data = {
//     labels: ["1", "3", "1", "1", "1"],
//     datasets: [
//       {
//         data: [1, 3, 1, 1, 1],
//         backgroundColor: [
//           "#96AC40",
//           "#F1756D",
//           "#D6D88D",
//           "#FBCC58",
//           "#F2A35E",
//         ],
//         borderColor: "#FFFFFF",
//         borderWidth: 2.04,
//         cutout: "55%",
//       },
//     ],
//   };

//   const options: any = {
//     responsive: false,
//     plugins: {
//       legend: { display: false },
//       tooltip: { enabled: false },
//     },

//     // CLICK HANDLER
//     onClick: (evt: any, elements: any) => {
//       if (!elements.length) return;

//       const sliceIndex = elements[0].index;

//       const chart = chartRef.current;
//       if (!chart) return;

//       const slice = chart._metasets[0].data[sliceIndex];
//       const pos = slice.tooltipPosition();

//       setBoxPos({ x: pos.x, y: pos.y });
//       setShowBox(true);
//     },
//   };

//   return (
//     <div style={{ position: "relative", width: 398, height: 398 }}>
//       {/* Doughnut Chart */}
//       <Doughnut
//         ref={chartRef}
//         data={data}
//         options={options}
//         width={398}
//         height={398}
//       />

//       {/* FIXED DATE BOX */}
//       {showBox && (
//         <div
//           style={{
//             position: "absolute",
//             top: boxPos.y - 60,
//             left: boxPos.x - 76,
//             width: "152.31px",
//             height: "41.98px",
//             background: "#FAFAFA",
//             borderRadius: "7.2px",
//             border: "1.2px solid #CCCCCC",
//             fontFamily: "Archivo",
//             fontSize: "18px",
//             color: "#000",
//             boxShadow: "3.8px 5.07px 12.17px -7.6px rgba(0,0,0,0.25)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             positionAnchor: "center",
//           }}
//         >
//           Thu, 16 Sep

//           {/* small arrow */}
//           <div
//             style={{
//               position: "absolute",
//               bottom: "-10px",
//               left: "50%",
//               transform: "translateX(-50%)",
//               width: 0,
//               height: 0,
//               borderLeft: "8px solid transparent",
//               borderRight: "8px solid transparent",
//               borderTop: "10px solid #FAFAFA",
//               filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.1))",
//             }}
//           ></div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useRef, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

/* ---------------------------------------------
   LABELS INSIDE DONUT (THE NUMBERS)
----------------------------------------------*/
const sliceLabelPlugin = {
  id: "sliceLabelPlugin",
  afterDraw(chart: any) {
    const ctx = chart.ctx;
    const meta = chart.getDatasetMeta(0);
    const labels = chart.data.labels;

    meta.data.forEach((slice: any, index: number) => {
      const pos = slice.tooltipPosition();

      ctx.save();
      ctx.fillStyle = "#000";
      ctx.font = "600 22px Archivo";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(labels[index], pos.x, pos.y);
      ctx.restore();
    });
  },
};

ChartJS.register(sliceLabelPlugin);

/* ---------------------------------------------
   COMPONENT
----------------------------------------------*/
export default function TeamEllipseChart() {
  const chartRef: any = useRef(null);

  const [showBox, setShowBox] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const data = {
    labels: ["1", "3", "1", "1", "1"],
    datasets: [
      {
        data: [1, 3, 1, 1, 1],
        backgroundColor: [
          "#96AC40",
          "#F1756D",
          "#D6D88D",
          "#FBCC58",
          "#F2A35E",
        ],
        borderColor: "#FFFFFF",
        borderWidth: 2.04,
        cutout: "55%",
      },
    ],
  };

  const options: any = {
    responsive: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },

    onClick: (evt: any, elements: any) => {
      if (!elements.length) return;

      const sliceIndex = elements[0].index;

      const chart = chartRef.current;
      if (!chart) return;

      const slice = chart._metasets[0].data[sliceIndex];
      const p = slice.tooltipPosition();

      setPos({
        x: p.x,
        y: p.y,
      });

      setShowBox(true);
    },
  };

  return (
    <div className="relative w-[398px] h-[398px]">

      {/* DONUT */}

      <Doughnut
        ref={chartRef}
        data={data}
        options={options}
        width={398}
        height={398}
      />

      {/* DATE POPUP */}
      {showBox && (
  <div
    className="absolute"
    style={{
      top: pos.y - 30,
      left: pos.x - 10,
    }}
  >
    {/* MAIN DATE BOX */}
    <div
      className="
        absolute
        bg-[#FAFAFA]
        rounded-[7.2px]
        border-[1.2px] border-[#F1E7E6]
        w-[152.3129578px]
        h-[41.97601318px]
      "
    >
      {/* TEXT CONTAINER (your exact size) */}
      <div
        className="
          absolute
          font-archivo
          text-[21.59px]
          leading-[100%]
          whitespace-nowrap
        "
        style={{
          width: "115px",
          height: "23px",
          top: "8.4px",
          left: "19.19px",
        }}
      >
        Thu, 16 Sep
      </div>
    </div>
{/* ARROW CIRCLE WITH IMAGE */}
<div
  className="
    absolute
    
    rounded-full
    w-[28.783554px]
    h-[28.783554px]
    top-[33px]
    left-[-14px]
    flex
    items-center
    justify-center
  "
>
  <img
    src="/icons/arrow.svg"   // your image path
    alt="arrow"
    className="
      absolute
      w-[19.189796px]
      h-[23.601217px]
      top-[2.4px]
      left-[6px]
    "
  />
</div>

    </div>

)}
     
    </div>
  );
}
