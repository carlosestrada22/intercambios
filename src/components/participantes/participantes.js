import React, { Component } from 'react';
import './participantes.css'
import Resultados from '../resultados/resultados.js'

class Participantes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Participantes: [],
            Resultados: [],
            Regalado: {}
        }
    }

    componentDidMount() {
        this.props.axios.get(`http://${window.location.hostname}:5000/api/participants`)
            .then(res => {
                this.setState({ Participantes: res.data })
            })

        this.props.axios.get(`http://${window.location.hostname}:5000/api/resultados?id=${this.props.user.id}`)
            .then(res => this.setState({ Regalado: res.data }))
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="container">
                <h4>¡Listo!</h4>
                <p>Ya entraste al intercambio</p>
                <strong>Costo: $50.00</strong>
                {/* <Exito /> */}
                <div>
                    <h3>Participantes:</h3>
                </div>
                <div className="list-participantes">
                    {
                        this.state.Participantes.length > 0 ? this.state.Participantes.map((participante, i) => {
                            return <Participante key={i} user={participante} />

                        }
                        ) : ""
                    }
                    <Resultados user={this.state.Regalado} />
                </div>
            </div>

        )
    }
}


const Participante = ({ user }) => {
    return (
        <div className="participante hoverable">
            <div className="col s4 m3 offset-m2 l1 offset-l3">
                <div className="card-panel grey lighten-5 z-depth-1">
                    <div className="row valign-wrapper">
                        <div className="col s2">
                            <img src={user.picture ? user.picture.data.url : ""} alt="profile-pic" className="circle responsive-img" />
                        </div>
                        <div className="col s10">
                            <span className="black-text" onClick={() => window.open(`https://www.facebook.com/${user.id}`, '_blank')}>
                                <a href="#!">
                                    {user.name}
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Participantes