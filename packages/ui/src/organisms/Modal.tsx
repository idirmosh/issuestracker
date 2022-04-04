// @ts-nocheck
import Divider from "../atoms/Divider";
import ModalBody from "../molecules/ModalBody";
import ModalFooter from "../molecules/ModalFooter";
import ModalHeader from "../molecules/ModalHeader";
import React from "react";
import ModalWrapper from "../molecules/ModalWrapper";

function Modal(props) {
  const { Note } = props;
  return (
    <ModalWrapper>
      <ModalHeader title={props.title} Icon={props.Icon} />
      <Note.Component props={Note.props} />
      <Divider />

      <ModalBody>{props.children}</ModalBody>
      <ModalFooter
        actionName={props.actionName}
        actionClose={props.actionClose}
        handler={props.handleSubmit}
      />
    </ModalWrapper>
  );
}

export default Modal;
