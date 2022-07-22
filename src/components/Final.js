import React from 'react'

let Final = (props) => {
  let {form} = props;

  return (
    <div>
      <h2>Tebrikler! Kayıt başarılı.</h2>
      <h3>İsim: {form.name}</h3>
      <h3>Soyisim: {form.surname}</h3>
      <h3>Cinsiyet: {form.gender}</h3>
      <h3>Yaşadığı Şehir: {form.city}</h3>
      <h3>E-mail: {form.email}</h3>
    </div>
  )
}

export default Final