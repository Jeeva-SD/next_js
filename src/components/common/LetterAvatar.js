import React from 'react'
import { getRandomColor } from '../../helper'

const LetterAvatar = ({ char }) => {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100px', fontSize: '40px', fontWeight: 'bolder', color: getRandomColor() }}>
            {char}
        </div>
    )
}

export default LetterAvatar