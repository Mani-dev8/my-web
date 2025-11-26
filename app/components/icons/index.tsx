import React from 'react';

type SvgProps = React.SVGProps<SVGSVGElement>;

export function CurlyLoopIcon({
    width = 22,
    height = 43,
    stroke = '#6E6E6E',
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

