import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Images } from '../../assets';

import './index.scss';

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="site-branding">
                    <div className="logo">
                        <img src={Images.logo} alt={''} />
                    </div>
                    <DropdownButton id="dropdown-basic-button" title="Mega Menu">
                        <Dropdown.Item href="#/action-1">Mega Menu</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Mega Menu</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Mega Menu</Dropdown.Item>
                    </DropdownButton>
                    <div className="search">
                        <input placeholder={'Search'} />
                        <img src={Images.search} alt={''} />
                    </div>

                </div>
                <div className="shortcuts">
                    <div className="shortcut">
                        <img src={Images.search} alt={''} />
                    </div>
                    <div className="shortcut">
                        <img src={Images.settings} alt={''} />
                    </div>
                    <div className="shortcut">
                        <div className="alerts">
                            <img src={Images.alert} alt={''} />
                            <div className="alert-count">2</div>
                        </div>

                    </div>
                    <div className="shortcut user">
                        <img src={Images.user} alt={''} />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
