import ContactCard from "./ContactCard";
import '../index.css';

const Contact = () => {

  const cards = [
    {
      name: "Github",
      destination: "http://github.com/danandabbey",
    },
    {
      name: "Email",
      destination: "mailto:contact@danielfrederick.net?subject=contact",
    },
  ];

  return (
    <div id={"contactCon"} className={'contactCon'}>
      {cards.map((card) => {
        return (
          <ContactCard
            key={card.name}
            text={card.name}
            destination={card.destination}
          />
        );
      })}
    </div>
  );
};

export default Contact;
