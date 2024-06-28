export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`;

  const handleClick = () => {
    console.log('click en el ' + index);
    updateBoard(index);
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
