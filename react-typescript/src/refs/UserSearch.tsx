import { useState, useRef, useEffect} from "react";

const mockData = [
    { name: "Sarah", age: 20 },
    { name: "Emil", age: 30 },
    { name: "Rondha", age: 24 },
    { name: "Alex", age: 28 }
];

const users = mockData;

const UserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string, age: number} | undefined>();

    const handleClick = () => {
        const foundUser = users.find(item => item.name === name);
        setUser(foundUser);
    }

    useEffect(() => {
        if (!inputRef.current) {
            return;
        }
        inputRef.current.focus();
    }, []);

    
    return <div>
        <h3>User Search</h3>
        <input ref={inputRef}  onChange={(ev) => setName(ev.target.value)} value={name} />
        <button onClick={handleClick}>Find user</button>
        <div>
            {user?.name ? <>User details<p><span>{user.name}</span>, <span>{ user.age}</span></p></> : 'Not found'}
        </div>
    </div>
    
}

export default UserSearch;
