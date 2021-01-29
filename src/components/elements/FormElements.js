import React from "react"
import styles from '../../static/css/formElements.module.css'
function Select(props) {
    const {data, ...other} = props
    return(
      <select {...other} required
      className={styles.select}>
        { data.map(option => {
            const {text, ...other} = option
            if (option.value===props.selected) {
              return <option selected {...other} >{option.text}</option>
            } else return <option {...other} >{option.text}</option>
          }
        )
        }
      </select>
    )
  }


class InputNumber extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      value: props.value,
    }
  }
  render() {
    const {label, value, min, max, ...other} = this.props
    return(
    <div className={styles.number}>
      <label>
        <input {...other}  
          value={this.state.value} 
          type="number" 
          onChange={e => this.setState({value: e.target.value>max||e.target.value<(min>0?0:min)?min:e.target.value})} />
        <div>{label}</div>
      </label>
    </div>
    )
  }
}

class Checkbox extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      value: props.value
    }
  }
  render() {
    const {label, ...other} = this.props
    return(
      <div className={styles.checkbox}>
          <label>
            <input {...other} 
              checked={this.state.value} 
              onChange={e => this.setState({value: e.target.checked})} 
              type="checkbox"/>
            <div>{label}</div>
          </label>
      </div>
    )
  }
}

class Input extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      value: props.value||''
    }
  }
  render() {
    return(
      <div className={styles.input}>
        <input {...this.props} type="text" value={this.state.value} onChange={e => this.setState({value: e.target.value})} />
      </div>
    )
  }
}
function InputTextSubmit(props) {
    const {onSubmit, children, ...other} = props
    return(
      <form className={styles.input} onSubmit={onSubmit}>
        <input {...other} type="text" />
        <label>
          <input type="submit"/>
          {children}
        </label>
      </form>
    )
}
function InputButtonSubmit(props) {
  const {children, ...other} = props
  return(<input className={styles.button} type="submit" {...other} value={children} />)
}
function Button(props) {
  const {children, ...other} = props
  return(<button className={styles.button} {...other}>{children}</button>)
}

export {Input, Select, InputNumber, Checkbox, InputTextSubmit, InputButtonSubmit, Button};