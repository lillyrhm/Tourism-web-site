import React, { useState } from 'react';
import './search.css';
import { useNavigate } from "react-router-dom";


export default function Search({ placeholder, data, className }) {
    const [filterData, setFilterData] = useState([]);
    const navigate = useNavigate();

    const FilterElement = (event) => {
        const searchWord = event.target.value;

        const filterWord = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilterData([])
        } else {
            setFilterData(filterWord)
        }
    };

    return (
        <div className='search'>
            <div className='search-input'>
                <input type="text" placeholder={placeholder}
                    onClick={FilterElement} className={className}
                />
            </div>

            {filterData.length != 0 && (
                <div className='data-result'>
                    {filterData.slice(0, 10).map((value, key) => {
                        return (
                            <h4 className='data-item' onClick={() => navigate(value.path)}>
                                <p> {value.title} </p>
                            </h4>
                        )
                    }
                    )}
                </div>
            )}
        </div>
    )
}
