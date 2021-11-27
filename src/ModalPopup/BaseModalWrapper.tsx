import React, {ComponentType, FC, MouseEventHandler, ReactNode} from 'react';
import Modal from "./Modal";
import {DesktopModalContainer, Header, Message, CloseSign, DesktopCloseButton} from "./ModalPopup.styles";

export interface BaseModalWrapperProps {
    isModalVisible: boolean
    onBackDropClick: () => void
    header: string
    message?: string
    content?: ReactNode
}
interface ComponentsProps {
    ContainerComponent: ComponentType<{}>
    CloseButtonComponent: ComponentType<{
        onClick?: MouseEventHandler<any>
    }>
}
type Props = BaseModalWrapperProps & ComponentsProps

const BaseModalWrapper:FC<Props> = ({isModalVisible, onBackDropClick, content, header, message, CloseButtonComponent, ContainerComponent}) => {

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
                {content}
            </ContainerComponent>
        </Modal>

    );
};

export default BaseModalWrapper;
