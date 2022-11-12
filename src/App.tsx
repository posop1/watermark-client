import UploadFile from './components/UploadFile/UploadFile'
import s from './styles/app.module.scss'

const App = () => {
  return (
    <div className={s.app}>
      <UploadFile />
    </div>
  )
}

export default App
