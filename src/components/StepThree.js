import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

let StepThree = (props) => {
  const navigate = useNavigate();
  let { form, setForm } = props;
  return (
    <Formik
      initialValues={ form }
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Geçerli bir mail adresi giriniz.")
          .required("E-mail boş bırakılamaz."),
        password: Yup.string().required("Şifre boş geçilemez."),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setForm(values)
        setTimeout(() => {
          setSubmitting(false);
          navigate("/Final");
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
          <h3>Devam Et, Çok Az Kaldı...</h3>
          <label className="topMargin" htmlFor="email">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="E-mail giriniz..."
            className="input"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <label className="topMargin" htmlFor="password">
            Şifre
          </label>
          <input
            id="password"
            type="password"
            placeholder="password giriniz..."
            className="input"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}

          <button className="btn1" type="submit" onClick={() => navigate(-1)}>
            Önceki
          </button>

          <button type="submit" disabled={!dirty || isSubmitting}>
            Kaydol
          </button>
        </form>
      )}
    </Formik>
  );
}

export default StepThree;
