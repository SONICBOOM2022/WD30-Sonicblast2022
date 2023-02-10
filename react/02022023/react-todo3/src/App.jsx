import {useEffect, useState} from "react"
import {Button} from "@mui/material"
import SendIcon from '@mui/icons-material/Send'


function App() {
  const [input, setInput] = useState("")
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)
  
useEffect(() => {
  return computeTotal()
},[list])



  function handleAddOnClick() {
    const newItem = {
      itemName : input,
      quantity : 1,
      isSelected : false
    }
    const newItems = [...list, newItem]
    setList(newItems)
    setInput('')
    // console.log(list)
  }
  const handleIncrement = (index) => {
    const incrementItem = [...list]
    incrementItem[index].quantity++
    setList(incrementItem)
  }
  const handleDecrement = (index) => {
    const decrementItem = [...list]
    decrementItem[index].quantity--
    setList(decrementItem)
  }
  const handleComplete = (index) => {
    const itemTarget = [...list]
    itemTarget[index].isSelected = !itemTarget[index].isSelected     
    setList(itemTarget)
    console.log(itemTarget)
  }
  const computeTotal = () => {
    const calculateTotal = list.reduce((total, item) => {
    return total + item.quantity
    }, 0)
    setTotal(calculateTotal)
}

  return(
      <div className="container">
        <div className="cart-box">
          <input type="text" onChange={(e) => setInput(e.target.value)} value={input}/>
          <Button variant="contained" size="large" startIcon ="" onClick={() => handleAddOnClick()}>Add</Button>


          <ul>
            {list.map((item, index) => (
              <li>
                <input type="checkbox" onChange={() => handleComplete(index)}/>
                <span style={{ textDecoration: item.isSelected ? 'line-through' : ""  }}>{item.itemName}</span>
                <button onClick={() => handleDecrement(index)}>-</button> {item.quantity}<button onClick={() => handleIncrement(index)}>+</button>
              </li>
            ))}
            
          </ul>
          <div className="total-holder">
              Total: {total}
          </div>
        </div>
      </div>


  )
}

export default App