import React from 'react'
import icon_main_1 from '../assets/icon_main_1.png'
import icon_main_2 from '../assets/icon_main_2.png'
import icon_main_3 from '../assets/icon_main_3.png'
import icon_main_4 from '../assets/icon_main_4.png'
import icon_main_5 from '../assets/icon_main_5.png'
import icon_main_6 from '../assets/icon_main_6.png'
import icon_main_7 from '../assets/icon_main_7.png'
import icon_main_8 from '../assets/icon_main_8.png'


function Tabs() {
    return (
        <div className='tab-container'>
            <div className='tabs-section'>
             <img src={icon_main_1} alt=""/>
             <p className='heading'>Main 1</p>
            </div>
            <div className='tabs-section'>
             <img src={icon_main_2} alt=""/>
             <p className='heading-2'>Main 2</p>
            </div>
            <div className='tabs-section'>
             <img src={icon_main_3} alt=""/>
             <p className='heading'>Main 3</p>
            </div>
            <div className='tabs-section'>
             <img src={icon_main_4} alt=""/>
             <p className='heading'>Main 4</p>
            </div>
            <div className='tabs-section-5'>
             <img src={icon_main_5} alt=""/>
             <p className='heading-5'>Main 5</p>
            </div>
            <div className='tabs-section'>
             <img src={icon_main_6} alt=""/>
             <p className='heading'>Main 6</p>
            </div>
            <div className='tabs-section'>
             <img src={icon_main_7} alt=""/>
             <p className='heading-7'>Main 7</p>
            </div>
            <div className='tabs-section'>
             <img src={icon_main_8} alt=""/>
             <p className='heading-8'>Main 8</p>
            </div>
            <div className='tabs-section'>
            <span className='main-8-dropdown'><i class="fas fa-sort-down"></i></span>
            </div>
        </div>
    )
}

export default Tabs
