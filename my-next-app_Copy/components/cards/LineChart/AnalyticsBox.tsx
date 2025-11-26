
import MyNewBox from "@/components/cards/LineChart/MyNewBox";

export default function AnalyticsBox() {
  return (
    <div
      className="
        relative 
        w-[893px] 
        h-[507px] 
        rounded-[20px] 
        bg-white 
        border-[1.27px] 
        border-[#CCCCCC] 
        shadow-[3.8px_5.07px_12.17px_-7.6px_rgba(0,0,0,0.25)]
      "
    >
 
<div className="relative w-full h-full">   {/* Parent must be relative */}
  
  <div
    className="
      absolute 
         top-[300px]
    left-[30px]
    w-[144px]
    h-[20px]
      flex 
      items-center
      bg-white
    
    -rotate-90 /* <<< ROTATION HERE */
      origin-left /* <<< IMPORTANT: keeps position stable */  /* temporary to verify visibility */
    "
  >
    <span
      className="
        font-archivo 
        font-normal 
        text-[18px] 
        tracking-[0.05em] 
        text-black
        whitespace-nowrap
      "
    >
      + Sentiment (%)
    </span>
  </div>

</div>



      {/* Title */}
      <h2
        className="
          absolute 
          top-[26px] 
          left-[30px] 
          font-archivo 
          font-semibold 
          text-[24px] 
          tracking-[0.05em] 
          text-[#2F2F2F]
        "
      >
        Follow Ups Vs Positive Sentiments
      </h2>

      {/* Subtext */}
      <p
        className="
          absolute 
          top-[69px] 
          left-[30px] 
          font-archivo 
          font-normal 
          text-[18px] 
          tracking-[0.05em] 
          text-[#2F2F2F]
        "
      >
        Shows how faster follow-ups lead to improved team sentiment over time.
      </p>

    
      {/* 

      {/* Inner Chart / Box */}
      <MyNewBox />

      {/* Time label */}
      <span
        className="
          absolute
          top-[368px]
          left-[374px]
          w-[150px]
          h-[20px]
          bg-white
          text-black
          whitespace-nowrap
          font-archivo
          font-normal
          text-[18px]
          leading-[109%]
          tracking-[0.05em]
          flex
          items-center
        "
      >
        Time (Last week)
      </span>

      {/* LEFT GROUP */}
      <div
        className="
          absolute 
          top-[432px] 
          left-[195px] 
          w-[504px] 
          h-[20px] 
          flex 
          items-center
        "
      >
        {/* Positive Sentiments Box */}
        <div
          className="
            w-[239px] 
            h-[20px] 
            bg-white 
            flex 
            items-center 
            pl-[10px]
          "
        >
          <span
            className="
              font-archivo 
              font-normal 
              text-[18px] 
              tracking-[0.05em] 
              text-black
            "
          >
            Positive Sentiments
          </span>
        </div>
      </div>

      {/* Dashed Line */}
      <div
        className="
          absolute 
          top-[444px] 
          left-[378px] 
          w-[56px] 
          border-t-[2px] 
          border-dashed 
          border-[#FFAFA3]
        "
      ></div>

      {/* Quick Follow Ups Box */}
      <div
        className="
          absolute 
          top-[432px] 
          left-[484px] 
          w-[215px] 
          h-[20px] 
          bg-white 
          flex 
          items-center 
          pl-[10px]
        "
      >
        <span
          className="
            font-archivo 
            font-normal 
            text-[18px] 
            tracking-[0.05em] 
            text-black
          "
        >
          Quick Follow Ups
        </span>
      </div>

      {/* Solid Line */}
      <div
        className="
          absolute 
          top-[444px] 
          left-[643px] 
          w-[56px] 
          border-t-[2px] 
          border-[#96AC40]
        "
      ></div>
    </div>
  );
}
