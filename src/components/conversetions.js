import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from '../context/ConversationsProvider'

export default function Conversations() {
    const { conversations, selectConversetionIndex } = useConversations()

    return (
        <ListGroup variant="flush">
        { conversations.map( (conversation, index) => (
            <ListGroup.Item key={index} 
            action active={conversation.selected}
            onClick={() => selectConversetionIndex(index)}>
                {conversation.recipients.map(r => r.name).join(', ')}
            </ListGroup.Item>
        ))}
        </ListGroup>
    )
}
