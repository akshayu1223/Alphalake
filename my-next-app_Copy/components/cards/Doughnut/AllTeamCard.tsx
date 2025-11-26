// import TeamEllipseChart from "./TeamEllipseChart";

// export default function AllTeamCard() {
//   return (
//     <div
//       className="
//         w-[459px]
//         h-[507px]
//         bg-white
//         border border-[#CCCCCC] border-[1.27px]
//         rounded-[20px]
//         shadow-[3.8px_5.07px_12.17px_-7.6px_rgba(0,0,0,0.25)]
//         relative
//       "
//     >
//       {/* Heading */}
//       <h2
//         className="
//           absolute
//           top-[26px]
//           left-[30px]
//           font-archivo
//           font-semibold
//           text-[24px]
//           leading-[109%]
//           tracking-[0.05em]
//           text-[#2F2F2F]
//         "
//       >
//         All Teams (last week)
//       </h2>
//   <div className="absolute top-[84px] left-[30px]">
//         <TeamEllipseChart />
//       </div>
//       {/* Content goes here */}
//     </div>
//   );
// }

// import TeamEllipseChart from "./TeamEllipseChart";

// export default function AllTeamCard() {
//   return (
//     <div
//       style={{
//         width: "459px",
//         height: "507px",
//         background: "#FFFFFF",
//         border: "1.27px solid #CCCCCC",
//         borderRadius: "20px",
//         boxShadow: "3.8px 5.07px 12.17px -7.6px rgba(0,0,0,0.25)",
//         position: "relative",
//       }}
//     >
//       {/* Heading */}
//       <h2
//         style={{
//           position: "absolute",
//           top: "26px",
//           left: "30px",
//           fontFamily: "Archivo",
//           fontWeight: 600,
//           fontSize: "24px",
//           lineHeight: "109%",
//           letterSpacing: "0.05em",
//           color: "#2F2F2F",
//         }}
//       >
//         All Teams (last week)
//       </h2>

//       {/* Chart */}
//       <div
//         style={{
//           position: "absolute",
//           top: "84px",
//           left: "30px",
//         }}
//       >
//         <TeamEllipseChart />
//       </div>
//     </div>
//   );
// }

// import TeamEllipseChart from "./TeamEllipseChart";

// export default function AllTeamCard() {
//   return (
//     <div
//       style={{
//         width: "459px",
//         height: "507px",
//         background: "#FFFFFF",
//         border: "1.27px solid #CCCCCC",
//         borderRadius: "20px",
//         boxShadow: "3.8px 5.07px 12.17px -7.6px rgba(0,0,0,0.25)",
//         position: "absolute",   // required for top/left
//         top: "275px",
//         left: "36px",
//       }}
//     >
//       {/* Heading */}
//       <h2
//         style={{
//           position: "absolute",
//           top: "26px",
//           left: "30px",
//           fontFamily: "Archivo",
//           fontWeight: 600,
//           fontSize: "24px",
//           lineHeight: "109%",
//           letterSpacing: "0.05em",
//           color: "#2F2F2F",
//         }}
//       >
//         All Teams (last week)
//       </h2>

//       {/* Chart */}
//       <div
//         style={{
//           position: "absolute",
//           top: "84px",
//           left: "30px",
//         }}
//       >
//         <TeamEllipseChart />
//       </div>
//     </div>
//   );
// }

import TeamEllipseChart from "@/components/cards/Doughnut/TeamEllipseChart";

export default function AllTeamCard() {
  return (
    <div
      className="
        absolute
        top-[275px]
        left-[36px]
        w-[459px]
        h-[507px]
        bg-white
        border-[1.27px]
        border-[#CCCCCC]
        rounded-[20px]
        shadow-[3.8px_5.07px_12.17px_-7.6px_rgba(0,0,0,0.25)]
      "
    >
      {/* Heading */}
      <h2
        className="
          absolute
          top-[26px]
          left-[30px]
          font-archivo
          font-semibold
          text-[24px]
          leading-[109%]
          tracking-[0.05em]
          text-[#2F2F2F]
        "
      >
        All Teams (last week)
      </h2>

      {/* Chart */}
      <div
        className="
          absolute
          top-[84px]
          left-[30px]
        "
      >
        <TeamEllipseChart />
      </div>
    </div>
  );
}
