import { useState, useRef, useEffect } from 'react'

const users = [
    {
        name: 'Sarah', 
        age:20
    }, 
    {
        name: 'Alex', 
        age: 30
    },
    {
        name: 'Michael', 
        age:25
    }
];

const UserSearch = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string, age: number } | undefined>();
    
    const onClick = () => {
        const foundUSer = users.find((user) => {
            return user.name === name
        })
        setUser(foundUSer)
    } 
    
    useEffect(() => {
        if(!inputRef.current) {
            return;
        }
        inputRef.current.focus()
    }, [])
    
  return (
    <div>UserSearch
        <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={onClick}>Find User</button> 
        <div>
          {user && user.name} <br />
          {user && user.age}
        </div>
    </div>
  )
}

export default UserSearch