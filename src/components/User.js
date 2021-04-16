import {FaPlusCircle} from 'react-icons/fa'
import {FaMinusCircle} from 'react-icons/fa'

const User = ({user,onPlus,onMinus}) => {
 
  return (
    <div className='task'>
      <h3>{user.name}</h3>
      <p>{user.doller}</p>
      <p><FaPlusCircle onClick={()=>onPlus(user.id)}/></p>
      <p><FaMinusCircle onClick={()=>onMinus(user.id)}/></p>
    </div>
  )
}

export default User
