import React, { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

const RoughText = ({
  children,
  type = "underline",
  color = "#f4b400",
  strokeWidth = 2,
  padding = 2,
  animationDuration = 700,
  multiline = true,
  iterations = 1,
  className = "",
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) {
      return undefined;
    }

    const annotation = annotate(elementRef.current, {
      type,
      color,
      strokeWidth,
      padding,
      animationDuration,
      multiline,
      iterations,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            annotation.show();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
      annotation.remove();
    };
  }, [animationDuration, color, iterations, multiline, padding, strokeWidth, type]);

  return (
    <span
      ref={elementRef}
      className={className}
      style={{ display: "inline-block" }}
    >
      {children}
    </span>
  );
};

export default RoughText;
