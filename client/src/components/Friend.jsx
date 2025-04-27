// // // // // // // // import{PersonAddOutlined,PersonRemoveOutlined} from "@mui/icons-material";
// // // // // // // // import{Box,IconButton,Typography,useTheme} from "@mui/material";
// // // // // // // // import{useDispatch,useSelector} from "react-redux";
// // // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // // import{setFriends} from "state";
// // // // // // // // import FlexBetween from "./FlexBetween";
// // // // // // // // import UserImage from "./UserImage";
// // // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // // const Friend=({friendId,name,subtitle,usePicturePath})=>{
    
// // // // // // // //     const dispatch=useDispatch();
// // // // // // // //     const navigate=useNavigate();
// // // // // // // //     const{_id}=useSelector((state)=>state.user);
// // // // // // // //     const token=useSelector((state)=>state.token);

// // // // // // // //     const friends=useSelector((state)=>state.user.friends);
// // // // // // // //     const{palette}=useTheme();
// // // // // // // //     const primaryLight=palette.primary.light;
// // // // // // // //     const primaryDark=palette.primary.dark;
// // // // // // // //     const main=palette.neutral.main;
// // // // // // // //     const medium=palette.neutral.medium;

// // // // // // // // const isFriend=friends.find((friend)=>friend._id===friendId);

// // // // // // // // const patchFriend=async()=>{
// // // // // // // //     const response=await fetch(
// // // // // // // //       `http://localhost:3001/users/${_id}${friendId}`,
// // // // // // // //         {
// // // // // // // //             method:"PATCH",
// // // // // // // //             headers:{
// // // // // // // //                 Authorization:`Bearer ${token}`,
// // // // // // // // "Content-Type":"application/json"

// // // // // // // //             }
// // // // // // // //         }
// // // // // // // //     )
// // // // // // // //     const data=await response.json();
// // // // // // // //     dispatch(setFriends({friends:data}));

// // // // // // // // };

// // // // // // // // return (
// // // // // // // //     <FlexBetween>
// // // // // // // //         <FlexBetween gap="1rem">
// // // // // // // //             <UserImage image={userPicturePath} size="55px"/>
// // // // // // // //             <Box
// // // // // // // //             onClick={()=>{
// // // // // // // //                 navigate{`/profile/${friendId}`};
// // // // // // // //                 navigate(0);
// // // // // // // //             }}
// // // // // // // //             >
// // // // // // // //                 <Typography
// // // // // // // //                 color={main}
// // // // // // // //                 variant="h5"
// // // // // // // //                 fontWeight="500"
// // // // // // // //                 sx={{
// // // // // // // //                     "&:hover":{
// // // // // // // //                         color:palette.primary.light,
// // // // // // // //                         cursor:"pointer"

// // // // // // // //                     }
// // // // // // // //                 }}
// // // // // // // //                 >
// // // // // // // //                     {name}


// // // // // // // //                 </Typography>
// // // // // // // //                 <Typography color={medium} fontSize="0.75rem">
// // // // // // // //                     {subtitle}
// // // // // // // //                 </Typography>

// // // // // // // //             </Box>

// // // // // // // //         </FlexBetween>
// // // // // // // //         <IconButton
// // // // // // // //         onClick={()=>patchFriend()}
// // // // // // // //         sx={{backgroundColor:primaryLight,p:"0.6rem"}}
// // // // // // // //         >
// // // // // // // // {isFriend ? (
// // // // // // // //     <PersonRemoveOutlined sx={{color:primaryDark}}/>

// // // // // // // // ):(
// // // // // // // //     <PersonAddOutlined sx={{color:primaryDark}}/>

// // // // // // // // )}
// // // // // // // //         </IconButton>
// // // // // // // //     </FlexBetween>
// // // // // // // // );
// // // // // // // // };

// // // // // // // // export default Friend;

// // // // // // // import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
// // // // // // // import { Box, IconButton, Typography, useTheme } from "@mui/material";
// // // // // // // import { useDispatch, useSelector } from "react-redux";
// // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // import { setFriends } from "state";
// // // // // // // import FlexBetween from "./FlexBetween";
// // // // // // // import UserImage from "./UserImage";

