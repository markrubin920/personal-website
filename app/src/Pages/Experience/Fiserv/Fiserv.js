import "./Fiserv.css";
import { useState } from "react";

const Fiserv = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            <button onClick={toggleModal}>Open Modal</button>
            
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Modal Title</h2>
                        <p>This is the modal content!</p>
                        <button onClick={toggleModal}>Close Modal</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Fiserv;