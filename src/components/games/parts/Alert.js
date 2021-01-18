import React from 'react'
import styles from '../../../static/css/alert.module.css'

export default class Alert extends React.Component {
  constructor(props) {
    super(props)
    this.alertDisplay = false
    this.alertTimeoutDestroy = undefined
  }
  shouldComponentUpdate = (nextProps) => {
    if (nextProps.value===this.props.value) return false
    this.alertDisplay = true
    if (this.alertTimeoutDestroy!==undefined) {
      clearTimeout(this.alertTimeoutDestroy)
    }
    this.alertTimeoutDestroy = setTimeout(() => {
      this.alertDisplay = false
      this.alertTimeoutDestroy = undefined
      this.forceUpdate()
    }, 3000)
    return true
  }
  alertHide = () => {
    clearTimeout(this.alertTimeoutDestroy)
    this.alertDisplay = false
    this.alertTimeoutDestroy = undefined
    this.forceUpdate()
  }
  render() {
    return (
      <div className={`${styles.alert} ${this.alertDisplay?styles.alertDisplay:''}`}>
        <div onClick={this.alertHide}>
          {this.props.value}
        </div>
      </div>
    )
  }
}
