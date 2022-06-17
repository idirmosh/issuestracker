// @ts-nocheck
import Divider from "../atoms/Divider";
import ModalBody from "../molecules/ModalBody";
import ModalFooter from "../molecules/ModalFooter";
import ModalHeader from "../molecules/ModalHeader";
import ModalWrapper from "../molecules/ModalWrapper";

function Modal(props) {
  return (
    <ModalWrapper>
      <ModalHeader title={props.title} />

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
