import './index.css'

const Btns = props => {
  const {each, changeLang, activeLangId} = props
  const {id, buttonText} = each
  const changeActiveId = () => {
    changeLang(id)
  }
  const btnStyle = activeLangId === id ? 'activeBtn' : ''
  return (
    <li>
      <button type="button" onClick={changeActiveId} className={btnStyle}>
        {buttonText}
      </button>
    </li>
  )
}

export default Btns
