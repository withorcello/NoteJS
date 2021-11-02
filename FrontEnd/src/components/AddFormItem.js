import React from 'react'

class AddFormItem extends React.Component {
    state = {
        nameCamp: "",
        typeCamp: "",
    }
    render() {
        const { onEditForm } = this.props
        const { nameCamp, typeCamp } = this.state
        return (
            <div>
                <div className="new-note">
                    <input type="text" className="new-note_input" placeholder="Digite aqui o nome no campo."
                        value={nameCamp}
                        onChange={event => {
                            this.setState({
                                nameCamp: event.target.value
                            })
                        }}
                    ></input>
                </div>
                <div className="dropdown">
                    <div className="btn dropdown-toggle new-note_dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                        {typeCamp}
                    </div>
                    <div className="dropdown-menu" value="teste">
                        <div className="dropdown-item"
                            onClick={
                                event => {
                                    this.setState({
                                        typeCamp: "Texto"
                                    })
                                }
                            }>Texto</div>
                        <div className="dropdown-item"
                            onClick={
                                event => {
                                    this.setState({
                                        typeCamp: "Email"
                                    })
                                }
                            }>Email</div>
                        <div className="dropdown-item"
                            onClick={
                                event => {
                                    this.setState({
                                        typeCamp: "Data"
                                    })
                                }
                            }>Data</div>
                    </div>
                </div>
                <div className="new-note_div">
                    <button className="new-note_button"
                        onClick={
                            () => {
                                onEditForm(this.state.nameCamp, this.state.typeCamp)
                                this.setState({
                                    nameCamp: "",
                                    typeCamp: ""
                                })
                            }
                        }
                    >Adicionar</button>
                </div>
            </div>
        )
    }
}

export default AddFormItem