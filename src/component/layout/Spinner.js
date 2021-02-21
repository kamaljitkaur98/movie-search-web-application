import React from 'react'

function Spinner() {
    return (
        <div className="mr-2">
            <video style={{ width: "200px", margin: "auto", display: "block" }} loop autoPlay muted>
                <source src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Spinner
