import React from 'react';

import AddEvent from './components/AddEvent';
import DelEvent from './components/DelEvent';
import DisplayEvent from './components/DisplayEvent';
import AddCitation from './components/AddCitation';
import DelCitation from './components/DelCitation';
import DisplayCitation from './components/DisplayCitation';
import { Sidebar } from './components/Sidebar';
import './App.css';

function Settings() {
    return (
        <div>
            <h1>Settings</h1>
            <Sidebar className="sidebar" />
            <  DisplayCitation />






        </div>
    )
}

export default Settings;