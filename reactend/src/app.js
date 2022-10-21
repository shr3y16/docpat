import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css/normalize.css'
import './styles/styles.scss';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            appointments:[],
            itemToAdd:{
                name:'',
                docname:'',
                apt_desc:'',
                apt_date:'',
                existing_ill:''
            }

        }
        this.fetchAppts = this.fetchAppts.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleDocChange = this.handleDocChange.bind(this);
        // this.handleNameChange = this.handleNameChange.bind(this);
    };

    componentWillMount(){
        this.fetchAppts();
    }

    fetchAppts(){
        fetch('http://127.0.0.1:8000/api/apt-list/')
        .then(response => response.json())
        .then(data => 
            this.setState({
                appointments:data
            })
            )
    }

    // handleNameChange = (e) => {
    //     var name = e.target.value;
    //   //  console.log(name);

    //     this.setState({
    //         itemToAdd:{
    //             ...this.state.itemToAdd,
    //             name
    //         }
    //     })
    // }

    // handleDocChange = (e) => {
    //     var docname = e.target.value;

    //     this.setState({
    //         itemToAdd:{
    //             ...this.state.itemToAdd,
    //             docname
    //         }
    //     })
    // }

    // handleAptDescChange = (e) => {
    //     var apt_desc = e.target.value;

    //     this.setState({
    //         itemToAdd:{
    //             ...this.state.itemToAdd,
    //             apt_desc
    //         }
    //     })
    // }

    // handleAptDateChange = (e) => {
    //     var apt_date = e.target.value;

    //     this.setState({
    //         itemToAdd:{
    //             ...this.state.itemToAdd,
    //             apt_date
    //         }
    //     })
    // }

    // handleExistIllChange = (e) => {
    //     var existing_ill = e.target.value;

    //     this.setState({
    //         itemToAdd:{
    //             ...this.state.itemToAdd,
    //             existing_ill
    //         }
    //     })
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        
        var url = 'http://127.0.0.1:8000/api/apt-create/';

        fetch(url, {
            method:'POST',
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify({patient_name: e.target[0].value, doctor_name: e.target[1].value, apt_description: e.target[2].value, apt_date: e.target[3].value, existing_illness: e.target[4].value})
        }).then((response) => {
            this.fetchAppts()
            this.setState({
                itemToAdd:{
                name:'',
                docname:'',
                apt_desc:'',
                apt_date:'',
                existing_ill:''
            }

            })
        }).catch(function(error){
            console.log("ERRORs",error)
        })
    }

    render() {
        var appts = this.state.appointments;
     
        return (
            <div>
            <h1>Hello Wrld</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleNameChange} placeholder="name" name= "name" id = "name" type = "text"/><br></br>
                    <input onChange={this.handleDocChange} placeholder="docname" name= "docname" id = "docname" type = "text"/><br></br>
                    <input placeholder="apt_desc" name= "apt_desc" id = "apt_desc" type = "text"/><br></br>
                    <input placeholder="apt_date" name= "apt_date" id = "apt_date" type = "text"/><br></br>
                    <input placeholder="existing_ill" name= "existing_ill" id = "existing_ill" type = "text"/><br></br>
                    <input type="submit" value = "submit"></input>
                </form>

                {appts.map((appt, index) => {
                    return(
                        <div key={index} className='asdasdsa'>
                            <span>{appt.patient_name},{appt.doctor_name},{appt.apt_description},{appt.apt_date},{appt.existing_illness}</span>
                        </div>
                    );
                })}
                   
                
                
            </div>
        )
    }
    
}



const appRoot = ReactDOM.createRoot(document.getElementById('app'));
appRoot.render(<App/>);















































































// class OldSyntax {
//     constructor() {
//         this.name = "Mike";
//     }
// }

// const oldSyntax = new OldSyntax();
// console.log(oldSyntax);

// class NewSyntax {
//     name = 'Jen'
//     getGreeting = () => {
//         return `Hi my name is ${this.name}`;
//     }
// }

// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting(); //doesnt break this binding in new syntax
// console.log(newGetGreeting);