import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "../../AddButtonNew";
import E from '../NewProductAdd/UploadImgStyle';
import M from './style';

function FancyModalButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [opacity, setOpacity] = useState(0);

    function toggleModal(e) {
        setOpacity(0);
        setIsOpen(!isOpen);
    }

    function afterOpen() {
        setTimeout(() => {
            setOpacity(1);
        }, 100);
    }

    function beforeClose() {
        return new Promise((resolve) => {
            setOpacity(0);
            setTimeout(resolve, 300);
        });
    }

    return (
        <div>
            <E.DeleteButton onClick={toggleModal}><E.DeleteIcon src="./icons/delete.png"></E.DeleteIcon> Видалити </E.DeleteButton>
            <M.StyledModal
                isOpen={isOpen}
                afterOpen={afterOpen}
                beforeClose={beforeClose}
                onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}
                opacity={opacity}
                backgroundProps={{ opacity }}
            >
                <M.ModalHeader>Підтвердження</M.ModalHeader>
                <M.ModalText>Ви впевнені, що хочете видалити товар “Папероні”?</M.ModalText>
                <M.ButtonBox>
                    <Button 
                    showButton={true}
                    onClick={toggleModal} 
                    children="Так" 
                    width="55px"
                    border="1px solid #D9D9D9"
                    backgroundColor="unset"
                    color="#000000"
                    padding="5px 0px"
                    fontSize={14}
                    marginRight={"10px"}
                    />
                    <Button
                    showButton={true}
                    children="Ні" 
                    width="46px"
                    color="#fff"
                    padding="5px 0px"
                    marginRight={"10px"}
                    fontSize={14}
                    />
                </M.ButtonBox>
            </M.StyledModal>
        </div>
    );
}

export default FancyModalButton;




