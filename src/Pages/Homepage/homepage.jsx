// import React from "react";

// const Home = () => {
//   return (
//     <div className="bg-[#efe3b8] flex flex-row justify-center w-full">
//       <div className="bg-[#efe3b8] overflow-hidden w-[1020px] h-[600px] relative">
//         {/* Your home component content goes here */}
//         <div className="absolute w-[252px] h-[292px] top-[106px] left-[76px]">
//           <img className="w-[250px] absolute h-[248px] top-0 left-0" alt="Rectangle" src="rectangle-27.svg" />
//           <div className="absolute top-[275px] left-[8px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[normal]">
//             Skin care
//           </div>
//         </div>
//         <div className="absolute w-[252px] h-[274px] top-[158px] left-[367px]">
//           <img
//             className="w-[250px] object-cover absolute h-[248px] top-0 left-0"
//             alt="Rectangle"
//             src="rectangle-28.png"
//           />
//           <div className="absolute top-[257px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[normal]">
//             MakeUp
//           </div>
//         </div>
//         <div className="absolute w-[250px] h-[275px] top-[106px] left-[675px]">
//           <img
//             className="w-[248px] object-cover absolute h-[248px] top-0 left-0"
//             alt="Rectangle"
//             src="rectangle-29.png"
//           />
//           <div className="absolute top-[258px] left-[10px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[normal]">
//             Fragrances
//           </div>
//         </div>
//         <div className="absolute w-[1044px] h-[131px] top-[470px] left-0">
//           <div className="absolute top-[43px] left-[874px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#efe3b8] text-[12px] tracking-[0] leading-[normal]">
//             Ngong Lane
//           </div>
//           <div className="top-[90px] absolute left-[874px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#efe3b8] text-[12px] tracking-[0] leading-[normal]">
//             Celestialskin@gmail.com
//           </div>
//           <div className="top-[67px] absolute left-[874px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#efe3b8] text-[12px] tracking-[0] leading-[normal]">
//             0720856222
//           </div>
//           <footer className="absolute w-[1044px] h-[131px] top-0 left-0 bg-transparent">
//             <div className="relative w-[1020px] h-[131px] bg-variable-collection-dark-mode">
//               <div className="absolute top-[21px] left-[874px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#efe3b8] text-[14px] tracking-[0] leading-[normal]">
//                 ADDRRESS
//               </div>
//               <div className="absolute top-[24px] left-[507px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#efe3b8] text-[14px] tracking-[0] leading-[normal]">
//                 ABOUT US
//               </div>
//               <div className="absolute top-[21px] left-[707px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#efe3b8] text-[14px] tracking-[0] leading-[normal]">
//                 SHOP
//               </div>
//               <div className="absolute top-[46px] left-[510px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#efe3b8] text-[12px] tracking-[0] leading-[normal]">
//                 Home
//               </div>
//               <div className="absolute top-[69px] left-[507px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#efe3b8] text-[12px] tracking-[0] leading-[normal]">
//                 Contact us
//               </div>
//               <p className="absolute top-[35px] left-[30px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#efe3b8] text-[20px] tracking-[0] leading-[normal]">
//                 <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#efe3b8] text-[20px] tracking-[0]">
//                   Celestial Skins <br />
//                 </span>
//                 <span className="text-[14px]">Beauty Shop</span>
//               </p>
//               <div className="absolute top-[45px] left-[874px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#efe3b8] text-[12px] tracking-[0] leading-[normal]">
//                 Ngong Lane
//               </div>
//               <div className="top-[92px] absolute left-[874px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#efe3b8] text-[12px] tracking-[0] leading-[normal]">
//                 Celestialskin@gmail.com
//               </div>
//               <div className="top-[69px] absolute left-[874px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#efe3b8] text-[12px] tracking-[0] leading-[normal]">
//                 0720856222
//               </div>
//               <div className="absolute top-[46px] left-[706px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#efe3b8] text-[12px] tracking-[0] leading-[normal]">
//                 Scents
//               </div>
//               <div className="absolute top-[69px] left-[708px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#efe3b8] text-[12px] tracking-[0] leading-[normal]">
//                 Makeup
//               </div>
//               <div className="absolute top-[92px] left-[705px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#efe3b8] text-[12px] tracking-[0] leading-[normal]">
//                 Skin Care
//               </div>
//             </div>
//           </footer>
//         </div>
//         <div className="absolute w-[906px] h-[67px] top-[9px] left-[19px]">
//           <img className="absolute w-[15px] h-[18px] top-[16px] left-[880px]" alt="Vector" src="image.svg" />
//           <img className="absolute w-[18px] h-[12px] top-[22px] left-[752px]" alt="Vector" src="vector-2.svg" />
//           <img className="absolute w-[22px] h-[20px] top-[18px] left-[791px]" alt="Vector" src="vector.svg" />
//           <img className="absolute w-[844px] h-[3px] top-[61px] left-[60px] object-cover" alt="Line" src="line-1.svg" />
//           <div className="absolute w-[474px] h-[40px] top-[8px] left-[205px] bg-[#efe3b8] rounded-[15px] border border-solid border-black">
//             <p className="absolute top-[12px] left-[44px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]">
//               Search for beauty Brands and Products
//             </p>
//             <img className="absolute w-[18px] h-[18px] top-[13px] left-[14px]" alt="Vector" src="vector-3.svg" />
//           </div>
//           <img
//             className="absolute w-[57px] h-[67px] top-0 left-0 object-cover"
//             alt="Celestial skins high"
//             src="celestial-skins-high-resolution-logo-black-transparent-1.png"
//           />
//           <img className="absolute w-[22px] h-[19px] top-[15px] left-[836px]" alt="Vector" src="vector-4.svg" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;





import React from 'react';

const Homepage = () => {
  return (
    <div style={{ backgroundColor: '#EFE3B8', minHeight: '100vh', padding: '0px' }}>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="relative bg-yellow-100 p-4 rounded">
            <input
              type="text"
              placeholder="Search for beauty Brands and Products"
              className="w-full p-2 rounded border border-gray-300"
            />
            <button className="absolute right-4 top-4">
              <img src="path/to/search-icon.png" alt="Search" />
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button>
            <img src="path/to/cart-icon.png" alt="Cart" />
          </button>
          <button>
            <img src="path/to/user-icon.png" alt="User" />
          </button>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ backgroundColor: '#FFFFCC', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
          <h2>Skincare</h2>
          <img src="path/to/skin-care.jpg" alt="Skin care" style={{ width: '100%' }} />
        </div>
        <div style={{ backgroundColor: '#FFFFCC', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
          <h2>Makeup</h2>
          <img src="path/to/makeup.jpg" alt="Makeup" style={{ width: '100%' }} />
        </div>
        <div style={{ backgroundColor: '#FFFFCC', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
          <h2>Fragrances</h2>
          <img src="path/to/fragrances.jpg" alt="frangrances" style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;