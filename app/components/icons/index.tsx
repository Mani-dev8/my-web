import React from "react";

type SvgProps = React.SVGProps<SVGSVGElement>;

export function CurlyLoopIcon({
  width = 22,
  height = 43,
  stroke = "#6E6E6E",
  strokeOpacity = 0.3,
  strokeWidth = 3,
  ...props
}: SvgProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.05389 41.3762C2.05389 41.3762 26.171 3.80417 11.0324 1.5676C5.41593 0.737838 -0.827972 7.86076 2.37013 15.1693C5.48568 22.2892 21.1911 21.9307 21.1911 21.9307"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function DoubleCurlyIcon({
  width = 53,
  height = 25,
  stroke = "#6E6E6E",
  strokeOpacity = 0.7,
  strokeWidth = 2,
  ...props
}: SvgProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 53 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.407 9.86s10.134 4.524 25.391 1.495S48.206.685 48.206.685M20.678 20.236s7.456 1.226 16.98-3.408C47.18 12.194 50.566 5.924 50.566 5.924"
        stroke="#db2777"
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function HeroStarIcon({
  width = 32,
  height = 32,
  stroke = "#6E6E6E",
  strokeOpacity = 0.2,
  strokeWidth = 2.5,
  ...props
}: SvgProps) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.7051 10.0801L17.1316 10.4658L17.7018 10.3935L27.8722 9.10811L20.9887 16.7051L20.603 17.1316L20.6745 17.7022L21.9589 27.8731L14.3628 20.9891L13.9371 20.603L13.3666 20.6745L3.19391 21.9598L10.0797 14.3628L10.4658 13.9371L10.3935 13.367L9.10721 3.19481L16.7051 10.0801Z"
        stroke="black"
        strokeOpacity={0.2}
        strokeWidth={2.5}
      />
    </svg>
  );
}
