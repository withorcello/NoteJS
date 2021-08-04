
class NoteService {

    static load() {
        return new Promise((resolve, reject) => {
                if (true) {
                    const notes = this.state.notes
                    resolve(notes ? JSON.parse(notes) : [])
                } else {
                    reject()
                }
        })
    }
    static save(notes) {
        return new Promise((resolve, reject) => {
            if (true) {
                window.localStorage.setItem("notes", JSON.stringify(notes))
                resolve()
            } else {
                reject()
            }
        })
    }
}

export default NoteService