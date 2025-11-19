import { useState, type DragEvent, type ChangeEvent } from "react";

export const UploadBox = () => {
    const [fileName, setFileName] = useState<string | null>(null);

    // --------------- Handle File Selection (Click Upload) ---------------
    const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) processFile(file);
    };

    // --------------- Handle Drag Over ---------------
    const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    // --------------- Handle Drop ---------------
    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) processFile(file);
    };

    // --------------- Process File ---------------
    const processFile = (file: File) => {
        const allowedTypes = [
            "text/csv",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "application/vnd.ms-excel",
        ];

        if (!allowedTypes.includes(file.type)) {
            alert("Please upload a valid CSV or Excel file.");
            return;
        }

        setFileName(file.name);

        console.log("Uploaded File:", file);
    };

    return (
        <div
            className="w-full h-full flex flex-col items-center justify-center"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            {/* Upload Icon */}
            <div className="bg-[#d9dd8a] p-[25px] rounded-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                    className="w-[80px] h-[80px]"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75h15m-12-3 4.5-4.5 4.5 4.5m-4.5-4.5v12"
                    />
                </svg>
            </div>

            {/* Upload Click Text */}
            <label
                htmlFor="fileInput"
                className="mt-[25px] font-archivo font-medium text-[20px] tracking-[2%] text-black cursor-pointer"
            >
                <span className="text-[#0066FF] underline">Upload</span> or drag the CSV or Excel file here.
            </label>

            {/* Hidden Input */}
            <input
                id="fileInput"
                type="file"
                accept=".csv, .xlsx, .xls"
                className="hidden"
                onChange={handleFileSelect}
            />

            {/* Show File Name */}
            {fileName && (
                <p className="mt-4 text-green-700 font-semibold">Uploaded: {fileName}</p>
            )}
        </div>
    );
}
