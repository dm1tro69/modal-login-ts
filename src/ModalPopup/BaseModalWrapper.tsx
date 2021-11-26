import React, {ComponentType, FC, MouseEventHandler} from 'react';
import Modal from "./Modal";
import {DesktopModalContainer, Header, Message, CloseSign, DesktopCloseButton} from "./ModalPopup.styles";

export interface BaseModalWrapperProps {
    isModalVisible: boolean
    onBackDropClick: () => void
    header: string
    message?: string
}
interface ComponentsProps {
    ContainerComponent: ComponentType<{}>
    CloseButtonComponent: ComponentType<{
        onClick?: MouseEventHandler<any>
    }>
}
type Props = BaseModalWrapperProps & ComponentsProps

const BaseModalWrapper:FC<Props> = ({isModalVisible, onBackDropClick, header, message, CloseButtonComponent, ContainerComponent}) => {

    if (!isModalVisible){
        return null
    }

    return (
        <Modal onBackDropClick={onBackDropClick}>
            <ContainerComponent>
                <CloseButtonComponent onClick={onBackDropClick}>
                    <CloseSign/>
                </CloseButtonComponent>
                <Header>{header}</Header>
                {message && <Message>{message}</Message>}
            </ContainerComponent>
        </Modal>

    );
};

export default BaseModalWrapper;
