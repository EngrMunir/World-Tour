import { useState } from 'react';
import './Country.css';

const Country = ({country}) => {
    const {name, flags, population, area, cca3}=country;
    const [visited, setVisited] = useState(false);

    const handleVisited =()=>{
        setVisited(!visited)
    }

    return (
        <div className='country'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h2>Population: {population}</h2>
            <h2>Area: {area}</h2>
            <h2>Code: {cca3}</h2>
            <button onClick={handleVisited}>Visited</button>
            {
                visited ? 'I have visited this country': 'I want to visit'
            }

        </div>
    );
};

export default Country;