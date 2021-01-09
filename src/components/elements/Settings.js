import React from "react";
import {InputButtonSubmit, Input} from './FormElements';
import styles from '../../static/css/roomInfo.module.css'

export default class Settings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayButton: false,
      userName: localStorage.getItem('userName'),
    }
  }
  componentShouldUpdate = () => this.displayButton = true
  saveChanges = (e) => {
    e.preventDefault()
    if (e.target.userName.value.length < 20) localStorage.setItem("userName", e.target.userName.value)
    
  }
  render() {
    return(
      <div className={styles.roomInfo}>
        <div>
          <div>Настройки</div>
        </div>
        <form onSubmit={this.saveChanges}>
          <div>
            <div>
              <div>Общие настройки</div>
              <div>
                <div>Никнейм</div>
                <Input name="userName" value={this.state.userName} onChange={(e) => this.setState({userName: e.value, displayButton: true})} />
                </div>
            </div>
          </div>
          <div>
            {!this.state.displayButton?null:<InputButtonSubmit>Сохранить изменения</InputButtonSubmit>}
          </div>
        </form>
      </div>
    )
  }
}