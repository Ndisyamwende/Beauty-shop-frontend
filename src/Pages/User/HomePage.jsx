// import React, { useState, useEffect, useContext} from "react";
// import { Link } from "react-router-dom";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import Footer from "../../Components/User/Footer";
// import Navbar from "../../Components/User/Navbar";
// import { ThemeContext } from "../../Components/User/ThemeContext";

// function Homepage() {
//   const { darkTheme } = useContext(ThemeContext);
//   const [categories, setCategories] = useState([]);
//   const [currentId, setCurrentId] = useState(0);

//   useEffect(() => {
//     const fetchedCategories = [
//       { id: 1, name: "Skin Care", src= "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" " },
//       { id: 2, name: "Make Up", image: "/src/assets/icons/makeupicon.png" },
//       {
//         id: 3,
//         name: "Fragrance",
//         image: "/src/assets/icons/Fragrancesicon.png",
//       },
//       {
//         id: 4,
//         name: "Beard Gang",
//         image: "/src/assets/icons/Beardgangicon.jpg",
//       },
//     ];
//     setCategories(fetchedCategories);
//   }, []);

//   const handleNext = () => {
//     setCurrentIndex((prevId) => (prevId + 1) % categories.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? categories.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <>

//           <div className={darkTheme ? 'bg-[#A6603A] text-white' : 'bg-[#efe3b8] text-[#3A1C0E]'}>
//       <Navbar />

//         <section>
//           <h1 className="font-bold text-center text-4xl mt-4">WELCOME TO CELESTIAL SKINS</h1>
//           <h2 className=" text-center text-xl">The one stop shop for glowing skin</h2>
//           <h3>Browse by categories</h3>
//         <div className="flex flex-wrap justify-center lg:justify-between items-center mt-5 mx-4">
//           <div className="flex flex-col items-center mb-4 lg:mb-0">
//             <Link to="/skincare">
//               <img
//                 src="/src/assets/icons/Skincareicon.png"
//                 alt="Skin Care"
//                 className="max-w-full h-50 w-60"
//               />
//             </Link>
//             <h2 className="mt-5">Skin Care</h2>
//           </div>
//           <div className="flex flex-col items-center mb-4 lg:mb-0">
//             <Link to="/makeup">
//               <img
//                 src="/src/assets/icons/makeupicon.png"
//                 alt="Make Up"
//                 className="max-w-full h-50 w-60"
//               />
//             </Link>
//             <h2 className="mt-7">Make Up</h2>
//           </div>
//           <div className="flex flex-col items-center">
//             <Link to="/fragrances">
//               <img
//                 src="/src/assets/icons/Fragrancesicon.png"
//                 alt="Fragrance"
//                 className="max-w-full h-50 w-60"
//               />
//             </Link>
//             <h2 className="mt-7">Fragrance</h2>
//           </div>
//           <div className="flex flex-col items-center">
//             <Link to="/beardgang">
//               <img
//                 src="/src/assets/icons/Beardgangicon.jpg"
//                 alt="beardgang"
//                 className="max-w-full h-50 w-60"
//               />
//             </Link>
//             <h2 className="mt-7">Beard Gang</h2>
//           </div>
//           </div>
//           </section>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default Homepage;



import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Footer from "../../Components/User/Footer";
import Navbar from "../../Components/User/Navbar";
import { ThemeContext } from "../../Components/User/ThemeContext";

function Homepage() {
  const { darkTheme } = useContext(ThemeContext);
  const [categories, setCategories] = useState([]);
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    const fetchedCategories = [
      { id: 1, name: "Skin Care", src: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 2, name: "Make Up", src: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 3, name: "Fragrance", src: "https://images.unsplash.com/photo-1541108564883-bec8126021f5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 4, name: "Beard Gang", src: "data:image/jpeg;base64,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" },
    ];
    setCategories(fetchedCategories);
  }, []);

  const handleNext = () => {
    setCurrentId((prevId) => (prevId + 1) % categories.length);
  };

  const handlePrev = () => {
    setCurrentId((prevId) => (prevId === 0 ? categories.length - 1 : prevId - 1));
  };

  return (
    <>
      <div className={darkTheme ? 'bg-[#A6603A] text-white' : 'bg-[#efe3b8] text-[#3A1C0E]'}>
        <Navbar />

        <section>
          <h1 className="font-bold text-center text-4xl mt-4">WELCOME TO CELESTIAL SKINS</h1>
          <h2 className=" text-center text-xl">The one stop shop for glowing skin</h2>
          <h3>Browse by categories</h3>
          <div className="flex flex-wrap justify-center lg:justify-between items-center mt-5 mx-4">
            {categories.map((category) => (
              <div key={category.id} className="flex flex-col items-center mb-4 lg:mb-0">
                <Link to={`/${category.name.toLowerCase().replace(' ', '')}`}>
                  <img
                    src={category.src}
                    alt={category.name}
                    className="max-w-full h-50 w-60"
                  />
                </Link>
                <h2 className="mt-5">{category.name}</h2>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Homepage;

