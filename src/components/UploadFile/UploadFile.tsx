import React, { useState } from 'react'

const url = 'http://127.0.0.1:8000/center/'

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [uploaded, setUploaded] = useState()

  const handleChange = (event: any) => {
    setSelectedFile(event.target.files[0])
  }

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('nonon')
      return
    }

    const formData = new FormData()
    formData.append('image', selectedFile)

    const res = await fetch(url, {
      method: 'POST',
      body: formData
    })
    console.log(res)
    const { data } = await res.json()

    setUploaded(data)
    console.log(uploaded)
  }

  return (
    <>
      <input
        type="file"
        onChange={handleChange}
      />
      <button onClick={handleUpload}>upload</button>

      <img
        src={uploaded}
        alt=""
      />
    </>
  )
}

export default UploadFile
