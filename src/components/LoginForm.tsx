import { useState } from 'react'

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const authObject = {
            'Project-ID': 'faefd3ca-b618-4bb4-bea6-67fddd729d63',
            'User-Name': username,
            'User-Secret': password
        }
        try {
            await fetch('https://api.chatengine.io/chats', {
                headers: authObject
            })
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            window.location.reload()
        }
        catch (error) {
            setError('Incorrect credentials')
        }
    }
    return (
        <div>
            <div>
                <h1>Login Form</h1>
                <form onSubmit={ handleSubmit }>
                    <input 
                        value={ username } 
                        type="text" 
                        onChange={ (e) => setUsername(e.target.value) }
                        placeholder="username"
                        required
                    />
                    <input 
                        value={ password }
                        type="password"
                        onChange={ (e) => setPassword(e.target.value) }
                        placeholder="password"
                        required
                    />
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                    <h3>{ error }</h3>
                </form>
            </div>
        </div>
    )
}

export default LoginForm