import  MessageForm  from './MessageForm'
import  MyMessage  from './MyMessage'
import  NotMyMessage  from './NotMyMessage'

interface Props {
    chats?: any,
    activeChat: number,
    userName: string,
    messages: any,
}

 const ChatFeed: React.FC<Props> = (props) => {
    const { chats, activeChat, userName, messages } = props
    const chat = chats && chats[activeChat]
    const renderMessages = () => {
        const keys = Object.keys(messages)
        return keys.map((key, index) => {
            const message = messages[key]
            const lastMessageKey = index === 0 ? 0 : keys[index - 1]
            const isMyMessage = userName === message.sender.username
            return (
                <div key={`msg_${ index }`} style={{ width: '100%' }}>
                    <div className="message-container">
                        {
                            isMyMessage
                            ? <MyMessage message={ message }/>
                            : <NotMyMessage message={ message } lastMessage={ messages[lastMessageKey] }/>
                        }
                    </div>
                    <div className="read-receipts" style={{ marginRight: isMyMessage ? '1rem' : '0px', marginLeft: isMyMessage ? '0px' : '3rem' }}>
                        read-receipts
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
            { renderMessages() }
            <div style={{ height: '5rem' }}></div>
            <div className="message-form-wrapper">
                <MessageForm { ...props } chatId={ activeChat }/>
            </div>
        </div>
    )
}
export default ChatFeed