import * as React from "react";
import { render } from "react-dom";
import { Frame, Stack } from "framer";
import "./styles.css";

export function MyComponent() {
  return (
    <Stack
      size={200}
      direction={"horizontal"}
      style={{ transform: `rotate(0deg)` }}
    >
      <Stack size={150} gap={-10} direction={"horizontal"}>
        <Frame height={400} width={10} background={"#fff"} />
        <Frame height={10} width={400} background={"#fff"} />
      </Stack>
      <Stack
        size={0}
        gap={-40}
        direction={"horizontal"}
        style={{ x: -175, y: 0 }}
      >
        <Frame
          size={40}
          background={"#blue"}
          radius={40}
          animate={{
            x: 0,
            y: 200,
            borderRadius: 9999,
            scale: 0.1,
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            loop: Infinity,
            repeatDelay: 1,
          }}
        />
        <Frame
          size={40}
          background={"#red"}
          radius={40}
          animate={{
            x: 0,
            y: -200,
            borderRadius: 9999,
            scale: 0.1,
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            loop: Infinity,
            repeatDelay: 1,
          }}
        />
        <Frame
          size={40}
          background={"orange"}
          radius={40}
          animate={{
            x: 200,
            y: 0,
            borderRadius: 9999,
            scale: 0.1,
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            loop: Infinity,
            repeatDelay: 1,
          }}
        />
        />
      </Stack>
      <Stack
        size={0}
        gap={-40}
        direction={"horizontal"}
        style={{ x: -185, y: 0 }}
      >
        <Frame size={40} style={{ y: 220 }} />
        <Frame
          size={40}
          style={{ y: -220 }}
          animate={{
            background: `red`,
            scale: 4,
          }}
          transition={{
            duration: 1,
            loop: Infinity,
            repeatDelay: 10,
          }}
        />
        />
        <Frame size={40} style={{ x: 415 }}>
          {" "}
          P{" "}
        </Frame>
      </Stack>
    </Stack>
  );
}

const rootElement = document.getElementById("root");
render(<MyComponent />, rootElement);
