import { useEffect, useState } from "react";

export const CustomCheckbox = ({ checked, onChange }) => {
  const [hover, setHover] = useState(false);
  const [strokeColor, setStrokeColor] = useState("transparent");

  useEffect(() => {
    if (!checked) {
      setHover(false);
      setStrokeColor("transparent");
    }
  }, [checked]);

  return (
    <div
      className={`checkbox ${checked ? "checked" : ""} ${
        checked && !hover ? "checked-leave" : ""
      }`}
      onClick={onChange}
      onMouseEnter={() => {
        setHover(true);
        setStrokeColor("#eeeeee");
        setTimeout(() => setStrokeColor("#B0B0B0"), 500);
      }}
      onMouseLeave={() => {
        if (checked) {
          setHover(false);
          setStrokeColor("#ffffff");
        } else {
          setStrokeColor("#eeeeee");
          setTimeout(() => {
            setHover(false);
            setStrokeColor("transparent");
          }, 500);
        }
      }}
    >
      {(hover || checked) && (
        <CheckMark strokeColor={checked ? "#ffffff" : strokeColor} />
      )}
    </div>
  );
};

const CheckMark = ({ strokeColor }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
};
