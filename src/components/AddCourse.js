import React from 'react'
import { useState } from 'react'

const AddCourse = ({onAdd}) => {

    const [name, setName] = useState("")
    const [code, setCode] = useState("")
    const [grade, setGrade] = useState(0)

    const onSubmit = (e) => {
        
        e.preventDefault()

        if (!name){
            alert("Name can't be empty!!!")
            return
        }
        
        onAdd({name, code, grade})

        setName("")
        setGrade("")
        setCode("")
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Course name: </label>
                <input type="text" placeholder="Course Name" value={name} onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Course code: </label>
                <input type="text" placeholder="Course Code" value={code} onChange={(e) => setCode(e.target.value)}/>
            </div>
            <div className="form-control-check">
                <label>Grade: </label>
                <input type="radio" value="1" id="one" name="grade" checked={grade === "1"} onChange={(e) => setGrade("1")}/>
                <label htmlFor="one">1</label>
                <input type="radio" value="2" id="two" name="grade" checked={grade === "2"} onChange={(e) => setGrade("2")}/>
                <label htmlFor="two">2</label>
                <input type="radio" value="3" id="three" name="grade" checked={grade === "3" } onChange={(e) => setGrade("3")}/>
                <label htmlFor="three">3</label>
                <input type="radio" value="4" id="four" name="grade" checked={grade === "4"} onChange={(e) => setGrade("4")}/>
                <label htmlFor="four">4</label>
                <input type="radio" value="5" id="five" name="grade" checked={grade === "5"} onChange={(e) => setGrade("5")}/>
                <label htmlFor="five" >5</label>
            </div>
            <input type="submit" value="Save Course" className="btn btn-block"/>
        </form>
    )
}

export default AddCourse
