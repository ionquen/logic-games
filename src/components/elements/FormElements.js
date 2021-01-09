import React from "react";
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


function InputNumber(props) {
  const {label, ...other} = props
  return(
  <div className={styles.number}>
    <label>
      <input  {...other} type="number" />
      <div>{label}</div>
    </label>
  </div>
  )
}

function Checkbox(props) {
  const {label, ...other} = props
  return(
    <div className={styles.checkbox}>
        <label>
          <input {...other} type="checkbox"/>
          <div>{label}</div>
        </label>
    </div>
  )
}

function Input(props) {
    return(
      <div className={styles.input}>
        <input {...props} type="text" />
      </div>
    )
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