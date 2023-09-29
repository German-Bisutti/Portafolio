import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer ",
          "Scrum metodologie ",
          "Data Bases",
          "Servers y Backend",
          "React Redux",
          "Amante del mate 🧉",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
