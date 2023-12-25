import React, {lazy} from 'react'

// import Email from '@/UI/animations/Email'
import  Modal from '@/UI/layouts/modal'
import  ModalHeader from '@/UI/layouts/modal/ModalHeader'
import  ModalBody from '@/UI/layouts/modal/ModalBody'
import  ModalFooter from'@/UI/layouts/modal/ModalFooter'
import ContactForm from '@/UI/fragments/contact/ContactForm'

export default function ContatModal({isModalOpen, modalToggleHandler}){
        return(
            <>
                <Modal isModalOpen={isModalOpen} modalToggleHandler={modalToggleHandler}>
                    <ModalHeader modalTitle='contact me' modalToggleHandler={modalToggleHandler}/>
                    <ModalBody>
                        <ContactForm />
                    </ModalBody>
                    {/* <ModalFooter /> */}
                </Modal>
            </>
        )
}