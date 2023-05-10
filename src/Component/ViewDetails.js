import React,{useEffect, useState} from 'react'
import './main.css'

function ViewDetails(props) {

    const[spItem, setspItem] = useState([])

    useEffect(() => {
        const list = props.items;
        const id = props.id;
        setspItem(list.find(item => item.id === id));
        console.log(id)
    }, [props.items])
    

  return (
    <div className='container'>
        ViewDetails
        <hr></hr>
        <div>
            <p>Title</p>
            <p>description</p>
        </div>
    </div>
  )
}

export default ViewDetails