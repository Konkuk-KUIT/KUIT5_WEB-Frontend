import React, { useState } from 'react'
import styled from "styled-components"
import {CardInner,CardFront,CardBack} from './CardStyle.jsx'


const Card = ({ src, alt, flipped, onClick }) => {

    return (
            <CardInner $flipped={flipped} onClick={onClick}>
                <CardFront/>
                <CardBack>
                    <img src={src} alt={alt} />
                </CardBack>
            </CardInner>
    )
}

export default Card
