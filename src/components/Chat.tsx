import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './ChatFeed'

const Chat: React.FC = () => {

    return (
        <div>
            <ChatEngine 
                height="100vh"
                projectID="faefd3ca-b618-4bb4-bea6-67fddd729d63"
                userName="Admin"
                userSecret="123456"
                renderChatFeed={ (chatAppProps: any) => <ChatFeed { ...chatAppProps }/> } 
            />
        </div>
    )
}

export default Chat