import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {}

function Heading({ children }: Props) {
    return (
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 tracking-tight text-center">
            {children}
        </h2>
    )
}

export default Heading