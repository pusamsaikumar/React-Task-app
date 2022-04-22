import React from "react";
import TableD from "./TableD";


class TableC extends React.Component{
    constructor(){
        super();
        this.employes=['SAI','TEJA','MADHU','HARSHA','NAVINA','SWETIKA'];
        
        this.state={
            employesList:[
                {
                    "id":1,
                    "name":"SAI",
                    "email":"sai@gmail.com",
                    "age":26,
                    "city":'Bhadrachalam'
                },
           
                {
                    "id":2,
                    "name":"TEJA",
                    "email":"teja@gmail.com",
                    "age":24,
                    "city":'Gudiwada'
                },
                {
                    "id":3,
                    "name":"MADHU",
                    "email":"madhu@gmail.com",
                    "age":29,
                    "city":'Karimnagar'
                },
                {
                    "id":4,
                    "name":"HARSHA",
                    "email":"harsha@gmail.com",
                    "age":26,
                    "city":'vijayawada'
                },
                {
                    "id":5,
                    "name":"NAVINA",
                    "email":"navina@gmail.com",
                    "age":29,
                    "city":'Kerla'
                 },
                {
                    "id":6,
                    "name":"SWETIKA",
                    "email":"swetika@gmail.com",
                    "age":24,
                    "city":'Odisha'
                }
            
        ]
       

        }
    }
    render(){
        return(
            <div>
             
                <h2 className="headers">Employes Deatils Table</h2>
                <TableD headers={['id','name','email','age','city']} data={this.state.employesList} />
           
                
            </div>
        );
    }
}

export default TableC;