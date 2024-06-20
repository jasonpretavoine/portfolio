import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
      <Typewriter
        options={{
        strings: [
          "Développeur Full Stack",
          "Développeur Web",
          ],
        autoStart: true,
        loop: true,
        delay: 50,
        deleteSpeed: 10,
        }}
      />
      )
}

export default Type