// // // // // // // const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
// // // // // // //   const dispatch = useDispatch();
// // // // // // //   const navigate = useNavigate();
// // // // // // //   const { _id } = useSelector((state) => state.user);
// // // // // // //   const token = useSelector((state) => state.token);
// // // // // // //   const friends = useSelector((state) => state.user.friends);

// // // // // // //   const { palette } = useTheme();
// // // // // // //   const primaryLight = palette.primary.light;
// // // // // // //   const primaryDark = palette.primary.dark;
// // // // // // //   const main = palette.neutral.main;
// // // // // // //   const medium = palette.neutral.medium;

// // // // // // //   // const isFriend = friends.find((friend) => friend._id === friendId);
// // // // // // //   const isFriend = friends.find((friend) => friend._id === friendId);

// // // // // // //   const patchFriend = async () => {
// // // // // // //     const response = await fetch(
// // // // // // //       `http://localhost:3001/users/${_id}/${friendId}`,
// // // // // // //       {
// // // // // // //         method: "PATCH",
// // // // // // //         headers: {
// // // // // // //           Authorization: `Bearer ${token}`,
// // // // // // //           "Content-Type": "application/json",
// // // // // // //         },
// // // // // // //       }
// // // // // // //     );
// // // // // // //     const data = await response.json();
// // // // // // //     dispatch(setFriends({ friends: data }));
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <FlexBetween>
// // // // // // //       <FlexBetween gap="1rem">
// // // // // // //         <UserImage image={userPicturePath} size="55px" />
// // // // // // //         <Box
// // // // // // //           onClick={() => {
// // // // // // //             navigate(`/profile/${friendId}`);
// // // // // // //             navigate(0);
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           <Typography
// // // // // // //             color={main}
// // // // // // //             variant="h5"
// // // // // // //             fontWeight="500"
// // // // // // //             sx={{
// // // // // // //               "&:hover": {
// // // // // // //                 color: palette.primary.light,
// // // // // // //                 cursor: "pointer",
// // // // // // //               },
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             {name}
// // // // // // //           </Typography>
// // // // // // //           <Typography color={medium} fontSize="0.75rem">
// // // // // // //             {subtitle}
// // // // // // //           </Typography>
// // // // // // //         </Box>
// // // // // // //       </FlexBetween>
// // // // // // //       <IconButton
// // // // // // //         onClick={() => patchFriend()}
// // // // // // //         sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
// // // // // // //       >
// // // // // // //         {isFriend ? (
// // // // // // //           <PersonRemoveOutlined sx={{ color: primaryDark }} />
// // // // // // //         ) : (
// // // // // // //           <PersonAddOutlined sx={{ color: primaryDark }} />
// // // // // // //         )}
// // // // // // //       </IconButton>
// // // // // // //     </FlexBetween>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Friend;

// // // // // // import React from "react";
// // // // // // import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
// // // // // // import { Box, IconButton, Typography, useTheme } from "@mui/material";
// // // // // // import { useDispatch, useSelector } from "react-redux";
// // // // // // import { useNavigate } from "react-router-dom";
// // // // // // import { setFriends } from "state";
// // // // // // import FlexBetween from "./FlexBetween";
// // // // // // import UserImage from "./UserImage";

// // // // // // const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
// // // // // //   const dispatch = useDispatch();
// // // // // //   const navigate = useNavigate();
// // // // // //   const { _id } = useSelector((state) => state.user);
// // // // // //   const token = useSelector((state) => state.token);
// // // // // //   const friends = useSelector((state) => state.user.friends);

// // // // // //   const { palette } = useTheme();
// // // // // //   const primaryLight = palette.primary.light;
// // // // // //   const primaryDark = palette.primary.dark;
// // // // // //   const main = palette.neutral.main;
// // // // // //   const medium = palette.neutral.medium;

// // // // // //   const isFriend = friends.find((friend) => friend._id === friendId);

// // // // // //   const patchFriend = async () => {
// // // // // //     const response = await fetch(
// // // // // //       `http://localhost:3001/users/${_id}/${friendId}`,
// // // // // //       {
// // // // // //         method: "PATCH",
// // // // // //         headers: {
// // // // // //           Authorization: `Bearer ${token}`,
// // // // // //           "Content-Type": "application/json",
// // // // // //         },
// // // // // //       }
// // // // // //     );
// // // // // //     const data = await response.json();
// // // // // //     dispatch(setFriends({ friends: data }));
// // // // // //   };

