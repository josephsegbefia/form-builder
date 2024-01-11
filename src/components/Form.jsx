import React, { useState } from 'react';
import FormFieldInput from './FormFieldInput';

const Form = ({ handleFormSubmit, formFields }) => {

  const [formValues, setFormValues] = useState({});

  const handleFormValuesChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    if(handleFormSubmit) {
      handleFormSubmit(formValues)
    }
  }
  return  (
    <form onSubmit={onFormSubmit}>
      {
        formFields.map(fieldDetails =>
          < FormFieldInput
            key = {fieldDetails.fieldName}
            handleFieldChange={handleFormValuesChange}
            {...fieldDetails}
          />
          )
      }
      <div className = 'control'>
        <button classname = 'bitton is-primary'>Sign up</button>
      </div>
    </form>
  )
}

export default Form;
