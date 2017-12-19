import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class Registrarse extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div>
                <h1>
                    Solo registrate y listo!
               </h1>
                <FacebookLogin
                    appId="2056781411221828"
                    autoLoad={false}
                    fields="name,email,picture"
                    ref={this}
                    textButton={"Registrate con facebook"}
                    cssClass={"waves-effect waves-light btn-large blue darken-1"}
                    callback={(res) => responseFacebook(res, this)} />
            </div>
        )
    }
}

const responseFacebook = (user, ref) => {
    // console.log(user)
    ref.props.axios.post(`http://${window.location.hostname}:5000/api/inscribe`, {
        user: user
    }).then(res => {
        // console.log(res)
        ref.props.setUser(user)
        res.status === 200 ? ref.props.registrar() : ""
    })
}

export default Registrarse