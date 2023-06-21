import React from 'react'

function Loading() {
    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: "1000"
        }}>
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}>
                <img src="/image/gg.gif" alt='' />
            </div>
        </div>
    )
}

export default Loading