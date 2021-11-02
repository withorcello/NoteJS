import React from 'react'


const testeTable = ({ notes, atrib }) => (
    <div>
        <table border="1">
            <tbody>
                {notes.map((note) =>
                    <tr>
                        <td>
                            {note.note}
                        </td>
                        <td>
                           {notes.dynamicFields.teste}
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
)

export default testeTable