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

"use client";

import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

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
      ctx.font = "500 28px Archivo";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(labels[index], pos.x, pos.y);
      ctx.restore();
    });
  },
};

ChartJS.register(sliceLabelPlugin);

export default function TeamEllipseChart() {
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

  const options = {
    responsive: false,
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
  };

  return (
    <div style={{ width: 398, height: 398 }}>
      <Doughnut data={data} options={options} width={398} height={398} />
    </div>
  );
}
