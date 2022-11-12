  import React from 'react';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import '../dashboard.css';
import avatar from '../../../assets/image/photo-1459255418679-d6424da9ee33-700x450.jpg'

export default function Topbar() {
  return (
    <div className='container-page'>
      <section className='top-bar'>
        <div className='top-bar-wrapper'>
          <div className='top-left'>I Am Admin</div>
          <div className='top-right'>
            <div className='top-bar-icon-container'>
              <NotificationsNone />
              <span className='top-icon-badge'>2 </span>
              </div>

            <div className='top-bar-icon-container'>
              <Language />
              <span className='top-icon-badge'>2 </span>
            </div>

            <div className='top-bar-icon-container'>
              <Settings />
            </div>
            <img src={avatar} alt="admin" className='top-avatar' />
          </div>
        </div>
      </section>
    </div>
  )
}
