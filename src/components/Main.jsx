import { Link } from "react-router-dom"

const Main = () => {



    return (
        <div className="main">
            <div className="main-title">
                <h1>Lorraine Penchion</h1>
                <h3>WATERCOLOUR ARTIST</h3>
            </div>
            <div>
                <button >
                    <Link to="/gallery">GALLERY</Link>
                </button>
            </div>
        </div>
    )
}

export default Main