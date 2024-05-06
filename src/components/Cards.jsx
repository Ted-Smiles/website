import { useState } from "react"
import Card from "./Card"

const Cards = () => {

    const [filter, setFilter] = useState('')

    const handleClick = (e) => {
        setFilter(e.target.innerText)
    }

    const exampleData = [{
        itemUrl: '../src/images/D5B133B8-F521-4435-A72A-C16A4D9BC580.png',
        description: 'Nellie on her favourite chair',
        tag: 'PETS'
    }, {
        itemUrl: '../src/images/8855DC8C-521E-4425-9644-56E6AE3CB352_1_201_a-removebg-preview.png',
        description: 'Nice flowers',
        tag: 'FLOWERS'
    } ,{
        itemUrl: '../src/images/BCFAC05B-4784-4E01-B871-F7AD5C012418.jpeg',
        description: 'Some boats',
        tag: 'LANDSCAPES'
    } ,{
        itemUrl: '../src/images/40B6CF4E-EBD9-47DC-8E72-29A1A0B65A25.jpeg',
        description: 'Definitely not Nellie again',
        tag: 'PETS'
    }]
    return (
        <>
            <div className="filters">
                <button className="filter" onClick={handleClick}>PETS</button>
                <button className="filter" onClick={handleClick}>FLOWERS</button>
                <button className="filter" onClick={handleClick}>LANDSCAPES</button>
            </div>
            <div className="cards-container">
                <Card cardsData={exampleData} filter={filter}/>
            </div>
        </>
    )
}

export default Cards