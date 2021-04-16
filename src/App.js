
import './App.css';
import{useState} from 'react'
import Header from './components/Header'
import Users from './components/Users'
import Button from './components/Button'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [users,setUsers] = useState([{
    id:1,
    name:'First User',
    doller: 0,
  },
  {
    id:2,
    name:'Second User',
    doller: 10,
  },
  {
    id:3,
    name:'Third User',
    doller: 30,
  }
  ])
  //Add Task
  const addTask =(user) =>{
    

    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...user }
    console.log(newTask)
    setUsers([...users, newTask])
    console.log([...users, newTask])
  }

  //Array Doller
  const arryDoller=[];
  users.forEach(el=>{
    arryDoller.push(el.doller)
  })

 
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
  // const onClickClear=()=>{
  //   setUsers.users.map((user)=>user.doller=0)
  // }
  const onClickPlus=(id)=>{
    setUsers(users.map(user=>user.id===id ? {...user,doller:user.doller+10}: user))
   }

   const onClickMinus=(id)=>{
    setUsers(users.map(user=>user.id===id ? {...user,doller:user.doller-10}: user))
   }
   const  onClickClear=()=>{
    setUsers(users.map(user=>({...user,doller:0})))
   }
  return (
    <div className="App">
      <div className='container'>
          <Header onAdd={() => setShowAddTask(!showAddTask)}  showAdd={showAddTask}/>
          {showAddTask && <AddTask onAdd={addTask}/>}
          <Users users={users} onPlus={onClickPlus} onMinus={onClickMinus}/>
          <p className='task'>Total : {arryDoller.reduce(reducer)}</p>
          <Button color='red' text='Clear' onClick={onClickClear}></Button>
      </div>
      
    </div>
  );
}

export default App;
