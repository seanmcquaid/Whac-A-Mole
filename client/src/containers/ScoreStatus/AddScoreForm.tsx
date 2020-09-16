import React, { useCallback } from 'react';
import { Formik, Form, Field } from 'formik';
import Axios from 'axios';
import Button from '../../sharedComponents/universal/Button';
import { useSelector } from 'react-redux';
import { totalTimeSelector } from '../../store/game/selectors';
import { useHistory } from 'react-router-dom';

const AddScoreForm = React.memo(() => {
  const score = useSelector(totalTimeSelector);
  const history = useHistory();

  const addScoreOnSubmit = useCallback(
    (name) => {
      const { REACT_APP_API_URL } = process.env;
      const source = Axios.CancelToken.source();
      const config = {
        cancelToken: source.token,
      };

      const requestBody = {
        name,
        score,
      };

      Axios.post(`${REACT_APP_API_URL}/v1/scores/addScore`, requestBody, config)
        .then(() => {
          history.push('/leaderBoard');
        })
        .catch((err) => console.log(err));
    },
    [history, score]
  );

  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={({ name }) => addScoreOnSubmit(name)}
    >
      <Form>
        <Field name="name" type="text" placeholder="Enter name here" />
        <Button type="submit" name="Submit" />
      </Form>
    </Formik>
  );
});

export default AddScoreForm;
