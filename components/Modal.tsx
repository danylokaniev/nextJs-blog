import styled from 'styled-components';

interface ModalInterface {
    showModal: boolean,
    setShowModal: any,
}

const ModalWindow = styled.div`
display: ${(props) => (props.showModal ? 'block' : 'none')};
background-color: ${(props) => (props.showModal ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0)')};

.modal-header {
display: flex;
justify-content: space-between;
align-items: center; 
}

button { 
margin-left: auto;
}

`;
const Modal = ({ showModal, setShowModal }: ModalInterface) => (
  <ModalWindow className="modal" showModal={showModal}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Fill in all fields correctly</h3>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => setShowModal(false)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <p className="modal-text">
            You cannot create a post until you fill in all the fields.
          </p>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-primary" onClick={() => setShowModal(false)}>
            Clear
          </button>
        </div>

      </div>
    </div>
  </ModalWindow>
);

export default Modal;
