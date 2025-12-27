import '../App.css'

const Website = ({name, url}: {name:string, url:string}) => {
  return (
    <>
      <div>
        <a href={url}>
        <h2>{name}</h2>
        </a>
      </div>
    </>
  )
}

export default Website