import { Card } from "./components/Card";
import Counter from "./components/Counter";
import List from "./components/List";
import { OrderForm } from "./components/OrderForm";
import type { Todo } from './types';
const menu: Todo[] = [
  { id: 1, name: "Headphones", price: 100 },
  { id: 2, name: "Speakers", price: 200 },
  { id: 3, name: "Microphone", price: 70 },
];
const App = () => {
  return (
    <div>
      <Card 
      name="Headphones" 
      price= {10} 
      isSpecial={true} />
      <Counter/>
      <List items={menu}/>
      <OrderForm onSubmit={(order) => {
        console.log(`Order received: ${order.name}, ${order.cups} cups, Price: ${order.price}`);
      }}/>
    </div>
  );
};

export default App;
