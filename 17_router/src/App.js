// import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom';
// import About from './About';
// import './App.css';
// import Contact from './Contact';
// import Dog from './Dog'
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {}
//   }
//   render() {
//     let activeClassName = 'Activeee'
//     return (
//       <div >
//         <nav>
//           <NavLink
//             to='/'
//             className={({ isActive }) => (isActive ? activeClassName : 'navLinks')}
//           >
//             About
//           </NavLink>
//           <NavLink
//             className={({ isActive }) => (isActive ? activeClassName : 'navLinks')}
//             to='/dog'>
//             Dog
//           </NavLink>
//           <NavLink
//             to='/contact'
//             className={({ isActive }) => (isActive ? activeClassName : 'navLinks')}
//           >
//             Contact
//           </NavLink>

//         </nav>
//         <Routes>
//           <Route path='/' element={<About />} />
//           <Route path='/contact' element={<Contact />} />
//           <Route path='/dog' element={<Dog />} />
//         </Routes>
//       </div >
//     )
//   }
// }
// export default App




// Vending Machine Exercise Code!


// import React, { Component } from 'react'
// import { Route, Routes } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import './App.css';
// import VendingMachine from './VendingMachineExercise/VendingMachine';
// import Soda from './VendingMachineExercise/Soda';
// import Lays from './VendingMachineExercise/Lays';
// import Chocolate from './VendingMachineExercise/Chocolate';
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {}
//   }
//   render() {
//     let activeClassName = 'Navbar-active'

//     return (
//       <div>
//         <nav className='Navbar'>
//           <NavLink to='/' className={({isActive}) => (isActive ? activeClassName : undefined)}>Home</NavLink>
//           <NavLink to='/lays' className={({isActive}) => (isActive ? activeClassName : undefined)}>Lays </NavLink>
//           <NavLink to='/soda' className={({isActive}) => (isActive ? activeClassName : undefined)}>Cold Drink</NavLink>
//           <NavLink to='/chocolate' className={({isActive}) => (isActive ? activeClassName : undefined)}>Chocolate</NavLink>
//         </nav>
//         <div className=''>
//           <Routes>
//             <Route path='/' element={<VendingMachine />} />
//             <Route path='/soda' element={<Soda />} />
//             <Route path='/lays' element={<Lays />} />
//             <Route path='/chocolate' element={<Chocolate />} />
//           </Routes>
//         </div>
//       </div>
//     )
//   }
// }
// export default App



import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Food from './ReactRouterPatterns/Food';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Routes>
          <Route
            path='/food/:name'
            element={<Food name='mahadev'/>}
          />
        </Routes>
      </div>
    )
  }
}
export default App