// // // // // //   return (
// // // // // //     <FlexBetween>
// // // // // //       <FlexBetween gap="1rem">
// // // // // //         <UserImage image={userPicturePath} size="55px" />
// // // // // //         <Box
// // // // // //           onClick={() => {
// // // // // //             navigate(`/profile/${friendId}`);
// // // // // //             navigate(0);
// // // // // //           }}
// // // // // //         >
// // // // // //           <Typography
// // // // // //             color={main}
// // // // // //             variant="h5"
// // // // // //             fontWeight="500"
// // // // // //             sx={{
// // // // // //               "&:hover": {
// // // // // //                 color: palette.primary.light,
// // // // // //                 cursor: "pointer",
// // // // // //               },
// // // // // //             }}
// // // // // //           >
// // // // // //             {name}
// // // // // //           </Typography>
// // // // // //           <Typography color={medium} fontSize="0.75rem">
// // // // // //             {subtitle}
// // // // // //           </Typography>
// // // // // //         </Box>
// // // // // //       </FlexBetween>
// // // // // //       <IconButton
// // // // // //         onClick={() => patchFriend()}
// // // // // //         sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
// // // // // //       >
// // // // // //         {isFriend ? (
// // // // // //           <PersonRemoveOutlined sx={{ color: primaryDark }} />
// // // // // //         ) : (
// // // // // //           <PersonAddOutlined sx={{ color: primaryDark }} />
// // // // // //         )}
// // // // // //       </IconButton>
// // // // // //     </FlexBetween>
// // // // // //   );
// // // // // // };

// // // // // // export default Friend;

// // // // // import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
// // // // // import { Box, IconButton, Typography, useTheme } from "@mui/material";
// // // // // import { useDispatch, useSelector } from "react-redux";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import { setFriends } from "state";
// // // // // import FlexBetween from "./FlexBetween";
// // // // // import UserImage from "./UserImage";

// // // // // const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
// // // // //   const dispatch = useDispatch();
// // // // //   const navigate = useNavigate();
// // // // //   const { _id } = useSelector((state) => state.user);
// // // // //   const token = useSelector((state) => state.token);
// // // // //   const friends = useSelector((state) => state.user.friends);

// // // // //   const { palette } = useTheme();
// // // // //   const primaryLight = palette.primary.light;
// // // // //   const primaryDark = palette.primary.dark;
// // // // //   const main = palette.neutral.main;
// // // // //   const medium = palette.neutral.medium;

// // // // //   const isFriend = friends.find((friend) => friend._id === friendId);

// // // // //   // const isFriend = friends && friends.find((friend) => friend._id === friendId);

// // // // //   const patchFriend = async () => {
// // // // //     const response = await fetch(
// // // // //       `http://localhost:3001/users/${_id}/${friendId}`,
// // // // //       {
// // // // //         method: "PATCH",
// // // // //         headers: {
// // // // //           Authorization: `Bearer ${token}`,
// // // // //           "Content-Type": "application/json",
// // // // //         },
// // // // //       }
// // // // //     );
// // // // //     const data = await response.json();
// // // // //     dispatch(setFriends({ friends: data }));
// // // // //   };

// // // // //   return (
// // // // //     <FlexBetween>
// // // // //       <FlexBetween gap="1rem">
// // // // //         <UserImage image={userPicturePath} size="55px" />
// // // // //         <Box
// // // // //           onClick={() => {
// // // // //             navigate(`/profile/${friendId}`);
// // // // //             navigate(0);
// // // // //           }}
// // // // //         >
// // // // //           <Typography
// // // // //             color={main}
// // // // //             variant="h5"
// // // // //             fontWeight="500"
// // // // //             sx={{
// // // // //               "&:hover": {
// // // // //                 color: palette.primary.light,
// // // // //                 cursor: "pointer",
// // // // //               },
// // // // //             }}
// // // // //           >
// // // // //             {name}
// // // // //           </Typography>
// // // // //           <Typography color={medium} fontSize="0.75rem">
// // // // //             {subtitle}
// // // // //           </Typography>
// // // // //         </Box>
// // // // //       </FlexBetween>
// // // // //       <IconButton
// // // // //         onClick={() => patchFriend()}
// // // // //         sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
// // // // //       >
// // // // //         {isFriend ? (
// // // // //           <PersonRemoveOutlined sx={{ color: primaryDark }} />
// // // // //         ) : (
// // // // //           <PersonAddOutlined sx={{ color: primaryDark }} />
// // // // //         )}
// // // // //       </IconButton>
// // // // //     </FlexBetween>

