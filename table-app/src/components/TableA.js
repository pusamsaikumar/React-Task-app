import React from "react";
import TableB from "./TableB";

class TableA extends React.Component{
    constructor(){
        super();
        this.players=['Sachin','Dhoni'];
        this.heros=['Ameer','Prabhas'];
        this.state={
            playersList:[
                {
                "name":"Sachin",
                "runs":20000,
                "loc":"mumbai"
            },
            {
                "name":"Dhoni",
                "runs":10000,
                "loc":"RANCHI"  
            }
        ],
        herosList:[{
            "name":"Ameer",
            "movies":25
        },
        {
            "name":"Prabhas",
            "movies":25
        }
        ]

        }
    }
    render(){
        return(
            <div>
             
                <h2 className="headers">Players Table</h2>
                <TableB headers={['name','runs','loc']} data={this.state.playersList} />
           
                <h2 className="headers">Heros Table</h2>
                <TableB headers={['name','movies']} data={this.state.herosList} />
            </div>
        );
    }
}

export default TableA;