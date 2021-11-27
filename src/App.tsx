import React, {useState} from 'react';
import './App.css';
import RWDModal from "./ModalPopup/RWDModal";
import LoginModal, {LoginFunction} from "./ModalPopup/LoginModal";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const toggleModal = () => {
    setIsModalVisible(wasModalVisible => !wasModalVisible)
  }
  const onBackDropClick = () => {
      setIsModalVisible(false)
  }
  const onLoginRequest: LoginFunction = async ({password, login}) => {
      console.log(password, login)
  }

  return (
    <div className="App">
       <button onClick={toggleModal}>Show Modal</button>
     <LoginModal onBackDropClick={onBackDropClick} isModalVisible={isModalVisible} onLoginRequested={onLoginRequest}/>

    </div>
  );
}

export default App;
