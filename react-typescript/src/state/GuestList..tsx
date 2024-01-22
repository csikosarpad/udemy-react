import { useState } from "react";

const GuestList: React.FC = () => {
    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]);

    const handleClick = () => {
        setName('');
        setGuests([...guests, name]);
    }

    return <div>
        <h3>Guest List</h3>
        <ul>
        {guests.map((guest,index) => {
            return <li key={index}>{ guest}</li>
            
        })}
        </ul>
        
        <input value={name} onChange={(ev)=>setName(ev.target.value)}/>
        <button onClick={handleClick}>Add Guest</button>
    </div>
}

export default GuestList;
