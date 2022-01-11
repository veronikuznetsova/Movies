import React, { useState } from "react";
import Tab from "./components/Tab";
import './index.css';
import Star from '../../../../images/star.svg';
import Heart from '../../../../images/heart.svg';
import { NavLink } from "react-router-dom";

const Tabs = (props) => {

    return(
        <div className='tabs'>
            <NavLink to='./main' className='link'><Tab src={Star} title='POPULAR'/></NavLink>
            <NavLink to='./favourite' className='link'><Tab src={Heart} title='FAVORITES' /></NavLink>
        </div>
    )
}

export default Tabs;