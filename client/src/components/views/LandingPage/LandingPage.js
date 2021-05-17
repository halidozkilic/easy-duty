import React from 'react'
import { FaCode } from "react-icons/fa";

function LandingPage() {
    return (
        <>
            <div className="app">
                <FaCode style={{ fontSize: '4rem' }} /><br />
                <span style={{ fontSize: '2rem' }}>Welcome To Easy Duty App!</span>
            </div>
            <div style={{ float: 'right' }}>Thanks For Using This app by Halid Özkılıç</div>
        </>
    )
}

export default LandingPage
