import React from 'react';
import './search-bar.css';

export default function SearchBar() {

    return (
        <>
            <div className='search--container'>
                <form action='#' className='search--form'>
                    <input type="text" placeholder='Key Word' className='search--select' />
                    <select className='search--select'>
                        <option value='section'>section</option>
                        <option value='section'>Argentina</option>
                        <option value='section'>Asia</option>
                        <option value='section'>Africa</option>
                        <option value='section'>America</option>
                        <option value='section'>South America</option>
                        <option value='section'>Europe</option>
                        <option value='section'>Eastern Europe </option>
                        <option value='section'>Spanish</option>
                    </select>

                    <select className='search--select'>
                        <option value="section">Labels</option>
                        <option value="section">Awesome offer</option>
                        <option value='section'>City tour</option>
                        <option value='section'>One day tour </option>
                        <option value='section'>High Holiday Tour </option>
                        <option value='section'>Seasonal Vacation Tour </option>
                        <option value='section'>Recreation tour</option>
                        <option value='section'>Family and friendly tour </option>
                        <option value='section'>cultural and thematic tours </option>
                        <option value='section'>Luxury tours</option>
                        <option value='section'>Adventure Tours </option>
                        <option value='section'>Outdoor Tours </option>
                    </select>

                    <select className='search--select'>
                        <option value='section'>section</option>
                        <option value='section'>1 Day</option>
                        <option value='section'>2-4 Day</option>
                        <option value='section'>5-7 Day</option>
                        <option value='section'>7+ Day</option>
                    </select>

                    <input type="date"  className='search--select'/>

                    <input type='submit' value='search'  className='search--button'/>
                </form>
            </div>
        </>
    )
}
