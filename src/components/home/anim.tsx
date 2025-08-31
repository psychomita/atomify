import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Anim() {
  return (
    <DotLottieReact
      src="https://lottie.host/6b43aa82-14e4-42a7-ada8-6810a74efdae/Sg2sOrffa1.lottie"
      loop
      autoplay
      speed={0.4}
      style={{ width: '1000px', height: '500px', display: 'block' }} // Adjust these values as needed
    />
  );
}