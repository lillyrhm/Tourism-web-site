import React from 'react';
import './search-bar.css';

export default function SearchBar() {

    return (
        <>
            <div className='search-button'>
                <form action='#' className='search--form'>
                    <input type="text"/>
                    <select>
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

                    <select>
                        <option value="section">1</option>
                        <option value="section">2</option>
                        <option value='section'>3</option>
                        <option value='section'>4</option>
                        <option value='section'>5</option>
                        <option value='section'>6</option>
                        <option value='section'>7</option>
                        <option value='section'>8</option>
                        <option value='section'>9</option>
                        <option value='section'>10</option>
                        <option value='section'>11</option>
                        <option value='section'>12</option>
                    </select>

                    <select>
                        <option value='section'>section</option>
                        <option value='section'>1 Day</option>
                        <option value='section'>2-4 Day</option>
                        <option value='section'>5-7 Day</option>
                        <option value='section'>7+ Day</option>
                    </select>

                    <input type="date" />

                    <input type='submit' value='submit' />
                </form>
            </div>
        </>
    )
}
