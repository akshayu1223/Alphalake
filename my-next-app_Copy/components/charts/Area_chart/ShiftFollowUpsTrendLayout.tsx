

"use client";

export default function ShiftFollowUpsTrendLayout({ children }) {
  return (
    <div
      className="
        absolute top-[1372px] left-[36px]
        w-[1365px]
        h-[613px]
        bg-white
        rounded-[20px]
        border-[1.27px]
        border-[#CCCCCC]
        shadow-[3.8px_5.07px_12.17px_-7.6px_rgba(0,0,0,0.25)]
        overflow-hidden
      "
    >
      {/* TITLE */}
      <div className="absolute top-[26px] left-[30px] font-archivo font-semibold text-[24px] tracking-[0.05em]">
        Shift Ratings & Outstanding Follow-ups Trend
      </div>

      {/* CHART SLOT */}
  {/* CHART BOX WITH Y-AXIS LABEL ON TOP */}
<div
  className="
    absolute
    top-[103px]
    left-[1px]
    w-[1332.66px]
    h-[399px]
    
    border-gray-600
    relative
  "
>
  {/* Y-AXIS LABEL ON TOP OF THIS BOX */}
 <div
  className="
    absolute
    top-[94px]
    left-[39px]
    font-archivo
    text-[23.94px]
    transform
    rotate-90
    origin-top-left
  "
>
  No of Ratings
</div>


  {children}
</div>


      {/* TIME LABEL */}
      <div className="absolute top-[502px] left-[636.2px] font-archivo text-[23.94px]">
        Time (Last week)
      </div>

      {/* Y-AXIS LABEL */}
      {/* <div className="absolute top-[95px] left-[39px] font-archivo text-[23.94px] rotate-90">
        No of Ratings
      </div> */}

      {/* LEGEND */}
      <div className="absolute top-[562px] left-[436px] flex items-center gap-[60px]">
        <div className="flex items-center gap-[14px]">
          <span className="font-archivo text-[18px] tracking-[0.05em]">Shift Rating</span>
          <div className="w-[56px] h-[0px] border-[10px] border-[#FFAFA3] rounded"></div>
        </div>

        <div className="flex items-center gap-[14px]">
          <span className="font-archivo text-[18px] tracking-[0.05em]">Outstanding Follow-ups</span>
          <div className="w-[56px] h-[0px] border-[10px] border-[#96AC40] rounded"></div>
        </div>
      </div>
    </div>
  );
}
