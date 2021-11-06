// import React from 'react'
// import tw from tailwind-styled-components'
// import Map from './components/Map'
// import { useEffect } from 'react'

// const Confirm = ()=>{

//     const getCoordinates =()=> {
//         const location = "Santa Monica";
//         fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?`+ 
//         new URLSearchParams){
//             mapboxgl.accessToken =
//   'pk.eyJ1IjoidmVua2F0ZXM5dWkiLCJhIjoiY2t2bWszaDZiMTVqcjJvbzA0cHV6cWZxaCJ9.nWgnUUycTGxAG96wsnobWQ';

//         }
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data)
//             })
            
//     }

//     useEffect(()=>{
//         getCoordinates();
//     } , [])
//     return(
//         <Wrapper>
//             <RideContainer>
//              Ride Selector
//             Confirm Button            </RideContainer>
//         </Wrapper>
//     )
// }

// export default Confirm

// const RideContainer = tw.div`
// flex-1 
// `
// const Wrapper = tw.div`
// flex h-screen flex col
// `