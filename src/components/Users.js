import User from './User'

const Users = ({users,onPlus,onMinus}) => {
 
  return (
    <>
     {users.map((user)=>(<User key={user.id} user={user} onPlus={onPlus} onMinus={onMinus} ></User>))} 

     
    </>
  )
}

export default Users
