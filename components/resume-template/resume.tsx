"use client";

import ResumeTemplate3 from "@/components/resume-template/resume-template-2/index";
import { useRef } from "react";
import Draggable from "react-draggable";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import ResumeToolKit from "./resume-tool-kit";

const Resume = () => {
  const resumeRef = useRef(null);

  return (
    <div className="p-4 relative w-full">
      <TransformWrapper
        ref={resumeRef}
        maxScale={2}
        centerOnInit={true}
        minScale={0.2}
        initialScale={0.5}
        limitToBounds={false}
        smooth={false}
      >
        {(toolTip) => (
          <>
            <ResumeToolKit toolTip={toolTip} />
            <TransformComponent
              wrapperStyle={{
                width: "100%",
                maxHeight: "100vh",
              }}
            >
              <Draggable>
                <div
                  ref={resumeRef}
                  style={{
                    backgroundColor: "white",
                    width: "210mm",
                    height: "297mm",
                    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                    transformOrigin: "top left",
                  }}
                >
                  {/* <ResumeTemplate /> */}
                  <ResumeTemplate3 />
                </div>
              </Draggable>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

export default Resume;
