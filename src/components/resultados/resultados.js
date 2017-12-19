import React, { Component } from 'react';
import $ from 'jquery'
import './resultados.css'

class Resultados extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Participantes: []
        }
    }
    

    componentDidMount() {
        console.log("resultados", this.props)
        // Initialize collapsible (uncomment the line below if you use the dropdown variation)
        //$('.collapsible').collapsible();
        // this.props.axios.get(`http://${window.location.hostname}:5000/api/participants`)
        //     .then(res => {
        //         this.setState({ Participantes: res.data })
        //         console.log('participantes', this.state.Participantes)
        //     })
    }

    render() {
        return (
            <div className="sidebar blue lighten-5">
                <div className="row">
                    <h4>Te toca: </h4>
                </div>
                <div className="row">
                    <img className="circle responsive-img img-regalado" src={this.props.user.picture ? this.props.user.picture.data.url : "question.png"} />
                </div>
                <div className="row">
                    <span className="black-text name">{this.props.user.name ? this.props.user.name : "Aún no!"}</span>
                </div>
            </div>
        )
    }
}

export default Resultados
