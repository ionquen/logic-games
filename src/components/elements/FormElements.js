import React from "react"
import styles from '../../static/css/formElements.module.css'
class Select extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayList: false,
      selected: this.props.selected,
    }
  }
  change = (e) => {
    this.props.onClick(e)
    this.setState({
      displayList: false,
      selected: e.target.name,
    })
  }
  getValueByName() {
    for(let prop of this.props.data) {
      if (prop.name===this.state.selected) return prop.value
    }
  }
  render() {
    return(
      <div className={styles.select} onClick={this.props.disabled?undefined:() => this.setState({displayList: this.state.displayList?false:true})} >
        <div>{this.getValueByName()}</div>
        {!this.state.displayList?null:
          <div>
            {this.props.data.map(element => <button {...element} type="button" onClick={this.change}>{element.value}</button>)}
          </div>
        }
        <input name={this.props.name} value={this.state.selected} />
      </div>
    )
  }
}


class InputNumber extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      value: props.value,
    }
  }
  render() {
    const {label, min, max, ...other} = this.props
    return(
    <div className={styles.number}>
      <label>
        <input {...other}  value={this.state.value}type="number" onChange={e => this.setState({value: e.target.value>=min&&e.target.value<=max?e.target.value:min})} />
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
              onChange={e => this.setState({value: this.state.value?false:true})} 
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
      value: props.value||false
    }
  }
  render() {
    return(
      <div className={styles.input}>
        <input {...this.props} checked={this.state.value} type="text" onChange={e => this.setState({value: e.target.value})} />
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