export default function Box6() {
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
      {/* Title – % Completion */}
      <p
        className="
          absolute
          top-[17px]
          left-[14px]
          w-[169px]
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
        % Completion
      </p>

      {/* Big number – 48% */}
      <p
        className="
          absolute
          top-[48px]
          left-[14px]
          w-[110px]
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
        48%
      </p>

      {/* (87/180) */}
      <p
        className="
          absolute
          top-[76px]
          left-[127px]
          w-[67px]
          h-[17px]
          font-archivo
          font-normal
          text-[16px]
          leading-[109%]
          tracking-[0.05em]
          text-[#858585]
          whitespace-nowrap
        "
      >
        (87/180)
      </p>

      {/* Subtext – -2% from last period */}
      <p
        className="
          absolute
          top-[107px]
          left-[14px]
          w-[183px]
          h-[20px]
          font-archivo
          font-normal
          text-[18px]
          leading-[109%]
          tracking-[0.05em]
          text-[#F1756D]
          whitespace-nowrap
        "
      >
        -2% from last period
      </p>
    </div>
  );
}
