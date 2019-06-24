import React, { Component } from 'react';
import Table from "./Table"
import Form from "./Form"

class App extends Component {

    state = {
        characters: [],
    }

    removeCharacter = index => {
        const { characters } = this.state
        
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] })
    }

    render(){
        return (
            <div className="container">
            <h1>All Submissions</h1>
            <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
            <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
    //SETTING A STATE
    // state = {
    //     characters: [
    //         {
    //             name: 'Charlie',
    //             job: 'Janitor',
    //         },
    //         {
    //             name: 'Mac',
    //             job: 'Bouncer',
    //         },
    //         {
    //             name: 'Dee',
    //             job: 'Aspring actress',
    //         },
    //         {
    //             name: 'Dennis',
    //             job: 'Bartender',
    //         },
    //         ]
    // }
    // removeCharacter = index => {
    //     const { characters } = this.state
        
    //     this.setState({
    //         characters: characters.filter((character, i) => {
    //             return i !== index
    //         }),
    //     })
    // }
    // render() {
    //     return (
    //         <div className="container">
    //             <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
    //         </div>
    //         )
    //     }
        



    //STATE-LESS
    // render() {
    //     const characters = [
    //         {
    //             name: 'Charlie',
    //             job: 'Janitor',
    //         },
    //         {
    //             name: 'Mac',
    //             job: 'Bouncer',
    //         },
    //         {
    //             name: 'Dee',
    //             job: 'Aspring actress',
    //         },
    //         {
    //             name: 'Dennis',
    //             job: 'Bartender',
    //         },
    //         ]
    //   return (
    //     <div className="container">
    //       <Table characterData={ characters }/>
    //     </div>
    //   )
    // }
  }

  export default App