import { useState } from 'react';
import './App.css';
import SearchComponent from './component/SearchComponent';
import ShowCourseComponent from './component/ShowCourseComponent';
import UserCartComponent from './component/UserCartComponent';
import IPhone from './Images/violetiphone.png';
import OnePlus from './Images/oneplus.png';
import Oppo from './Images/oppoa.jpg';
import RedmiNote from  './Images/redminote9.jpg';


function App() {
  const[course, setCourse]=useState([
    {
      id:1,
      name:'I-phone',
      price:50000,
      image:IPhone
    },
    {
      id:2,
      name:'One Plus',
      price:40000,
      image:OnePlus
    },
    {
      id:3,
      name:'Redmi Note 9',
      price:30000,
      image:RedmiNote
    },
    {
      id:4,
      name:'Oppo',
      price:30000,
      image:Oppo
    }
  ]);

  const [cartCourse, setCartCourse]=useState([]);
  const [searchCourse, setSearchCourse]=useState('');

  const addCourseToCartFunction=(teccourse)=>{
    const alreadyCourse=cartCourse.find(item=>item.product.id === teccourse.id);
    if(alreadyCourse){
      const latestCartUpdate=cartCourse.map(item=>item.product.id ===teccourse.id ? {
        ...item,quantity:item.quantity +1
      }
      :item
      );
      setCartCourse(latestCartUpdate);
    }else{
      setCartCourse([...cartCourse,{product:teccourse, quantity :1}]);

    }
  };
  const deletCourseFromCartFunction=(teccourse)=>{
    const updatedCart=cartCourse.filter(item=>
      item.product.id !== teccourse.id);
      setCartCourse(updatedCart);
  };
  const totalAmounyCalculationFunction=()=>{
    return cartCourse.reduce((total,item)=>
    total +item.product.price*item.quantity,0);
  };
  const courseSearchUserFunction=(event)=>{
    setSearchCourse(event.target.value);
  };

  const filterCourseFunction=course.filter((course)=>
  course.name.toLowerCase().includes(searchCourse.toLowerCase())
  );
  return (
    <div className="App">
      <SearchComponent searchCourse={searchCourse}
      courseSearchUserFunction={courseSearchUserFunction}
      />
      <main className='App-main'>
        <ShowCourseComponent
        course={course}
        filterCourseFunction={filterCourseFunction}
        addCourseToCartFunction={addCourseToCartFunction}
        />
      </main>
      <UserCartComponent
      cartCourse={cartCourse}
      deleteCourseFromCartFunction={deletCourseFromCartFunction}
      totalAmountCalculationFunction={totalAmounyCalculationFunction}
      setCartCourse={setCartCourse}
      />
    </div>
  );
}

export default App;
