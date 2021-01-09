import React from "react";
import styles from '../../static/css/popup.module.css'

class Popup extends React.Component {
  render() {
    return(
      <>
        <div className={styles.popup} onClick={() => this.props.setWindow(null) } >
          <div onClick={e => e.stopPropagation()}>
            {this.props.children}
          </div>
        </div>
      </>
    )
  }
}
export default Popup;