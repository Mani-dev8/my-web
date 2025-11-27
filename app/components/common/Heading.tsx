import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
    className?: string
}

function Heading({ children, className }: Props) {
    return (
        <h2 className={`text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight text-center ${className}`}>
            {children}
        </h2>
    )
}

export default Heading