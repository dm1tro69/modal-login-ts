import React, {useState} from 'react';
import './App.css';
import RWDModal from "./ModalPopup/RWDModal";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const toggleModal = () => {
    setIsModalVisible(wasModalVisible => !wasModalVisible)
  }

  return (
    <div className="App">
       <button onClick={toggleModal}>Show Modal</button>
      <RWDModal onBackDropClick={toggleModal} isModalVisible={isModalVisible} header={'Login'} message={'Please log in'}/>

    </div>
  );
}

export default App;
