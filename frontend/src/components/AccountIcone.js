import React, { Component } from 'react';


export class AccountIcone extends Component {
    render() {
        return (
            <div>
                <div class="buttonAccount">
                    <button className="accountData">
                        <img class="initial" src="https://lh3.googleusercontent.com/ogw/ADea4I7MODyPj5JDi34tINSyblaAsRaU6iskYSs4A_E1=s32-c-mo" alt=" ">
                        </img>
                    </button>

                </div>
                <span className="dataAccount">
                    <div className="compte">Compte DANSE</div>
                    <div>Nathalie OUCOR</div>
                    <p>nathalie.oucor@danse.fr</p>

                </span>
            </div>
        )
    }
}