// // // // //   );
// // // // // };

// // // // // export default Friend;

// // // // import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
// // // // import { Box, IconButton, Typography, useTheme } from "@mui/material";
// // // // import { useDispatch, useSelector } from "react-redux";
// // // // import { useNavigate } from "react-router-dom";
// // // // import { setFriends } from "state";
// // // // import FlexBetween from "./FlexBetween";
// // // // import UserImage from "./UserImage";

// // // // const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
// // // //   const dispatch = useDispatch();
// // // //   const navigate = useNavigate();
// // // //   const { _id } = useSelector((state) => state.user);
// // // //   const token = useSelector((state) => state.token);
// // // //   // const friends = useSelector((state) => state.user.friends);
// // // //   const friends = useSelector((state) => state.user.friends);

// // // //   const { palette } = useTheme();
// // // //   const primaryLight = palette.primary.light;
// // // //   const primaryDark = palette.primary.dark;
// // // //   const main = palette.neutral.main;
// // // //   const medium = palette.neutral.medium;

// // // //   const isFriend = friends.find((friend) => friend._id === friendId);

// // // //   const patchFriend = async () => {
// // // //     const response = await fetch(
// // // //       `http://localhost:3001/users/${_id}/${friendId}`,
// // // //       {
// // // //         method: "PATCH",
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //           "Content-Type": "application/json",
// // // //         },
// // // //       }
// // // //     );
// // // //     const data = await response.json();
// // // //     dispatch(setFriends({ friends: data }));
// // // //   };

// // // //   return (
// // // //     <FlexBetween>
// // // //       <FlexBetween gap="1rem">
// // // //         <UserImage image={userPicturePath} size="55px" />
// // // //         <Box
// // // //           onClick={() => {
// // // //             navigate(`/profile/${friendId}`);
// // // //             navigate(0);
// // // //           }}
// // // //         >
// // // //           <Typography
// // // //             color={main}
// // // //             variant="h5"
// // // //             fontWeight="500"
// // // //             sx={{
// // // //               "&:hover": {
// // // //                 color: palette.primary.light,
// // // //                 cursor: "pointer",
// // // //               },
// // // //             }}
// // // //           >
// // // //             {name}
// // // //           </Typography>
// // // //           <Typography color={medium} fontSize="0.75rem">
// // // //             {subtitle}
// // // //           </Typography>
// // // //         </Box>
// // // //       </FlexBetween>
// // // //       <IconButton
// // // //         onClick={() => patchFriend()}
// // // //         sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
// // // //       >
// // // //         {isFriend ? (
// // // //           <PersonRemoveOutlined sx={{ color: primaryDark }} />
// // // //         ) : (
// // // //           <PersonAddOutlined sx={{ color: primaryDark }} />
// // // //         )}
// // // //       </IconButton>
// // // //     </FlexBetween>
// // // //   );
// // // // };

// // // // export default Friend;

// // // import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
// // // import { Box, IconButton, Typography, useTheme } from "@mui/material";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { useNavigate } from "react-router-dom";
// // // import { setFriends } from "state";
// // // import FlexBetween from "./FlexBetween";
// // // import UserImage from "./UserImage";

// // // // The useSelector hook is a feature provided by the React Redux library, which allows you to extract data from the Redux store in a React functional component. It is a way to access the state stored in Redux and subscribe to updates in that state.
// // // const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
// // //   const dispatch = useDispatch();
// // //   const navigate = useNavigate();
// // //   const { _id } = useSelector((state) => state.user);
// // //   const token = useSelector((state) => state.token);
// // //   const friends = useSelector((state) => state.user.friends);

