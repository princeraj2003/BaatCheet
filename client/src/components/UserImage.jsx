// // // // import {Box} from "@mui/material";
// // // // const UserImage=({image,size="60px"})=>{
// // // //     return(
// // // //         <Box width={size} height={size}>
// // // //             <img
// // // //             style={{objectFit:"cover",borderRadius:"50px"}}
// // // //             width={size}
// // // //             height={size}
// // // //             alt="user"
// // // //             src={`http://localhost:3001/assets/${image}`}
// // // //             />
// // // //         </Box>
// // // //     )
// // // // }
// // // // export default UserImage;

// // // import { Box } from "@mui/material";

// // // const UserImage = ({ image, size = "60px" }) => {
// // //   return (
// // //     <Box width={size} height={size}>
// // //       <img
// // //         style={{ objectFit: "cover", borderRadius: "50%" }}
// // //         width={size}
// // //         height={size}
// // //         alt="user"
// // //         src={`http://localhost:3001/assets/${image}`}
// // //       />
// // //     </Box>
// // //   );
// // // };

// // // export default UserImage;
// // import { Box } from "@mui/material";

// // const UserImage = ({ image, size = "60px" }) => {
// //   return (
// //     <Box width={size} height={size}>
// //       <img
// //         style={{ objectFit: "cover", borderRadius: "50%" }}
// //         width={size}
// //         height={size}
// //         alt="user"
// //         src={`${process.env.REACT_APP_SERVER_URL}/assets/${image}`}
// //       />
// //     </Box>
// //   );
// // };

// // export default UserImage;

// import { Box } from "@mui/material";

// const UserImage = ({ image, size = "60px" }) => {
//   return (
//     <Box width={size} height={size}>
//       <img
//         style={{ objectFit: "cover", borderRadius: "50%" }}
//         width={size}
//         height={size}
//         alt="user"
//         src={`${process.env.REACT_URL}/assets/${image}`}
//       />
//     </Box>
//   );
// };

// export default UserImage;
import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`https://baatcheet-backened-7.onrender.com/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;