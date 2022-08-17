interface ChildProps {
  color: string,
  onClick: () => void,
  name: string,
  age: number
}

export const Child = ({color, onClick, name, age}: ChildProps) => {
  return (
    <div>
      {color} 
      <button onClick={onClick}>click me</button> 
      <span>{name}</span> 
      <p>{age}</p>
    </div>
  )
}

export const Child2 = () => {
  return (
    <div>Child2</div>
  )
}
