const EventComponent: React.FC = () => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    }

    const handleDragStart = () => { 
        console.log('ok');
    }

    return <div>
        <input onChange={handleChange} />
        <div draggable onDragStart={handleDragStart}>Dragable</div>
    </div>
}

export default EventComponent;
