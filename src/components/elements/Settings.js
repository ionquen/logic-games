import React from "react"
import {InputButtonSubmit, Input} from './FormElements'
import styles from '../../static/css/settings.module.css'
import {ReactComponent as IconCross} from '../../static/img/icons/close-fill.svg'

export default function Settings(props) {
  function saveChanges(e) {
    e.preventDefault()
    if (e.target.userName.value.length < 20) localStorage.setItem("userName", e.target.userName.value)
    props.setPopupUntracked(null)
  }
  return(
    <div className={styles.settings}>
      <form onSubmit={saveChanges}>
        <div>
          <div></div>
          <div>Настройки</div>
          <div onClick={() => props.setPopupUntracked(null)}>
            <IconCross />
          </div>
        </div>
        <div>
          <div className={styles.title}>Общие настройки</div>
          <div>
            <div>Никнейм</div>
            <Input name="userName" value={localStorage.getItem('userName')} />
          </div>
          <div>
            <div>Пользовательский ID</div>
            <Input name="userId" disabled={true} value={localStorage.getItem('userId')} />
          </div>
        </div>
        <div>
          <InputButtonSubmit>Сохранить</InputButtonSubmit>
        </div>
      </form>
    </div>
  )
}