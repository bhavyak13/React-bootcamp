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





//Food <UseParms>hook

// As of react router v6 there is no passing of props via router.
// Instead we have to use functional components
// and react router hooks to detect url changes.

// import React, { Component } from 'react'
// import { Route, Routes, useParams } from 'react-router-dom';
// import './App.css';
// import Food from './ReactRouterPatterns/FoodUseParamsHook';
// function FoodWrapper() {
//   let { foodName } = useParams();
//   return (<Food name={foodName} />)
// }
// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route
//           path='/food/:foodName'
//           element={<FoodWrapper />}
//         />
//       </Routes>
//     </div>
//   )
// }
// export default App


// React routerPattens/MultipleParams
// import React, { useState } from 'react'
// import { Link, Route, Routes, useParams } from 'react-router-dom'
// import FoodSearch from './ReactRouterPatterns/FoodSearchUseNavigate';
// import Drinks from './ReactRouterPatterns/MultipleRouteParms';
// const DrinkWrapper = () => {
//   // console.log(useParams());
//   const { foodItem, drinkItem } = useParams();
//   return (<Drinks foodItem={foodItem} drinkItem={drinkItem} />)
// }
// const NotFound = () => { return <div>404 NOT FOUND!</div> }
// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={<FoodSearch />} />
//         <Route path='/foods/:foodItem/drinks/:drinkItem' element={<DrinkWrapper />} />
//         <Route path='*' element={<NotFound />} />
//       </Routes>
//     </div>
//   )
// }
// export default App


// /*
//Exercise2
//Dog app
import React, { useEffect } from 'react'
import { Navigate, NavLink, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import Dog from './Exercise2DogApp/Dog';
import DogList from './Exercise2DogApp/DogList';
import Navbar from './Exercise2DogApp/Navbar';
const NotFound = () => {
  let navigate = useNavigate();
  useEffect(() => {
    navigate('/dogs')
  })
  return (<h1> Not found</h1>)
}
function App(props) {
  // let navigate = useNavigate();
  // function DogWrapper() {
  //   const { dogName } = useParams();
  //   let dog = props.dogs.filter(dog => dog.name === dogName);
  //   if (dog.length === 0) {
  //     navigate('/dogs');
  //     // this code is giving 
  //     // WARNING : You should call navigate() in a React.useEffect(),
  //     // not when your component is first rendered.
  //   }
  //   else return (<Dog dog={dog[0]} />)
  // }
  const DogWrapper = () => {
    const { dogName } = useParams();
    const dog = props.dogs.filter(dog => dog.name === dogName);
    // console.log(dog);
    return (<Dog dog={dog} />)
  }
  return (
    <div>
      <Navbar dogs={props.dogs} />
      <Routes>
        <Route path='/dogs' element={<DogList dogs={props.dogs} />} />
        <Route path={`/dogs/:dogName`} element={<DogWrapper />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: 'whiskey',
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Hazel",
      age: 3,
      src: 'hazel',
      facts: [
        "Hazel has soooo much energy!",
        "Hazel is highly intelligent.",
        "Hazel loves people more than dogs."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: 'tubby',
      facts: [
        "Tubby is not the brightest dog",
        "Tubby does not like walks or exercise.",
        "Tubby loves eating food."
      ]
    }
  ]
}
export default App;
// */





/*
Exercise 3
Calculator!
*/
// import React from 'react'
// import { Route, Routes, useParams } from 'react-router-dom'
// import Calculator from './Exercise3RouterCalculator/Calculator';
// const NotFound = () => {
//   return (<h1>Not found</h1>)
// }
// function App() {
//   const CalculatorWrapper = () => {
//     const { operation, num1, num2 } = useParams();
//     // console.log(useParams());
//     return (<Calculator operation={operation} num1={num1} num2={num2} />)
//   }
//   return (
//     <div>
//       <Routes>
//         <Route path='' element={<NotFound />} />
//         <Route path='/:operation/:num1/:num2' element={<CalculatorWrapper />} />
//       </Routes>
//     </div>
//   )
// }
// export default App;
