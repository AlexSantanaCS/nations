import React, { Component } from 'react';

import { Card, CountryPicker, Popup, NavBar, Map, About } from './components';
import { fetchData } from './api';
import 'tachyons';
import axios from 'axios';


const url = 'https://restcountries.eu/rest/v2/name/';

class App extends Component {
    state = {
        selected: [],
        country: [],
        search: '',
        route: 'close',
    }

    async componentDidMount() {
        const data = await fetchData();
        this.setState({country: data});
        
        
    }

    onAbout = () => {
        this.setState({route: 'about'});
        console.log(this.state.route)
    }

    openPopUp = (name) => {
        axios(url + name).then(({ data }) => {

       
            let result = data;
            // console.log(data)
            // console.log({name});
      
         
      
            this.setState({selected: result[0]});
            this.setState({route: 'open'})
            // console.log(result);
        })
    }

    closeButton = () =>{
        this.setState({route: 'close'})
    }
    
    onSearch = (event) => {
        this.setState({search: event.target.value })
        console.log(this.state.search)
    }

    onEnter = () => {
        this.openPopUp(this.state.search);
    }




    render() {
        const filterCountries = this.state.country.filter(country =>{
            return country.name.toLowerCase().includes(this.state.search.toLowerCase());
        })
        return(
            <div>
                <NavBar about={this.onAbout} closeButton={this.closeButton}/>
                {this.state.route === 'about'
                ? <div>
                    <About />
                </div>
                : null
                }
                
                {this.state.route === 'open'
                ? <div>
                    <Popup selected={this.state.selected} closeButton={this.closeButton} />
                </div>
                : (
                    <div>
                   <CountryPicker onSearch={this.onSearch} onEnter={this.onEnter} />
                 
                    <Card country={filterCountries} openPopUp={this.openPopUp} selected={this.state.selected} />
                    </div>
                )
                }
               
                
                
            </div>
        )
    }

}

export default App;






















// import React, { Component } from 'react';

// import { Card, CountryPicker, Popup } from './components';
// import { fetchData } from './api';
// import 'tachyons';

// class App extends Component {
//     state = {
//         selected: "hello",
//     }

//     async componentDidMount() {
//         const data = await fetchData();
//         console.log(data);
//     }

//     openPopUp = () => {
//         this.setState({selected: "lol"});
//     }
    




//     render() {
//         return(
//             <div>
//                 {this.state.selected === 'lol'
//                 ? <div>
//                     <Popup />
//                 </div>
//                 : (
//                     null
//                 )
                
                
                
//                 }
//                 <Card openPopUp={this.openPopUp} />
//                 <CountryPicker />
//             </div>
//         )
//     }

// }

// export default App;
