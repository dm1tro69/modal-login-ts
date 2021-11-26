import React, {FC} from 'react';
import MediaQuery from "react-responsive";
import BaseModalWrapper, {BaseModalWrapperProps} from "./BaseModalWrapper";
import {DesktopCloseButton, DesktopModalContainer, MobileCloseButton, MobileModalContainer} from "./ModalPopup.styles";

type RWDModalProps = BaseModalWrapperProps



const RWDModal: FC<RWDModalProps> = (props) => {
    return (
        <MediaQuery minWidth={580}>
            {(matches: number) => matches ? (
               <BaseModalWrapper
                   CloseButtonComponent={DesktopCloseButton}
                   ContainerComponent={DesktopModalContainer}
                   {...props}
               />
            ): (
                <BaseModalWrapper
                    CloseButtonComponent={MobileCloseButton}
                    ContainerComponent={MobileModalContainer}
                    {...props}
                />
            )}
        </MediaQuery>
    );
};

export default RWDModal;
