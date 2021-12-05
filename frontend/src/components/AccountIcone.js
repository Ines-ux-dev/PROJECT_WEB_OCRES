import React, { Component } from 'react';
import '../accounticon.css'
import axios from 'axios';
import { MdAccountCircle } from "react-icons/md";

export class AccountIcone extends Component {

    state = {
        users: []
    }
    componentDidMount() {
        axios.get('http://localhost:5500/users')
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })
    }
    render() {
        return (
            <div>
                {this.state.users.map(users =>

                    <div>
                        <div class="buttonAccount">
                            <button className="accountData" onClick={() => { this.setState({ BackgroundColor: "PURPLE" }) }}>
                                <MdAccountCircle size="40px" />
                            </button>
                        </div>



                        <div className="dataAccount" >
                            <div className="compte">Compte Google</div>
                            <div>{users.firstname} {users.lastname}</div>
                            <div>{users.email}</div>
                        </div>
                    </div>

                )}
            </div>

        )
    }
}