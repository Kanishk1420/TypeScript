import { useState } from "react";
interface OrderFormProps {
  onSubmit(order: { name: string; cups: number, price: number}): void;
}
export const OrderForm = ({onSubmit}: OrderFormProps) => {
 const [name, setName] = useState<string>("Matthew");
 const [cups, setCups] = useState<number>(1);
 const [price, setPrice] = useState<number>(0);

const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name, cups, price });
}
  return <form onSubmit={handlesubmit}>
    <label>Food Name:- </label>
    <input 
    value={name}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
    />
    <label>Cups:- </label>
    <input 
    type="number"
    value={cups}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCups(Number(e.target.value))}
    />
    <label>Price:- </label>
    <input 
    type="number"
    value={price}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value))}
    />
    <button type="submit">Place Order</button>
  </form>;
};
