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
            <div className="accounts">
                {this.state.users.map(users =>
                    <div>
                        <button className="buttonAccount" onClick={() => { this.setState({ BackgroundColor: "PURPLE" }) }}>
                            <MdAccountCircle color="white" size="40px" />
                        </button>

                        <div className="dataAccount" >
                            <div className="compte">Compte Google</div>
                            <div className="infoUser">
                                {users.firstname} {users.lastname}<br></br>
                                {users.email}
                            </div>
                        </div>


                    </div>

                )
                }
            </div>

        )
    }
}