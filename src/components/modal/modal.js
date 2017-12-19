import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        let $ = this.props.$

        if (this.props.mostrar) {
            $('#modal-inicio').modal();
            $(document).ready(function () {
                $('#modal-inicio').modal('open');
            });
        }
    }
    componentWillUpdate() {
        let $ = this.props.$

        if (this.props.mostrar) {
            $('#modal-inicio').modal();
            $(document).ready(function () {
                $('#modal-inicio').modal('open');
            });
        }
    }
    render() {
        return (
            <div>
                <div id="modal-inicio" className="modal modal-fixed-footer">
                    <div className="modal-content">
                        <h4>¡Listo!</h4>
                        <p>Ya entraste al intercambio</p>
                        <strong>Costo: $50.00</strong>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Disagree</a>
                        <a href="#!" onClick={() => this.props.Iniciar(this.props.referencia, 0)} className="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
                    </div>
                </div>
            </div>

        )
    }
}

export default Modal