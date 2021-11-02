import React from 'react'

class NewNote extends React.Component {
    state = {
        text: ""
    }
    render() {
        const { text } = this.state
        return (
            <div className="new-note">
                <input id="0" type="text" className="new-note_input" placeholder="note"
                    value={text}
                    onChange={event => {
                        this.setState({
                            text: event.target.value
                        })
                    }}
                ></input>
            </div>
        )
    }
}

export default NewNote