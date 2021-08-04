import React from 'react'

import AddFormItem from '../components/AddFormItem'
import FormDynamic from '../components/FormDynamic'

const AlterForm = ({ onEditForm, form }) => {
    return (
        <div>
            <AddFormItem onEditForm={onEditForm} />
            <div className="preview">
                {form.map((forms) =>
                    <FormDynamic key={forms.id} form={forms} />
                )}
            </div>
        </div>
    )
}

export default AlterForm