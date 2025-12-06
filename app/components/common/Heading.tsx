import { cn } from '@/lib/cn'
import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
    className?: string
}

function Heading({ children, className }: Props) {
    return (
        <h2 className={cn(`text-[28px] md:text-3xl lg:text-5xl xl:text-6xl md:font-medium lg:font-normal text-gray-900 mb-4 tracking-tight leading-tight text-center lg:text-start lg:max-w-2xl xl:max-w-3xl ${className}`)}>
            {children}
        </h2>
    )
}

export default Heading