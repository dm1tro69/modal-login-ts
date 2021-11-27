import React, {FC} from 'react';
import RWDModal from "./RWDModal";
import {ReactComponent as LoginIcon} from '../assets/user.svg'
import {ReactComponent as PasswordIcon} from '../assets/padlock.svg'
import InputWithIcon from "./InputWithIcon";

interface LoginArgs {
    password: string
    login: string
}
export type LoginFunction = (args: LoginArgs) => Promise<void>
    


interface LoginModalProps {
    onBackDropClick: () => void
    isModalVisible: boolean
    loginError?: string
    onLoginRequested: LoginFunction
}

const LoginModal:FC<LoginModalProps> = ({onBackDropClick, isModalVisible, onLoginRequested, loginError}) => {
    return (
       <RWDModal
           isModalVisible={isModalVisible}
           onBackDropClick={onBackDropClick}
           header={'Login'}
           message={'Please log in'}
           content={
               <>
                   <InputWithIcon type={'text'} icon={<LoginIcon width={"24px"} height={'24px'} fill={'white'}/>}/>
                   <InputWithIcon type={'password'} icon={<PasswordIcon width={"24px"} height={'24px'} fill={'white'}/>}/>
                   <button>Cancel</button>
                   <button>Login</button>
               </>
           }
       />
    );
};

export default LoginModal;
