import {useState} from 'react'

const AddTask = ({onAdd}) => {
  const [name, setText] = useState('')
  const [doller, setDoller] = useState(0)

  const onSubmit=(e)=>{
    e.preventDefault()
    if(!name){
      alert('Please Add User')
      return
    }
    onAdd({name,doller})
    setText('')
    setDoller(0)
  }
  return (
    <div>
      <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Enter User</label>
        <input
          type='text'
          placeholder='Add User'
          value={name}
          onChange={(e)=>setText(e.target.value)}
        />
      </div>
      

      <input type='submit' value='Save User' className='btn btn-block' />
    </form>
    </div>
  )
}

export default AddTask
