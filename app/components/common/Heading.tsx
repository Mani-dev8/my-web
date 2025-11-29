import { cn } from '@/lib/cn'
import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
    className?: string
}

function Heading({ children, className }: Props) {
    return (
        <h2 className={cn(`text-[28px] md:text-3xl lg:text-5xl font-medium text-gray-900 mb-4 tracking-tight leading-tight text-center lg:text-start ${className}`)}>
            {children}
        </h2>
    )
}

export default Heading