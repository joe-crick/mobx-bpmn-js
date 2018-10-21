import React, { Component } from "react";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-font/dist/css/bpmn-embedded.css";
import styles from "./modeler.module.scss";
import BpmnModeler from "bpmn-js/dist/bpmn-modeler.production.min";

class Modeler extends Component {
  constructor() {
    super();
    this.modeller = React.createRef();
    this.state = {
      modeler: new BpmnModeler()
    };
  }

  componentDidMount() {
    this.state.modeler.attachTo(this.modeller.current);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Modeler</h1>
        <div ref={this.modeller} className={styles.toolBar} />
      </React.Fragment>
    );
  }
}

export default Modeler;
