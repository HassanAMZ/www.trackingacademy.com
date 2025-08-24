"use client";

import * as React from "react";

const formatCharacter = (char: string) => (char === " " ? "\u00A0" : char);

type RollingTextProps = Omit<React.ComponentProps<"span">, "children"> & {
  text: string;
};

function RollingText({ ref, text, ...props }: RollingTextProps) {
  const localRef = React.useRef<HTMLSpanElement>(null);
  React.useImperativeHandle(ref, () => localRef.current!);

  const characters = React.useMemo(() => text.split(""), [text]);

  return (
    <span data-slot="rolling-text" {...props} ref={ref}>
      {characters.map((char, idx) => (
        <span
          key={idx}
          className="relative inline-block w-auto perspective-[9999999px] transform-3d"
          aria-hidden="true"
        >
          <span
            className="absolute inline-block origin-[50%_25%] transition-transform duration-500 ease-out backface-hidden"
            style={{
              transform: `rotateX(90deg)`,
              transitionDelay: `${idx * 100}ms`,
            }}
          >
            {formatCharacter(char)}
          </span>
          <span
            className="absolute inline-block origin-[50%_100%] transition-transform duration-500 ease-out backface-hidden"
            style={{
              transform: `rotateX(0deg)`,
              transitionDelay: `${idx * 100 + 300}ms`,
            }}
          >
            {formatCharacter(char)}
          </span>
          <span className="invisible">{formatCharacter(char)}</span>
        </span>
      ))}

      <span className="sr-only">{text}</span>
    </span>
  );
}

export { RollingText, type RollingTextProps };
