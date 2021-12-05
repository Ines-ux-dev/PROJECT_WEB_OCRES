import React from 'react';
import AddEvent from './components/AddEvent';
import DelEvent from './components/DelEvent';
import DisplayEvent from './components/DisplayEvent';
import AddCitation from './components/AddCitation';
import DelCitation from './components/DelCitation';
import DisplayCitation from './components/DisplayCitation';

function Api() {
    return (
        <div>
            <h1>Settings</h1>
            <AddEvent />
            <DelEvent />
            <DisplayEvent />
        </div>
    )
}

export default Api;