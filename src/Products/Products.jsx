import Item from "./Item"

const Products = (props)=>{


    const elecs = props.items.filter((item)=>{
        return item.category=="Electronics" 
        

    })

    const foods =  props.items.filter((item)=>{
        return item.category=="Food" 
        

    })
    const skincares =  props.items.filter((item)=>{
        return item.category=="Skincare" 
        

    })


  
    return(
        <div>
            <div>
                <h2>Electronic</h2>
                {elecs.length>0 &&
                elecs.map((item)=>{
                   return( <Item key={item.key}>{item.name}-{item.price}</Item>)
                })
                   
                 }

            </div>
            <div>
            <h2>Food</h2>
            {foods.length>0 &&
                foods.map((item)=>{
                   return( <Item key={item.key}>{item.name}-{item.price}</Item>)
                })
                   
                 }
                
            </div>
            <div>
            <h2>Skincare</h2>
            {skincares.length>0 &&
                skincares.map((item)=>{
                   return( <Item key={item.key}>{item.name}-{item.price}</Item>)
                })
                   
                 }
                
            </div>

        </div>
    )
}

export default Products