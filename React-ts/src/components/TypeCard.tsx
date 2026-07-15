import type { PropsWithChildren, ReactNode } from "react";
interface CardsProps extends PropsWithChildren {
  title: string;
  footer?: ReactNode; // ReactNode is a type that represents any valid React child, including elements, strings, numbers, fragments, portals, and arrays of these types. It is used to define the type of the footer prop in the CardsProps interface.
}
const TypeCard = ({ title, footer, children }: CardsProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <div>{children}</div>
      {footer && <footer>{footer}</footer>}
    </section>
  );
};

export default TypeCard;
