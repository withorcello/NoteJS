import React from 'react'

class Preview extends React.Component {
    state = {
        text: ""
    }
    render() {
        const { form } = this.props
        const { text } = this.state
        return (
            <div>
                <div className="new-note">
                    <div>
                        <input id={form.id} type={form.typeCamp} className="new-note_input" placeholder={form.nameCamp}
                            value={text}
                            onChange={event => {
                                this.setState({
                                    text: event.target.value
                                })
                            }}
                        ></input>

                    </div>
                </div>
            </div>
        )
    }
}
export default Preview