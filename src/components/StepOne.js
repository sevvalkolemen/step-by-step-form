import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

let StepOne = (props) => {
  const navigate = useNavigate();
  let { form, setForm } = props;
  return (
    <Formik
      initialValues={ form }
      validationSchema={Yup.object({
        name: Yup.string().required("İsim alanı boş bırakılamaz."),
        surname: Yup.string().required("Soyisim alanı boş bırakılmaz."),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setForm(values)
        setTimeout(() => {
          setSubmitting(false);
          navigate("/StepTwo");
        }, 1000);
      }}
    >
      {({
        values,
        errors,
        handleChange,
        handleSubmit,
        touched,
        dirty,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <h3>Kayıt Ol!</h3>
          <label htmlFor="name">İsim</label>
          <input
            id="name"
            type="text"
            placeholder="İsim Giriniz..."
            className="input"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && touched.name && (
            <div className="input-feedback">{errors.name}</div>
          )}
          <label htmlFor="name">Soyisim</label>
          <input
            id="surname"
            type="text"
            placeholder="Soyisim Giriniz..."
            className="input"
            value={values.surname}
            onChange={handleChange}
          />
          {errors.surname && touched.surname && (
            <div className="input-feedback">{errors.surname}</div>
          )}
          <button type="submit" disabled={!dirty || isSubmitting}>
            Sonraki
          </button>
        </form>
      )}
    </Formik>
  );
};

export default StepOne;
