

const Course = ({id, name, code, grade, onDelete}) => {

    let color = ""

    if (parseInt(grade,10) === 5){
        color = "goodgrade"
    }
    else if (parseInt(grade,10) === 4 || parseInt(grade,10) === 3) {
        color = "mediumgrade"
    }
    else {
        color = "badgrade"
    }

    return (
        <div className={`course ${color}`}>
            <h3 >{name}
                <button className="fa fa-times" style={{color: "red", fontSize: 30, cursor: "pointer"}} onClick={() => onDelete(id)}></button>
            </h3>
            <h5>Code: {code}</h5>
            <h5>Hinne: {grade}</h5>
        </div>
    )
}

export default Course
