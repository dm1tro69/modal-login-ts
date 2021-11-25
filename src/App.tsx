import React, {useState} from 'react';
import './App.css';
import BaseModalWrapper from "./ModalPopup/BaseModalWrapper";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const toggleModal = () => {
    setIsModalVisible(wasModalVisible => !wasModalVisible)
  }

  return (
    <div className="App">
       <button onClick={toggleModal}>Show Modal</button>
      <BaseModalWrapper onBackDropClick={toggleModal} isModalVisible={isModalVisible}/>
    </div>
  );
}

export default App;
