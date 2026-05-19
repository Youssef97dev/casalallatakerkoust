"use client";

import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export const PdfViewer = ({ file }) => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center py-2 gap-10">
      <Document
        file={file}
        loading={<div className="text-black text-lg">Loading PDF...</div>}
      >
        {/* First Page */}
        <div className="shadow-2xl">
          <Page
            pageNumber={1}
            width={Math.min(width - 20, 1400)}
            renderTextLayer={false}
          />
        </div>

        {/* Second Page */}
        <div className="shadow-2xl">
          <Page
            pageNumber={2}
            width={Math.min(width - 20, 1400)}
            renderTextLayer={false}
          />
        </div>
      </Document>
    </div>
  );
};
