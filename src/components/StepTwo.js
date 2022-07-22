import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import DataCity from "./DataCity"

let StepTwo = (props) => {
  const navigate = useNavigate();
  let { form, setForm } = props;
  return (
    <Formik
      initialValues={ form }
      validationSchema={Yup.object({
        gender: Yup.string()
          .required("Cinsiyet boş bırakılamaz!")
          .oneOf(["Kadin", "Erkek"]),
        city: Yup.string()
          .required("Şehir alanı boş bırakılmaz.")
      })}
      onSubmit={(values, { setSubmitting }) => {
        setForm(values)
        setTimeout(() => {
          setSubmitting(false);
          navigate("/StepThree");
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
          <h3>Bilgilerini Doldurmaya Devam Et ...</h3>
          <label htmlFor="gender" className="topMargin">
            Cinsiyet:
          </label>
          <select
            value={values.gender}
            name=""
            id="gender"
            onChange={handleChange}
            style={{
              marginTop: 10,
              width: "400px",
              padding: "10px 15px",
              outline: "none",
            }}
          >
            <option value="" label="Cinsiyetiniz" />
            <option value="Kadin" label="Kadin" />
            <option value="Erkek" label="Erkek" />
          </select>
          {errors.gender && touched.gender && (
            <div className="input-feedback">{errors.gender}</div>
          )}

          <label htmlFor="city" className="topMargin">
            Yaşadığınız Şehir:
          </label>
          <select
            value={values.city}
            name=""
            id="city"
            onChange={handleChange}
            style={{
              marginTop: 10,
              width: "400px",
              padding: "10px 15px",
              outline: "none",
            }}
          >
            <option value="" label="Şehrini Seç" />
            {
              DataCity.dataCity.map((data) => (
                <option key={data.plaka}>{data.il}</option>
              ))
            }
          </select>
          {errors.city && touched.city && (
            <div className="input-feedback">{errors.city}</div>
          )}
          <button className="btn1" type="submit" onClick={() => navigate(-1)}>
            Önceki
          </button>
          <button
            className="btn2"
            type="submit"
            disabled={!dirty || isSubmitting}
          >
            Sonraki
          </button>
        </form>
      )}
    </Formik>
  );
}

export default StepTwo;
