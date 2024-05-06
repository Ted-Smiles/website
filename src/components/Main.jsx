import { Link } from "react-router-dom"

const Main = () => {



    return (
        <div className="main">
            <div className="main-title">
                <h1>Lorraine Penchion</h1>
                <h3>WATERCOLOUR ARTIST</h3>
            </div>
            <img id="leaf" src="../src/images/ADA88349-FCC2-48FD-8524-0A1B9D1E3119.png" />
            <img id="leaves" src="../src/images/D089D2A1-5D61-4EE9-8147-33BDBEAEF4DD.png" />
            <img id="flower" src="../src/images/222518DE-95E2-465B-B8EC-3A6C1C9490CC.png" />
            <div>
                <button >
                    <Link to="/gallery">GALLERY</Link>
                </button>
            </div>
        </div>
    )
}

export default Main