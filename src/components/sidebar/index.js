import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Images } from '../../assets';

import './index.scss';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebar: true
        }
    }

    navigateSideBar = () => {
        this.setState({ sidebar: !this.state.sidebar })
    }

    render() {
        return (
            <div className="Sidebar">
                <NavLink exact to={`/`} className="navlink" activeClassName="activeNavlink"><div className="arrow"></div><img src={Images.dashboard} alt={''} />Dashboard</NavLink>
                <NavLink to={`/ui-kits`} className="navlink" activeClassName="activeNavlink"><div className="arrow"></div><img src={Images.kits} alt={''} />Ui kits</NavLink>
                <NavLink to={`/apps`} className="navlink" activeClassName="activeNavlink"><div className="arrow"></div><img src={Images.apps} alt={''} />Apps</NavLink>
                <NavLink to={`/forms`} className="navlink" activeClassName="activeNavlink"><div className="arrow"></div><div className="arrow"></div><img src={Images.forms} alt={''} />Forms</NavLink>
                <NavLink to={`/data-table`} className="navlink" activeClassName="activeNavlink"><div className="arrow"></div><img src={Images.dataTables} alt={''} />Data Tables</NavLink>
                <NavLink to={`/session`} className="navlink" activeClassName="activeNavlink"><div className="arrow"></div><img src={Images.session} alt={''} />Sessions</NavLink>
                <NavLink to={`/page`} className="navlink" activeClassName="activeNavlink"><div className="arrow"></div><img src={Images.page} alt={''} />Page</NavLink>
                <NavLink to={`/icons`} className="navlink" activeClassName="activeNavlink"><div className="arrow"></div><img src={Images.icon} alt={''} />Icons</NavLink>
                <NavLink to={`/other`} className="navlink" activeClassName="activeNavlink"><div className="arrow"></div><img src={Images.other} alt={''} />Other</NavLink>
                <NavLink to={`/doc`} className="navlink" activeClassName="activeNavlink"><div className="arrow"></div><img src={Images.doc} alt={''} />Doc</NavLink>
            </div>
        );
    }
}

export default Sidebar;
