import React from 'react'
import MoreInfo from '../../Components/MoreInfo'
import PosterInfo from '../../Components/PosterInfo'
import styles from "./information.module.scss"

type Props = {}

function InformationPage({ }: Props) {
    return (
        <div>
            <PosterInfo />
            <MoreInfo />
        </div>
    )
}

export default InformationPage