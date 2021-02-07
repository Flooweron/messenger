import React, {useState} from 'react'
import { Nav, Tab, Button, Modal} from 'react-bootstrap'
import Conversetions from './conversetions'
import Contacts from './Contacts'
import NewConversationalModal from './NewConversationalModal'
import NewContactModal from './NewContactModal'


const CONVERSETIONS_KEY = 'Conversetions'
const CONTACTS_KEY = 'Contacts'




export default function Sidebar( {id} ) {

    const [activeKey, setActiveKey] = useState(CONVERSETIONS_KEY)
    const [ modalOpen, setModalOpen] = useState(false)
    const conversetionsOpen = activeKey === CONVERSETIONS_KEY

    function closeModal() {
        setModalOpen(false)
    }


    return (
        <div style={{width: '250px'}} className="d-flex flex-column">
           <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant="tabs" className="justify-content-center" >
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSETIONS_KEY}>Conversetions</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONTACTS_KEY}>Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className="border-right overflow-auto flex-grow-1">
                    <Tab.Pane eventKey={CONVERSETIONS_KEY}>
                        <Conversetions />
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACTS_KEY}>
                        <Contacts />
                    </Tab.Pane>
                </Tab.Content>
                <div className="p-2 border-top border-right small">
                    Your Id: <span className="text-muted">{id}</span> 
                </div>
                <Button onClick={()=> setModalOpen(true)} className="rounded-0">
                    New {conversetionsOpen ? 'Conversation': 'Contact'} 
                </Button>
           </Tab.Container>

           <Modal show={modalOpen} onHide={closeModal}>
               {conversetionsOpen ? 
               <NewConversationalModal closeModal={closeModal}/>:
               <NewContactModal closeModal={closeModal}/>
            }
           </Modal>
        </div>
    )
}
