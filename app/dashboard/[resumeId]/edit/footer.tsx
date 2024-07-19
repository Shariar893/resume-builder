"use client";

import { cn } from "@/lib/utils";
import { FileImage, LayoutDashboard } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [selectedSection, setSelectedSection] = useState<"profile" | "preview">(
    "profile"
  );
  return (
    <footer className="absolute bottom-0 w-full border-t border-t-primary-foreground bg-[#09090b]">
      <ul className="flex items-center justify-between px-12 max-w-[400px] mx-auto ">
        <li
          className={cn(
            "flex flex-col items-center py-3.5 transform duration-300",
            selectedSection === "profile"
              ? "border-t-2 border-white"
              : "text-secondary"
          )}
          onClick={() => setSelectedSection("profile")}
        >
          <LayoutDashboard />
          <span>Content</span>
        </li>
        <li
          className={cn(
            "flex flex-col items-center py-3.5 transform duration-300",
            selectedSection === "preview"
              ? "border-t-2 border-white"
              : "text-secondary"
          )}
          onClick={() => setSelectedSection("preview")}
        >
          <FileImage />
          <span>Preview</span>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
