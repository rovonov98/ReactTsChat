import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './ChatFeed'
import LoginForm from './LoginForm'

const Chat: React.FC = () => {
    if (!localStorage.getItem('username')) 
        return <LoginForm />
    return (
        
        <div>
            <ChatEngine 
                height="100vh"
                projectID="faefd3ca-b618-4bb4-bea6-67fddd729d63"
                userName={ localStorage.getItem('username') }
                userSecret={ localStorage.getItem('password') }
                renderChatFeed={ (chatAppProps: any) => <ChatFeed { ...chatAppProps }/> } 
            />
        </div>
    )
}

export default Chat