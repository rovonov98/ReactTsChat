import '../assets/scss/Message.scss'

interface Props {
    message: any,
    lastMessage: any
}

export const NotMyMessage: React.FC<Props> = ({ message, lastMessage }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username

    return (
        <div className="message-row" style={{ display: 'flex' }}>
            { isFirstMessageByUser && (
                <div 
                    className="messave-avatar"
                    style={{ 
                        backgroundImage: `url(${message?.sender?.avatar})`,
                        width: '2rem',
                        height: '2rem',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        textAlign: 'center',
                        backgroundSize: '100%',
                        borderRadius: '50%',
                    }}
                >
                </div>
            )}
            {
                (message?.attachments?.length > 0) 
                    ? (
                        <img 
                            src={ message.attachments[0].file }
                            alt="message-attachment"
                            className="message-image"
                            style={{ 
                                marginLeft: isFirstMessageByUser ? '.3rem' : '3rem',
                                maxWidth: '5rem',
                                maxHeight: '10rem',
                            }}
                        />
                    ) 
                    : (
                        <div
                            className="message" 
                            style={{ float: 'left', marginLeft: isFirstMessageByUser ? '.85rem' : '3rem'  }}
                        >
                            { message.text }
                        </div>
                    )
            }
        </div>
    )
}
export default NotMyMessage