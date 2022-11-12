import React from 'react';
import './dash-sidebar.css';
// import {Timeline, LineStyle, TrendingUp, PersonOutline, Storefront, Paid, Report,Assessment, AttachEmailOutlined, ForumOutlined, Textsms, WorkOutlineRounded} from '@material-ui/icons';
import { Timeline, LineStyle, TrendingUp, PersonOutline, Storefront, AccountBala, } from '@material-ui/icons';


export default function DashSidebar() {
    return (
        <div className='sidebar-dash'>
            <div className='sidebar-wrapper'>
                <div className='sidebar-menu'>
                    <h3 className='sidebar-title'>Dashboard</h3>
                    <ul className='sidebar-list'>
                        <li className='sidebar-list-item active'>
                            <LineStyle className='sidebar-icon' />
                            Home
                        </li>
                        <li className='sidebar-list-item'>
                            <Timeline className='sidebar-icon' />
                            Analytics
                        </li>
                        <li className='sidebar-list-item'>
                            <TrendingUp className='sidebar-icon' />
                            Sales
                        </li>
                    </ul>

                    <h3 className='sidebar-title'>Quick Menu</h3>
                    <ul className='sidebar-list'>
                        <li className='sidebar-list-item'>
                            {/* <PersonOutline className='sidebar-icon' /> */}
                            User
                        </li>
                        <li className='sidebar-list-item'>
                            {/* <Storefront className='sidebar-icon' /> */}
                            Products
                        </li>
                        <li className='sidebar-list-item'>
                            {/* <AccountBala className='sidebar-icon' /> */}
                            Transactions
                        </li>
                        <li className='sidebar-list-item'>
                            {/* <Assessment className='sidebar-icon' /> */}
                            Reports
                        </li>
                    </ul>

                    <h3 className='sidebar-title'>Notifications</h3>
                    <ul className='sidebar-list'>
                        <li className='sidebar-list-item'>
                            {/* <AttachEmailOutlined className='sidebar-icon' /> */}
                            Mail
                        </li>
                        <li className='sidebar-list-item'>
                            {/* <ForumOutlined className='sidebar-icon' /> */}
                            Feedback
                        </li>
                        <li className='sidebar-list-item'>
                            {/* <Textsms className='sidebar-icon' /> */}
                            Messenger
                        </li>
                    </ul>

                    <h3 className='sidebar-title'>Dashboard</h3>
                    <ul className='sidebar-list'>
                        <li className='sidebar-list-item'>
                            {/* <WorkOutlineRounded className='sidebar-icon' /> */}
                            Manage
                        </li>
                        <li className='sidebar-list-item'>
                            {/* <Timeline className='sidebar-icon' /> */}
                            Analytics
                        </li>
                        <li className='sidebar-list-item'>
                            {/* <Report className='sidebar-icon' /> */}
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
