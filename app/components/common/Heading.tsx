import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
    className?: string
}

function Heading({ children, className }: Props) {
    return (
        <h2 className={`text-[28px] md:text-3xl font-bold text-gray-900 mb-4 tracking-tight leading-tight text-center ${className}`}>
            {children}
        </h2>
    )
}

export default Heading