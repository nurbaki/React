
import Msg from './Msg';

const Person = (props) => {
 console.log(props);
const{name, img, tel}=props;

  return (
    <div>
    <h2>{name}</h2>
    <p>{tel}</p>
   <Msg nameMsg={name}
    telMsg={tel}
   />
    <img src={img} alt="foto" />
    </div>
  )
}

export default Person