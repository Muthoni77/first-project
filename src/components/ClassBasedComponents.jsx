import React, { Component } from "react";
import { render } from "react-dom";

class ClassBasedComponents extends Component {

    state = {
        FormData: {
            name: "",
            age: 0
        },
        finalFormData: {}
    };

    handleNameChange = (event) => {

        const { value } = event.target;
        this.setState(prevState => ({
            FormData: {
                ...prevState.FormData,
                name: value
            }
        }))
    }
    handleAgeChange = (event) => {
        const { value } = event.target;
        this.setState(prevState => ({
            FormData: {
                ...prevState.FormData,
                age: value
            }
        }))
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const { FormData } = this.state
        this.setState(prevState => ({
            ...prevState,
            finalFormData: {
                ...prevState.finalFormData,
                ...FormData
            },
FormData: {
    name: "",
    age: 0
}
        }))

    }

    render() {
        console.log(this.state);
        return (
            <div>

                <form onSubmit={this.handleSubmit} >
                    <input name="name" placeholder="name" type={"text"} value={this.state.FormData.name} onChange={this.handleNameChange} />
                    <input name="age" placeholder="age" type={"number"} value={this.state.FormData.age} onChange={this.handleAgeChange} />

                    <button type="submit" aria-label="submit">Submit</button>
                </form>

                {
                    this.state.finalFormData && Object.keys(this.state.finalFormData).length > 0 && (
                        <p>
                            final data is {this.state.finalFormData.name} and {this.state.finalFormData.age}
                        </p>
                    )
                }



            </div>

        );
    }


}

export default ClassBasedComponents;