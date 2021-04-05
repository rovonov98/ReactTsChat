import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import NotMyMessage from './NotMyMessage'
import '../App.css'

interface Props {
    chats?: any,
    activeChat: number,
    userName: string,
    messages: any,
    creds: object
}

 const ChatFeed: React.FC<Props> = (props) => {
    const { chats, activeChat, userName, messages, creds } = props
    const chat = chats && chats[activeChat]
    const renderReadReceipts = (message: any, isMyMessage: boolean) => {
        return chat.people.map((person: any, index: number) => person.last_read === message.id && (
            <div
                key={`read_${index}`}
                style={{ 
                    float: isMyMessage ? 'right' : 'left',
                    backgroundImage: `url(${ person?.person?.avatar })`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    textAlign: 'center',
                    backgroundSize: '100%',
                    width: '.8rem',
                    height: '.8rem',
                    borderRadius: '50%'
                }}
            >
            </div>
        ))
    }
    const renderMessages = () => {
        const keys = Object.keys(messages)
        return keys.map((key, index) => {
            const message = messages[key]
            const lastMessageKey = index === 0 ? 0 : keys[index - 1]
            const isMyMessage = userName === message.sender.username
            return (
                <div 
                    key={`msg_${ index }`} style={{ width: '100%' }}
                    className="message-wrapper"
                >
                    <div className="message-container">
                        {
                            isMyMessage
                            ? <MyMessage message={ message }/>
                            : <NotMyMessage message={ message } lastMessage={ messages[lastMessageKey] }/>
                        }
                    </div>
                    <div 
                        className="read-receipts" 
                        style={{ 
                            marginRight: isMyMessage ? '1rem' : '0px', 
                            marginLeft: isMyMessage ? '0px' : '3rem',
                        }}
                        > {  renderReadReceipts(message, isMyMessage) }
                    </div>
                </div>
            )
        })
    }
    if (!chat) return (
        <div>
            Loading...
        </div>
    )
    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{ chat?.title }</div>
                <div className="chat-subtitle">
                    { chat.people.map((person: any) => `${ person.person.username }`) }
                </div>
            </div>
            <div className="messages-wrapper">
                { renderMessages() }
            </div>
            <div style={{ height: '5rem' }}></div>
            <div className="message-form-wrapper">
                <MessageForm { ...props } chatId={ activeChat } creds={ creds }/>
            </div>
        </div>
    )
}
export default ChatFeed