import axios from 'axios'
import React from 'react'
import s from './styles/app.module.scss'

const App = () => {
  const OnSumbit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = {
      image: new FormData(event.target.form)
    }
    console.log(formData)

    axios
      .post('http://127.0.0.1:8000/fill/', formData)
      .then((res) => {
        console.log(`Success` + res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className={s.app}>
      <h1>TEST</h1>
      <form
        onSubmit={OnSumbit}
        className={s.form}
      >
        <input
          accept="image/jpeg"
          id="contained-button-content"
          name="customFile"
          type="file"
          className={s.input}
        />
        <button className={s.btn}>Sub</button>
      </form>
    </div>
  )
}

export default App
