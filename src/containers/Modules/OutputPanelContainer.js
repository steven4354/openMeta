import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import OutputPanel from "../../components/Modules/OutputPanel.js";

// optional
import serialize from "form-serialize";

const mapStateToProps = (state, ownProps) => {
  let currentModule = state.project.blocks[ownProps.moduleIdx];
  console.log("===========================");
  console.log("CURRENT MODULE", currentModule);
  console.log("===========================");
  // let outputLoc = currentModule
  //   ? currentModule.content.outputLoc
  //   : "http://www.sharpsightlabs.com/wp-content/uploads/2014/11/scatterplot-in-r_basic.png";

  return {
    outputLoc: currentModule.content.outputLoc,
    loading: currentModule.loading
  };
};

const OutputPanelContainer = withRouter(
  connect(mapStateToProps, null)(OutputPanel)
);

export default OutputPanelContainer;
