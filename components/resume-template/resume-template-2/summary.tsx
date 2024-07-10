"use client";

import DOMPurify from "dompurify";
import parse from "html-react-parser";
import useResumeStore from "@/store/resumeStore";

const Summary = () => {
  const summary = useResumeStore((state) => state.profile?.summary);

  return (
    <section className="mb-4">
      <div className="text-sm text-wrap">
        {parse(DOMPurify.sanitize(summary!))}
      </div>
    </section>
  );
};

export default Summary;
