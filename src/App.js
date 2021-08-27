import  Header  from './components/Header';
import Courses from './components/Courses';
import AddCourse from './components/AddCourse';
import Average from './components/Average';
import Footer from './components/Footer';
import About from './components/About';

import { BrowserRouter, Route } from "react-router-dom"
import { useState, useEffect } from 'react'

function App() {
    const [courses, setCourses] = useState([])

    const[showForm, setShowForm] = useState(false)

    
        

    useEffect(() => {
      const getCourses = async () => {
        const coursesFromApi = await fetchCourses()
        setCourses(coursesFromApi);
      }

      getCourses();
    }, [])

    const fetchCourses = async () => {
        const response = await fetch("http://localhost:5500/courses")
        const data = await response.json()

        
        return data;
    }

    const addCourse = async (course) => {

     const response = await fetch(
       
      "http://localhost:5500/courses",
      
      {method: "POST", 
                                                                  
      headers:{"Content-type": "application/json"},
                                                                  
      body: JSON.stringify(course)}
      
      )

      const data = await response.json();

      setCourses([...courses, data])
      setShowForm(false)


    }
      
    const deleteCourse = async (id) => {

      await fetch(`http://localhost:5500/courses/${id}`, {method: "DELETE"}) 

      setCourses(courses.filter((course) => course.id !== id))

    }
  

  return (

    <BrowserRouter>
    <div className="container">
     <Header onAdd={() => setShowForm(!showForm)} showAdd={showForm}/>
     
     
     <Route path="/" exact render={(props) => 
      
      (<>
      {showForm && <AddCourse onAdd={addCourse}/>}
      <Courses courses={courses} onDelete={deleteCourse}/>
      <Average courses={courses}/>
      <Footer/>
     </>)}/>
     <Route path="/about" component={About}/>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
