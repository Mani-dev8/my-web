import React from 'react'

type Props = {
  title: string
}

function SectionTitle({ title }: Props) {
  return (
    <span className='rounded-full border border-zinc-300 px-5 py-2 font-medium md:font-semibold md:text-sm lg:text-base text-xs text-zinc-950 uppercase'>{title}</span>
  )
}

export default SectionTitle
