import axios from 'axios'
import React, { useState } from 'react'
import s from './styles/app.module.scss'

const App = () => {
  const [file, setFile] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('avatar', file)
    return await axios.post('http://127.0.0.1:8000/center/', formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
  }

  return (
    <div className={s.app}>
      <h1>TEST</h1>
      <form
        onSubmit={handleSubmit}
        className={s.form}
      >
        <input
          type="file"
          className={s.input}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button className={s.btn}>Sub</button>
      </form>
    </div>
  )
}

export default App