// // //   const { palette } = useTheme();
// // //   const primaryLight = palette.primary.light;
// // //   const primaryDark = palette.primary.dark;
// // //   const main = palette.neutral.main;
// // //   const medium = palette.neutral.medium;

// // //   const isFriend = friends.find((friend) => friend._id === friendId);
// // // //api call to add or remove friend.
// // //   const patchFriend = async () => {
// // //     const response = await fetch(
// // //       `${process.env.REACT_APP_SERVER_URL}/users/${_id}/${friendId}`,
// // //       {
// // //         method: "PATCH",
// // //         headers: {
// // //           Authorization: `Bearer ${token}`,
// // //           "Content-Type": "application/json",
// // //         },
// // //       }
// // //     );
// // //     const data = await response.json();
// // //     dispatch(setFriends({ friends: data }));
// // //   };

// // //   return (
// // //     <FlexBetween>
// // //       <FlexBetween gap="1rem">
// // //         <UserImage image={userPicturePath} size="55px" />
// // //         <Box
// // //           onClick={() => {
// // //             navigate(`/profile/${friendId}`);
// // //             navigate(0); //refresh the page after going on user page
// // //           }}
// // //         >
// // //           <Typography
// // //             color={main}
// // //             variant="h5"
// // //             fontWeight="500"
// // //             sx={{
// // //               "&:hover": {
// // //                 color: palette.primary.light,
// // //                 cursor: "pointer",
// // //               },
// // //             }}
// // //           >
// // //             {name}
// // //           </Typography>
// // //           <Typography color={medium} fontSize="0.75rem">
// // //             {subtitle}
// // //           </Typography>
// // //         </Box>
// // //       </FlexBetween>
// // //       {_id === friendId || <IconButton
// // //         onClick={() => patchFriend()}
// // //         sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
// // //       >
// // //         {isFriend ? (
// // //           //if friend then remove function is shown
// // //           <PersonRemoveOutlined sx={{ color: primaryDark }} />
// // //         ) : (
// // //           //else add friend option is showed
// // //           <PersonAddOutlined sx={{ color: primaryDark }} />
// // //         )}
// // //       </IconButton> 
// // //       }
// // //     </FlexBetween>
// // //   );
// // // };

// // // export default Friend;


// // import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
// // import { Box, IconButton, Typography, useTheme } from "@mui/material";
// // import { useDispatch, useSelector } from "react-redux";
// // import { useNavigate } from "react-router-dom";
// // import { setFriends } from "state";
// // import FlexBetween from "./FlexBetween";
// // import UserImage from "./UserImage";

// // const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const { _id } = useSelector((state) => state.user);
// //   const token = useSelector((state) => state.token);
// //   const friends = useSelector((state) => state.user.friends);

// //   const { palette } = useTheme();
// //   const primaryLight = palette.primary.light;
// //   const primaryDark = palette.primary.dark;
// //   const main = palette.neutral.main;
// //   const medium = palette.neutral.medium;

// //   // const isFriend = friends || [];
// //   // isFriend.find((friend) => friend._id === friendId);
// //   const isFriend = Object.values(friends).find((friend) => friend._id === friendId);
// //   const isSelf = friendId === _id;

// //   const patchFriend = async () => {
// //     const response = await fetch(
// //        `${process.env.REACT_URL}/users/${_id}/${friendId}`,
// //       {
// //         method: "PATCH",
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //           "Content-Type": "application/json",
// //         },
// //       }
// //     );
// //     const data = await response.json();
// //     dispatch(setFriends({ friends: data }));
// //   };

