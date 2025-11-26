export default function Box4() {
  return (
    <div
      className="
        relative
        w-[221px]
        h-[144px]
        bg-[#FAFAFA]
        border border-[#FAFAFA] border-[0.5px]
        rounded-[20px]
        shadow-[3.8px_5.07px_12.17px_-7.6px_rgba(0,0,0,0.25)]
      "
    >
      {/* Title - Total Shift Issues */}
      <p
        className="
          absolute
          top-[17px]
          left-[14px]
          w-[205px]
          h-[26px]
          font-archivo
          font-medium
          text-[24px]
          leading-[109%]
          tracking-[0.05em]
          text-[#1E1E1E]
          whitespace-nowrap
        "
      >
        Total Shift Issues
      </p>

      {/* Big Number - 151 */}
      <p
        className="
          absolute
          top-[48px]
          left-[14px]
          w-[91px]
          h-[54px]
          font-archivo
          font-medium
          text-[50px]
          leading-[109%]
          tracking-[0.05em]
          text-[#2F2F2F]
          whitespace-nowrap
        "
      >
        151
      </p>

      {/* Subtext - -6 from last period */}
      <p
        className="
          absolute
          top-[107px]
          left-[14px]
          w-[161px]
          h-[20px]
          font-archivo
          font-normal
          text-[18px]
          leading-[109%]
          tracking-[0.05em]
          text-[#96AC40]
          whitespace-nowrap
        "
      >
        -6 from last period
      </p>
    </div>
  );
}
