
const EventComponent = () => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
        console.log(event.target.value);
    }
    const onDragStart = (event: React.DragEvent<HTMLDivElement> ) => {
        console.log('Dragged'); 
    }
  return (
    <div>
        <input onChange={onChange}/> 
        <div draggable onDragStart={onDragStart}>Drag Me!</div>
    </div>
  )
}

export default EventComponent