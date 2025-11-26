import React from 'react'
import FadedCircle from '../FadedCircle'
import ElevatedIcon from '../common/ElevatedIcon'
import CTAButton from '../CTAButton'
import { CurlyLoopIcon } from '../icons'
import Image from 'next/image'

type Props = {}


function HeroSection({ }: Props) {
    return (
        <section className="relative h-screen flex flex-col space-y-4 items-center justify-center text-center">
            <h1 className='text-4xl font-semibold text-center max-w-md'>Where <ElevatedIcon size={74} /> Design Meets Digital <span className="text-primary">Growth</span>.</h1>
            <p className='text-zinc-500 max-w-96 '>
                We Craft Compelling Stories Through Stunning Visuals, Creative Design, and Engaging Content That Captivate Audiences and Inspire Action.
            </p>
            <CurlyLoopIcon className='top-[-20%] right-[20%] absolute' />
            <CTAButton title='Let’s Connect' />
            <FadedCircle position={{ top: '-5%', left: '10%' }} size={200} />
            <FadedCircle position={{ bottom: '-10%', right: '-20%' }} size={500} color={{ from: 'rgba(114, 39, 219, 0.6)', to: 'rgba(114, 39, 219, 0.2)' }} />
            <Image alt='hero1 image' height={90} width={180} className='h-48 w-56 object-cover rotate-15 rounded-lg overflow-hidden border absolute -bottom-10 -left-10' src={'/home/hero1.png'} />
            <Image alt='hero1 image' height={90} width={180} className='h-48 w-56 object-cover -rotate-15 rounded-lg overflow-hidden border absolute -bottom-10 -right-10' src={'/home/hero2.png'} />
        </section>
    )
}

export default HeroSection
