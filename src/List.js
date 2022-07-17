import {useState} from "react";
import data from "./data"

const List =()=> {
    const [people, setPeople] = useState(data);
    const removeItem = (id) => {
        let newList = people.filter(person => person.id !== id);
        setPeople(newList);
    }
    return (
        <>
       <p>{people.map((person)=>{
        const {id,name,age,img} = person;
        return (
            <article key={id} className="person">
                    <img src={img} alt={name} className="images" />
                    <div className="personInfo">
                        <h3>{name}</h3>
                        <p>{age}</p>
                        <button className="delete" onClick={()=> removeItem(id)}>x</button>
                    </div>
                    
            </article>
        )
       })}</p>
        </>
    )
}

export default List