import '../assets/scss/Message.scss'

interface Props {
    message: any
}

export const MyMessage: React.FC<Props> = ({ message }) => {
    if (message?.attachments?.length > 0) {
        return (
            <img 
                src={ message.attachments[0].file }
                alt="message-attachment"
                className="message-image"
                style={{ 
                    float: 'right',
                    maxWidth: '5rem',
                    maxHeight: '10rem',
                }}
            />
        )
    }
    return (
        <div className="message" style={{ float: 'right', marginRight: '1rem',   }}>
            { message.text }
        </div>
    )
}
export default MyMessage