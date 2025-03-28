import { useState } from "react";

export const Button = () =>  {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      className={`button ${isClicked ? "clicked" : ""}`}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
      onMouseLeave={() => setIsClicked(false)}
    >
      Done
    </button>
  );
}


