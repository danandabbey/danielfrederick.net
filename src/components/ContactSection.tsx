import '../index.css';

const Contact = () => {
  
  return (
      <div>
        <div className={'contact'}>
          <a className={'link'} href={"http://github.com/danandabbey"} target="_blank">
            <p>GitHub</p>
          </a>
        </div>
        <div className={'contact'}>
          <a className={'link'} href={'mailto:contact@danielfrederick.net?subject=contact'} target="_blank">
            <p>Email</p>
          </a>
        </div>
      </div>
  )
      ;
};

export default Contact;
