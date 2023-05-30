import "./Form.css"
import { useState } from "react";
import Label from '../components/FormItems/Label';

const Form = (props)=>{

    const [id,setID] = useState ("")
    const [price,setPrice] = useState("")
    const [name,setName] = useState("")
    const[category,setCategory] = useState("")

    const idHandler = (e)=>{
        setID(e.target.value)
    }
    const priceHandler = (e)=>{
        setPrice(e.target.value)
    }
    const nameHandler = (e)=>{
        setName(e.target.value)
    }
    const categoryHandler = (e)=>{
        setCategory(e.target.value)
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        let item = {
            key:id,
            price:price,
            name:name,
            category:category
        }
        let a = (item)=>{
            return new Promise((res, rej)=>{
                let newitem = JSON.stringify(item)
                res(window.localStorage.setItem(item.key,newitem))


        })
    }
    a(item).then(()=>{
        props.getItem(item)
        setCategory("")
        setName("")
        setID("")
        setPrice("")

    })
        


    }


    return(
        <div className='form'>
        <Label>Product ID: </Label>
    <input type="text" onChange={idHandler} value={id}></input>
    <Label>Selling Price: </Label>
    <input type="text" onChange={priceHandler} value={price}></input>
    <Label>Produuct Name:  </Label>
    <input type="text" onChange={nameHandler} value={name}></input>
    <Label>Choose a Category:  </Label>
    <select onChange={categoryHandler} >
        <option onChange={categoryHandler} value={"Food"}>Food</option>
        <option onChange={categoryHandler} value={"Electronics"}>Electronics</option>
        <option onChange={categoryHandler}value={"Skincare"}>Skincare</option>
    </select>
    <input id="submit" onClick={submitHandler} type="submit" />
    </div>
    )



}

export default Form;