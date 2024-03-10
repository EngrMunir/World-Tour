import { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountry,handleVisitedFlags}) => {
    const {name, flags, population, area, cca3}=country;
    const [visited, setVisited] = useState(false);

    const handleVisited =()=>{
        setVisited(!visited)
    }

    return (
        <div className={`country ${visited ? 'visited': 'non-visited'}`}>
            <h2 style={{color: visited? 'Purple':'white'}}>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h2>Population: {population}</h2>
            <h2>Area: {area}</h2>
            <h2>Code: {cca3}</h2>
            <button onClick={()=>handleVisitedCountry(country)}>Mark visited</button>
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited':'Going'}</button>
            {
                visited ? 'I have visited this country': 'I want to visit'
            }

        </div>
    );
};

export default Country;