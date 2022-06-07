import Modal from 'react-modal';
import styled from 'styled-components';

Modal.setAppElement('#root');

type JobModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  title: string;
  buttonLink: string;
  content: string;
};

export function JobModal({
  isOpen,
  onRequestClose,
  title,
  buttonLink,
  content,
}: JobModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <div className="header">
        <h1>{title}</h1>
        <button
          onClick={() => {
            window.open(buttonLink, '_blank');
          }}
        >
          Apply Here
        </button>
      </div>

      <div dangerouslySetInnerHTML={{ __html: content || '' }} />
    </Modal>
  );
}
