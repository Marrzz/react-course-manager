import React from 'react'
import Course from './Course'




const Courses = ({courses, onDelete}) => {

    
    return (
        <div>
            {courses.length === 0 ? <h2 style={{textAlign: "center"}}>Please add a course!</h2> : courses.map( course => 
                (<Course id={course.id} key={course.id} name={course.name} grade={course.grade} code={course.code} onDelete={onDelete}/>)
                 )}
        </div>
    )
}

export default Courses
