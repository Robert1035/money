import React, { Component } from 'react';
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            users: [
                {name: 'Коля', surname: 'Иванов', day:20, money:50},
                {name: 'Вася', surname: 'Петров', day:15,money:60},
                {name: 'Петя', surname: 'Сидоров', day:25, money:70},
            ]
        };
    }



    render() {
        const user = this.state.users.map((item,index) =>{
            return <table key={index}>
                <tr>
                    <th>name {item.name}</th>
                    <th>surname {item.surname}</th>
                    <th>day {item.day}</th>
                    <th> money{item.money}</th>
                    <p>{item.day*item.money}$</p>
                </tr>
            </table>
        });

        return <div>
            {console.log(this.state)}
            {user}
        </div>
    }
}

export default App;
