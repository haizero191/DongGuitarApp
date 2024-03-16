import React from 'react';
import "./SectionView.scss";


const SectionView = ({img, title}) => {
  return (
    <div className='SectionView'>
        <div className='image'>
            <img src={img}/>
        </div>
        <div className='action-button'>
            <div className='title'>
                <p>{title}</p>
            </div>
            <p className='view-text'>Xem ngay</p>
        </div>
    </div>
  )
}

export default SectionView