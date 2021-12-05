import '../navigation.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import React from 'react';
import { Component } from 'react';
import { Link } from "react-router-dom";

export class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar" >
                <div className="sidebarWrapper">
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">
                            Art Institute of Chicago
                        </h3>
                        <ul className="sidebarList">
                            <Link to='/'>
                                <li className="sidebarListItem">
                                    <DashboardIcon className="sidebarIcon" />
                                    Dashboard
                                </li>
                            </Link>
                            <Link to='/Settings'>
                                <li className="sidebarListItem">
                                    <AdminPanelSettingsIcon className="sidebarIcon" />
                                    Settings
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }

}