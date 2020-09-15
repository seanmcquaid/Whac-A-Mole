import React, { useCallback } from 'react';
import { Formik, Form, Field } from 'formik';
import Axios from 'axios';
import Button from '../../sharedComponents/universal/Button';

const AddScoreForm = React.memo(() => {
  const addScoreOnSubmit = useCallback((name) => {
    console.log(name);
  }, []);

  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={({ name }) => addScoreOnSubmit(name)}
    >
      <Form>
        <Field name="name" type="text" />
        <Button type="submit" name="Submit" />
      </Form>
    </Formik>
  );
});

export default AddScoreForm;