// //   return (
// //     <FlexBetween>
// //       <FlexBetween gap="1rem">
// //         <UserImage image={userPicturePath} size="55px" />
// //         <Box
// //           onClick={() => {
// //             navigate(`/profile/${friendId}`);
// //             navigate(0);
// //           }}
// //         >
// //           <Typography
// //             color={main}
// //             variant="h5"
// //             fontWeight="500"
// //             sx={{
// //               "&:hover": {
// //                 color: palette.primary.light,
// //                 cursor: "pointer",
// //               },
// //             }}
// //           >
// //             {name}
// //           </Typography>
// //           <Typography color={medium} fontSize="0.75rem">
// //             {subtitle}
// //           </Typography>
// //         </Box>
// //       </FlexBetween>
// //       {!isSelf && (
// //         <IconButton
// //           onClick={() => patchFriend()}
// //           sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
// //         >
// //           {isFriend ? (
// //             <PersonRemoveOutlined sx={{ color: primaryDark }} />
// //           ) : (
// //             <PersonAddOutlined sx={{ color: primaryDark }} />
// //           )}
// //         </IconButton>
// //       )}
// //     </FlexBetween>
// //   );
// // };

// // export default Friend;

// import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
// import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { setFriends } from "state";
// import FlexBetween from "./FlexBetween";
// import UserImage from "./UserImage";

// const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { _id } = useSelector((state) => state.user);
//   const token = useSelector((state) => state.token);
//   const friends = useSelector((state) => state.user.friends);

//   const { palette } = useTheme();
//   const primaryLight = palette.primary.light;
//   const primaryDark = palette.primary.dark;
//   const main = palette.neutral.main;
//   const medium = palette.neutral.medium;

//   // const isFriend = friends.find((friend) => friend._id === friendId);
//   const isFriend = Object.values(friends).find((friend) => friend._id === friendId);

//   const patchFriend = async () => {
//     const response = await fetch(
//       // `http://localhost:3001/users/${_id}/${friendId}`,
//       `${process.env.REACT_URL}/users/${_id}/${friendId}`,
//       {
//         method: "PATCH",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     const data = await response.json();
//     dispatch(setFriends({ friends: data }));
//   };

//   return (
//     <FlexBetween>
//       <FlexBetween gap="1rem">
//         <UserImage image={userPicturePath} size="55px" />
//         <Box
//           onClick={() => {
//             navigate(`/profile/${friendId}`);
//             navigate(0);
//           }}
//         >
//           <Typography
//             color={main}
//             variant="h5"
//             fontWeight="500"
//             sx={{
//               "&:hover": {
//                 color: palette.primary.light,
//                 cursor: "pointer",
//               },
//             }}
//           >
//             {name}
//           </Typography>
//           <Typography color={medium} fontSize="0.75rem">
//             {subtitle}
//           </Typography>
//         </Box>
//       </FlexBetween>
//       <IconButton
//         onClick={() => patchFriend()}
//         sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
//       >
//         {isFriend ? (
//           <PersonRemoveOutlined sx={{ color: primaryDark }} />
//         ) : (
//           <PersonAddOutlined sx={{ color: primaryDark }} />
//         )}
//       </IconButton>
//     </FlexBetween>
//   );
// };

// export default Friend;

import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFriends } from "state";
import FlexBetween from "./FlexBetween";
import UserImage from "./UserImage";

// The useSelector hook is a feature provided by the React Redux library, which allows you to extract data from the Redux store in a React functional component. It is a way to access the state stored in Redux and subscribe to updates in that state.
const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  const { palette } = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  const isFriend = friends.find((friend) => friend._id === friendId);
//api call to add or remove friend.
  const patchFriend = async () => {
    const response = await fetch(
      `https://baatcheet-backened-7.onrender.com/users/${_id}/${friendId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <UserImage image={userPicturePath} size="55px" />
        <Box
          onClick={() => {
            navigate(`/profile/${friendId}`);
            navigate(0); //refresh the page after going on user page
          }}
        >
          <Typography
            color={main}
            variant="h5"
            fontWeight="500"
            sx={{
              "&:hover": {
                color: palette.primary.light,
                cursor: "pointer",
              },
            }}
          >
            {name}
          </Typography>
          <Typography color={medium} fontSize="0.75rem">
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>
      {_id === friendId || <IconButton
        onClick={() => patchFriend()}
        sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
      >
        {isFriend ? (
          //if friend then remove function is shown
          <PersonRemoveOutlined sx={{ color: primaryDark }} />
        ) : (
          //else add friend option is showed
          <PersonAddOutlined sx={{ color: primaryDark }} />
        )}
      </IconButton> 
      }
    </FlexBetween>
  );
};

export default Friend;