import { useState } from 'react'
import { sendMessage, isTyping } from 'react-chat-engine'
import '../assets/scss/MessageForm.scss'
import uploadSVG from '../assets/img/upload.svg'

interface Props {
    chatId: number,
    creds: object
}

const MessageForm: React.FC<Props> = (props) => {
    const [value, setValue] = useState<string>('')
    const { chatId, creds } = props
    const handleSubmit = (event: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLInputElement>): void => {
        event.preventDefault()
        const text = value.trim()
        if (text.length > 0) sendMessage(creds, chatId, { text })
        setValue('')
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(event?.target.value)
        isTyping(props, chatId)
    }
    const handleUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
        sendMessage(creds, chatId, { files: event.target.files, text: '' })
    }
    return (
        <form className="message-form" onSubmit={ handleSubmit }>
            <input 
                type="text"
                className="message-input"
                placeholder="Write your message here..."
                value={ value }
                onChange={ handleChange }
                onSubmit={ handleSubmit }
            />
            <label htmlFor="upload-button">
                <span className="image-button"> 
                <img className="svg-image" src={ uploadSVG } alt="w"/>
                    {/* upload */}
                </span>
            </label>
            <input 
                type="file"
                multiple={ false }
                id="upload-button"
                style={{ display: 'none' }}
                onChange={ handleUpload }
            />
            <button 
                type="submit"
                className="submit-button"
            > Submit
            </button>
        </form>
    )
}
export default MessageForm