import React from 'react'
import ClassNames from 'classnames'
import { withRouter } from 'react-router-dom'

const Menu = ({ isOpen, onCloseMenu, history, isLog, onGetForm }) => {
    return (<div className={ClassNames("menu", {
        "menu--open": isOpen
    })}>
        <div className="menu_head">
            <button className="menu_head-button" onClick={onCloseMenu}>
                <i className="material-icons">close</i>
            </button>
        </div>
        <div className="menu_pages">
            {isLog === false ? (<button className="menu_pages__item" onClick={() => {
                onCloseMenu()
                history.push("/Autentication")
            } }>
                <i className="material-icons">account_circle</i>
                Login
            </button>) : null}
            <button className="menu_pages__item" onClick={() => {
                onCloseMenu()
                history.push("/")
            } }>
                <i className="material-icons">notes</i>
                Notas
            </button>
            <button className="menu_pages__item" onClick={() => {
                onCloseMenu()
                history.push("/about")
            } }>
                <i className="material-icons">info</i>
                Sobre
            </button>
            <button className="menu_pages__item" onClick={() => {
                onCloseMenu()
                history.push("/AlterForm")
                //onGetForm()
            } }>
                <i className="material-icons">format_shapes</i>
                Editar Notas
            </button>
        </div>
    </div>)
}

export default withRouter(Menu)