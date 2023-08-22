import './App.css'
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import  All from './All'
import Fullstack from './Fullstack'
import Datascience from './Datascience'
import Cybersecurity from './Cybersecurity'
import Career from './Career'
//  import Card from './Card'


function App() {
  
  return (
 

   <Router>

<header>
    <ul className="cor">
        BLOGS
        COURSE
       LIVE COURSE
    </ul>
    <hr></hr>
    <br></br>
    <img src="https://res.cloudinary.com/dtsc3z4wd/image/upload/v1692688809/cloud_pwzqxr.png" class="card-img-top" alt="image" />  

  </header>
<hr></hr>

   <div>
           <nav className="navbar">
        
    
             <Link to="/">All</Link> 
           
             <Link to="/fullstack">Fullstackdevelopment</Link> 
                        
             <Link to="/datascience">Datasciencs</Link>

             <Link to="/cybersecurity">Cybersecurity</Link>

             <Link to="/career">Career</Link>
           
      </nav>
      <hr></hr>

      <Routes className="row">
         <Route path="/" exact Component={All}></Route>
        <Route path="/fullstack" exact Component={Fullstack}></Route>
        <Route path="/datascience" exact Component={Datascience}></Route>
        <Route path="/cybersecurity" exact Component={Cybersecurity}></Route>
        <Route path="/career" exact Component={Career}></Route>
        
      </Routes>
    </div>
   </Router>
  )
}

export default App












