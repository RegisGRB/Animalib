import React from "react";
import { AnimatePresence } from "framer-motion";
const MotionBox = ({ controller, variants,exitbeforeenter=false, ...props }) => {
  return (
    <AnimatePresence exitBeforeEnter={exitbeforeenter}>
      {controller && (
          React.cloneElement(props.children, {
            initial: "hidden",
            animate: controller ? "show" : "hidden",
            exit: "hidden",
            variants: variants,
          })
      )}
    </AnimatePresence>
  );
};

export default MotionBox;
