import '../index.css';

const ContactCard = (props: any) => {
  const { destination, text } = props;
  const mobile: boolean = window.innerWidth <= 900;

  if (mobile) {
    return (
      <div className={'contact'}>
        <a className={'link'} href={destination} target="_blank">
          <p>{text}</p>
        </a>
      </div>
    );
  } else {
    return (
      <div className={'contact'}>
        <a className={'link'} href={destination} target="_blank">
          <p>
            {text}{" "}
          </p>
        </a>
      </div>
    );
  }
};

export default ContactCard;
