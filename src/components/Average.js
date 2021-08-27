import React from 'react'

function Average({courses}) {
    
    let averageGrade = 0;
    
   for (let i = 0; i < courses.length; i++){
       averageGrade += parseInt(courses[i].grade, 10)
   }

    return (
        <div>
            {courses.length > 0 && <h4 className={" h4"}>
                Your grade point average is: { Math.round((averageGrade / courses.length) * 1000) /1000 }
            </h4>}
        </div>
    )
}

export default Average
