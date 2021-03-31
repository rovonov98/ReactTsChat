interface Props {
    message: any,
    lastMessage: any
}

export const NotMyMessage: React.FC<Props> = ({ message, lastMessage }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username

    return (
        <div className="message-row">
            { isFirstMessageByUser && (
                <div 
                    className="messave-avatar"
                    style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
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
                            style={{ marginLeft: isFirstMessageByUser ? '.3rem' : '3rem' }}
                        />
                    ) 
                    : (
                        <div
                            className="message" 
                            style={{ float: 'left', marginLeft: isFirstMessageByUser ? '.3rem' : '3rem'  }}
                        >
                            { message.text }
                        </div>
                    )
            }
        </div>
    )
}
export default NotMyMessage