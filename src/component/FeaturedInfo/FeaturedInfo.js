import React from 'react'
import './featured-info.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export default function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className='featured-item'>
                <span className='featured-title'>Revalue</span>
                <div className='featured-mony-container'>
                    <span className='featured-mony'>$2,415</span>
                    <span className='featured-mony-rate'>-11,4 <ArrowDownward className='feature-icon negative'/></span>
                </div>
                <span className='featured-sub'>Compared to last month</span>
            </div>

            <div className='featured-item'>
                <span className='featured-title'>Sale</span>
                <div className='featured-mony-container'>
                    <span className='featured-mony'>$4,415</span>
                    <span className='featured-mony-rate'>-1,4 <ArrowDownward className='feature-icon negative'/></span>
                </div>
                <span className='featured-sub'>Compared to last month</span>
            </div>

            <div className='featured-item'>
                <span className='featured-title'>Cost</span>
                <div className='featured-mony-container'>
                    <span className='featured-mony'>$2,224</span>
                    <span className='featured-mony-rate'>+2,4 <ArrowUpward className='feature-icon'/></span>
                </div>
                <span className='featured-sub'>Compared to last month</span>
            </div>
        </div>
    )
}
