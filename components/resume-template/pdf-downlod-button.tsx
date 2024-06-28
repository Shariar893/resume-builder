import React, { useState } from "react";

const PDFDownloadButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/generate-resume", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("PDF generation failed");
      }

      // Get the blob from the response
      const blob = await response.blob();

      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Clean up
      window.URL.revokeObjectURL(url);
      // document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading PDF:", error);
      alert("Failed to download PDF. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button onClick={handleDownload} disabled={isLoading}>
      {isLoading ? "Generating PDF..." : "Download PDF"}
    </button>
  );
};

export default PDFDownloadButton;
