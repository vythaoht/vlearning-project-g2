import React from 'react'
import CarouselBanner from '../../Components/CarouselBanner'
import Creators from '../../Components/Creators'
import Sponsors from '../../Components/Sponsors'
import StartUp from '../../Components/StartUp'

type Props = {}

function EventPage({ }: Props) {
    return (
        <div>
            <CarouselBanner />
            <StartUp />
            <Creators />
            <Sponsors />
        </div>
    )
}

export default EventPage