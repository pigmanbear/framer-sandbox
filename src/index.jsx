import React from "react";
import { render } from "react-dom";
import { motion, useAnimation } from "framer-motion";
import "./styles.css";

export function MyComponent() {
  const controls = useAnimation();
  const redControls = useAnimation();


  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 100,
    tension: 380,
    friction: 220
  }




  function onUpdate(latest) {
    const { cx, cy } = latest;
    if (Math.floor(cy) >= 690 && Math.ceil(cy) < 700) {
      controls.start({
        fill: ["#ffff00", `#fff`],
        transition: {
          // loop: Infinity,
          duration: 0.4,
        },
      });
    }
    //*console.log(cy);
  }

  function onUpdateRed(latest) {
    const { cx, cy } = latest;
    if (Math.floor(cx) >= 440 && Math.ceil(cx) < 500) {
      redControls.start({
        fill: ["#ff0000", `#fff`],
        transition: {
          // loop: Infinity,
          duration: 0.4,
        },
      });
    }
    //*console.log(cy);
  }

  return (
    <>
      {/* <motion.div
        x={200}
        style={{
          height: 100,
          width: 100,
          background: "white",
          translateX: 100,
        }}
      />
      <motion.div
        style={{
          height: 100,
          width: 100,
          backgroundColor: "#fff",
          translateX: 600,
          translateY: 290,
          display: `flex`,
        }}
        animate={controls}
      >
        <div
          style={{
            textAlign: `center`,
            display: "flex",
            justifyContent: "center",
            flexDirection: `row`,
            alignItems: `center`,
          }}
        >
          <div>Event Consumer</div>
        </div>
      </motion.div>
      <motion.div
        
      
        style={{
          height: 100,
          width: 100,
          backgroundColor: "#fff",

          translateY: -290,
          display: `flex`,
        }}
        animate={controls}
      >
        <div
          style={{
            textAlign: `center`,
            display: "flex",
            justifyContent: "center",
            flexDirection: `row`,
            alignItems: `center`,
          }}
        >
          <div>Event Consumer</div>
        </div>
      </motion.div> */}

      <motion.svg width="800" height="800">
        <motion.line
          x1={500}
          x2={500}
          y1={400}
          y2={200}
          fill={`#fff`}
          stroke={`#fff`}
          strokeWidth={3.6}
        />
        <motion.line
          x1={500}
          x2={800}
          y1={400}
          y2={500}
          fill={`#fff`}
          stroke={`#fff`}
          strokeWidth={3.6}
        />
        <motion.text
          fill={`#000`}
          textLength={200}
          style={{ translateY: 300}}
          animate={{
            x: [
              200,
              -100,
              300,
              200,
            ],
            opacity: [1, 0, 0, 1],
          }}
positionTransition={spring}
transition={{
duration: 4,
loop: 3
}}
        >
          sl;kf;ladk;fd;skgdsk;gksdl;kg;sdk;g
        </motion.text>
        <motion.circle
          cx={100}
          cy={400}
          r={20.2}
          fill={`#fff`}
          strokeWidth={13.6}
          animate={{
            cx: [0, 100, 200, 300, 400, 500, 500, 900],
            cy: [400, 400, 400, 400, 400, 400, 200, 200],
            fill: [`#2d2d2d2`, `#d2d2d2`, `#aaa`, "#aaa", `#123abc`, `#fff`],
          }}
          transition={{
            duration: 6,
            //times: [0.3, 0.2, 2, 1, 2],
            loop: Infinity,
          }}
        />
        <motion.circle
          cx={100}
          cy={400}
          r={20.2}
          fill={`#343583`}
          strokeWidth={13.6}
          animate={{
            cx: [200, 100, 200, 225, 500, 500, 500, 900],
            cy: [400, 400, 400, 400, 400, 400, 200, 200],
            fill: [
              `#287654`,
              `#1b1b1b`,
              `#aaa`,
              "#cdcdcd",
              `#180786`,
              `#108786`,
            ],
          }}
          transition={{
            duration: 6,
            //times: [0.3, 0.2, 2, 1, 2],
            loop: Infinity,
          }}
        />
        <motion.circle
          cx={100}
          cy={400}
          r={20.2}
          fill={`red`}
          strokeWidth={13.6}
          animate={{
            cx: [100, 120, 150, 200, 499, 800],
            cy: [400, 400, 400, 400, 100, 100],
          }}
          onUpdate={onUpdateRed}
          transition={{
            duration: 2,
            //times: [0.3, 0.2, 2, 1, 2],
            loop: Infinity,
          }}
        />
        <motion.circle
          cx={100}
          cy={400}
          r={20.2}
          fill={`#fff`}
          strokeWidth={13.6}
          animate={{
            cx: [0, 100, 200, 300, 400, 500, 500, 900],
            cy: [400, 400, 400, 400, 400, 400, 200, 200],
            fill: [`#2d2d2d2`, `#d2d2d2`, `#aaa`, "#aaa", `#123abc`, `#fff`],
          }}
          transition={{
            duration: 4,
            //times: [0.3, 0.2, 2, 1, 2],
            loop: Infinity,
          }}
        />
        <motion.circle
          cx={100}
          cy={400}
          r={20.2}
          fill={`red`}
          strokeWidth={13.6}
          animate={{
            cx: [0, 100, 150, 200, 499, 800],
            cy: [400, 400, 400, 400, 100, 100],
          }}
          onUpdate={onUpdateRed}
          transition={{
            duration: 1,
            //times: [0.3, 0.2, 2, 1, 2],
            loop: Infinity,
          }}
        />
        <motion.line
          x1={200}
          x2={500}
          y1={400}
          y2={100}
          fill={`#fff`}
          stroke={`#000`}
          strokeWidth={3.6}
        />
        <motion.line
          x1={0}
          x2={700}
          y1={400}
          y2={400}
          fill={`#fff`}
          stroke={`#fff`}
          strokeWidth={3.6}
        />

        <motion.line
          x1={200}
          x2={200}
          y1={400}
          y2={700}
          fill={`#fff`}
          stroke={`#fff`}
          strokeWidth={3.6}
        />
        <motion.line
          x1={200}
          x2={500}
          y1={400}
          y2={700}
          fill={`#fff`}
          stroke={`#fff`}
          strokeWidth={3.6}
        />
        <motion.line
          x1={499}
          x2={800}
          y1={700}
          y2={700}
          fill={`#fff`}
          stroke={`#fff`}
          strokeWidth={3.6}
        />
        <motion.line
          x1={499}
          x2={800}
          y1={100}
          y2={100}
          fill={`#fff`}
          stroke={`#fff`}
          strokeWidth={3.6}
        />
        <motion.line
          x1={500}
          x2={900}
          y1={200}
          y2={200}
          fill={`#fff`}
          stroke={`#fff`}
          strokeWidth={3.6}
        />
        <motion.rect
          width={100}
          height={100}
          fill={`#fff`}
          style={{
            translateY: 50,
            translateX: 450,
          }}
          animate={redControls}
        />

        <motion.rect
          width={100}
          height={100}
          fill={`#fff`}
          style={{
            translateY: 650,
            translateX: 450,
          }}
          animate={controls}
        />
        <motion.circle
          cx={100}
          cy={400}
          r={20.2}
          fill={`orange`}
          strokeWidth={13.6}
          animate={{
            cx: [0, 50, 100, 200, 200],
            cy: [400, 400, 400, 400, 800],
          }}
          transition={{
            duration: 1.4,
            //times: [0.3, 0.2, 2, 1, 2],
            loop: Infinity,
          }}
        />
        <motion.circle
          cx={100}
          cy={400}
          r={20.2}
          fill={`green`}
          strokeWidth={13.6}
          animate={{
            cx: [0, 100, 300, 400, 600, 1000],
            cy: [400, 400, 400, 400, 400, 400],
          }}
          transition={{
            duration: 2.5,
            //times: [0.3, 0.2, 2, 1, 2],
            loop: Infinity,
          }}
        />
        <motion.circle
          cx={100}
          cy={400}
          r={20.2}
          fill={`yellow`}
          strokeWidth={13.6}
          animate={{
            cx: [0, 100, 150, 200, 499, 800],
            cy: [400, 400, 400, 400, 700, 700],
          }}
          onUpdate={onUpdate}
          transition={{
            duration: 2.4,
            //times: [0.3, 0.2, 2, 1, 2],
            loop: Infinity,
          }}
        />
        <motion.circle
          cx={100}
          cy={400}
          r={20.2}
          fill={`orange`}
          strokeWidth={13.6}
          animate={{
            cx: [0, 50, 100, 200, 200],
            cy: [400, 400, 400, 400, 800],
          }}
          transition={{
            duration: 1.8,
            //times: [0.3, 0.2, 2, 1, 2],
            loop: Infinity,
          }}
        />
        <motion.circle
          cx={100}
          cy={400}
          r={20.2}
          fill={`green`}
          strokeWidth={13.6}
          animate={{
            cx: [0, 100, 300, 400, 600, 1000],
            cy: [400, 400, 400, 400, 400, 400],
          }}
          transition={{
            duration: 2,
            //times: [0.3, 0.2, 2, 1, 2],
            loop: Infinity,
          }}
        />
        <motion.circle
          cx={100}
          cy={400}
          r={20.2}
          fill={`yellow`}
          strokeWidth={13.6}
          animate={{
            cx: [0, 100, 150, 200, 499, 800],
            cy: [400, 400, 400, 400, 700, 700],
          }}
          onUpdate={onUpdate}
          transition={{
            duration: 1.4,
            //times: [0.3, 0.2, 2, 1, 2],
            loop: Infinity,
          }}
        />
        <motion.rect
          width={100}
          height={100}
          fill={`#fff`}
          style={{
            translateY: 350,
          }}
          animate={controls}
        />
        <motion.rect
          width={100}
          height={100}
          fill={`#fff`}
          style={{
            translateY: 650,
            translateX: 150,
          }}
          animate={controls}
        />
      </motion.svg>
    </>
  );
}

const rootElement = document.getElementById("root");
render(<MyComponent />, rootElement);
