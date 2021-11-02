import React from 'react'

import AppBar from '../components/AppBar'
import NoteService from '../services/NoteService'
import Menu from '../components/Menu'
import About from './About'
import Autentication from './Autentication'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Notes from './Notes'
import axios from 'axios'
import AlterForm from './AlterForm'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.getNotas = this.getNotas.bind(this)
        this.handleEditForm = this.handleEditForm.bind(this)
        this.state = {
            notes: [],
            form: [],
            atributs: [],
            username: '',
            description: '',
            isLoading: false,
            reloadHasError: false,
            saveHasError: false,
            isMenuOpen: false,
            isLog: false,
        }
        this.getNotas()
    }

    getNotas() {
        this.handleGetForm()
        //if (this.state.isLog === true) {
        axios.get("http://localhost:8080/Api")
            .then(resp => {
                const notes = resp.data
                this.setState({ notes: notes })
                console.log(notes)
                notes.map((note) => {
                    const aux = {
                        test: []
                    }
                    const dynamics = note.dynamicFields;
                    for (var [key, value] of Object.entries(dynamics)) if (key !== "table_name" && key !== "id") {
                        aux.test.push({ key, value })
                    }
                    this.state.atributs.push(aux.test)
                }
                )
            })
        // }
    }


    componentDidCatch() {
        this.setState({ reloadHasError: true })
    }

    handleGetForm() {
        axios.get("http://localhost:8080/Api/Form")
            .then(resp => {
                const form = resp.data
                this.setState({ form: form })
            })
    }

    handleEditForm(nameCamp, typeCamp) {
        axios.post(`http://localhost:8080/Api/Form`, { nameCamp, typeCamp })
            .then(resp => {
                this.handleGetForm()
            })
    }

    handleAddNote = (total) => {
        console.log(total)
        const note = {
            note: "",
            ordernotes: 0,
            dynamic: []
        }
        if (total != null) {
            for (var i = 0; i <= total; i++) {
                var name = document.getElementById(i).placeholder
                var value = document.getElementById(i).value
                if (name === "note") {
                    note.note = value
                } else {
                    note.dynamic.push({ name, value })
                }
            }
        }
        this.handleSave(note);
    }

    handleMove = (direction, note) => {
        const id = note.id
        const text = note.note
        const ordem = note.ordernotes
        this.setState(prevState => {
            axios.put(`http://localhost:8080/Api/${direction}/${id}/${text}/${ordem}`)
                .then(resp => {
                    this.getNotas()
                })
        })
    }

    handleDelete = (note) => {
        const id = note.id
        const text = note.note
        const ordem = note.ordernotes
        axios.delete(`http://localhost:8080/Api/${id}/${text}/${ordem}`)
            .then(resp => {
                this.getNotas()
            })
    }

    handleEdit = (note, edit) => {
        const position = "Edit"
        const id = note.id
        const text = edit
        const ordem = note.ordernotes
        this.setState(prevState => {
            axios.put(`http://localhost:8080/Api/${position}/${id}/${text}/${ordem}`)
                .then(resp => {
                    this.getNotas()
                })
        })
    }

    handleReload = () => {
        this.setState({ isLoading: true, reloadHasError: false })
        NoteService.load()
            .then(notes => {
                this.setState({ notes, isLoading: false })
            })
            .catch(() => {
                this.setState({ isLoading: true, reloadHasError: true })
            })

    }

    handleSave = (note) => {
        console.log(note)
        axios.post(`http://localhost:8080/Api`, note)
            .then(resp => {
                this.getNotas();
                console.log(resp.data)
            })
    }

    handleOpenMenu = () => {
        this.setState({ isMenuOpen: true })
    }

    handleCloseMenu = () => {
        this.setState({ isMenuOpen: false })
    }

    handleLogin = (email, password) => {
        if (email !== "" && password !== "") {
            axios.post("http://localhost:8080/Api/Auth", { email: email, password: password })
                .then(resp => {
                    if (resp.data !== "") {
                        this.setState({ isLog: true, username: resp.data })
                    } else {
                        alert("Usuário ou senha estão incorretos!")
                    }
                })
        } else {
            alert("Por favor preencher os campos.")
        }
    }

    render() {
        const { notes, isLoading, saveHasError, isMenuOpen, isLog, form, atributs } = this.state;
        return (
            <Router>
                <div>
                    <AppBar isLoading={isLoading} saveHasError={saveHasError} onOpenMenu={this.handleOpenMenu} onSaveRetry={() => {
                        this.handleSave(notes)
                    }} />
                    <div className="container" >
                        <Route path='/' exact render={props =>
                            <Notes
                                atributs={atributs}
                                form={form}
                                notes={notes}
                                onRetry={this.handleReload}
                                onAddNote={this.handleAddNote}
                                onMove={this.handleMove}
                                onDelete={this.handleDelete}
                                onEdit={this.handleEdit}
                            />}></Route>
                        <Route path='/about' exact component={About}></Route>
                        <Route path='/Autentication' exact render={props =>
                            <Autentication
                                onLogin={this.handleLogin}
                            />}>
                        </Route>
                        <Route path='/AlterForm' exact render={props =>
                            <AlterForm
                                form={form}
                                onEditForm={this.handleEditForm}
                            />}></Route>
                    </div>
                    <Menu isOpen={isMenuOpen} onCloseMenu={this.handleCloseMenu} isLog={isLog} onGetForm={this.handleGetForm} />
                </div>
            </Router>
        );
    }
}

export default App