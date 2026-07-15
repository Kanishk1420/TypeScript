import type { Todo } from '../types';
interface ListProps {
  items: Todo[];
}
const List = ({items}: ListProps) => {
  return (
    <div>
     {items.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
            <p>{item.price}</p>
            {item.isSpecial && <p>Special Offer!</p>}
        </div>
      ))}
    </div>
  )
}

export default List
