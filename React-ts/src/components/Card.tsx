type CardProps = {
  name: string;
  price: number;
  isSpecial?: boolean;
};
export const Card = ({ name, price, isSpecial = false }: CardProps) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{price}</p>
      {isSpecial && <p>Special Offer!</p>}
    </div>
  );
};
