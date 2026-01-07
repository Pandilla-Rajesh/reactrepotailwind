import React, { useState } from 'react'
import { Children } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';

const ModalReUse = ({
    show,
    handleClose,
    title,
    children,
    footer,
    size = "lg",
    centered = true,
}) => {

    return (
        <>
            <Modal show={ show } onHide={ handleClose } size={ size } centered={ centered }
                backdrop="static">
                { title && (
                    <ModalHeader closeButton>
                        <ModalTitle>
                            { title }
                        </ModalTitle>
                        <ModalBody>
                            { children }
                        </ModalBody>
                    </ModalHeader>
                ) }
                { footer && (
                    <ModalFooter>
                        { footer }
                    </ModalFooter>
                ) }
            </Modal>
        </>
    )
}
export default ModalReUse