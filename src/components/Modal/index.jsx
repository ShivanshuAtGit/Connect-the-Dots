import React from 'react';
import './style.css';

const Modal = ({ handleClose, show, children, restartGame }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    const handleRestart = () => {
        restartGame();
        handleClose();
    }

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button type="button" id="restart" onClick={handleRestart}>
                    Restart
                </button>
            </section>
        </div>
    );
};

export default Modal;