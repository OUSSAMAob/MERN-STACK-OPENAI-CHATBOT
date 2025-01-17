import { Avatar, Box, Typography } from '@mui/material';
import { useAuth } from '../../context/AuthContext';

const ChatItem = ({content, role} : {content: string; role: "user" | "assistant";}) => {
    
    const auth = useAuth();

  return role == "assistant" ? (
            <Box
              sx={{
                display: "flex",
                p: 2,
                bgcolor: "#004d5612",
                gap: 2,
                borderRadius: 2,
                my: 1,
              }}
            >
                <Avatar sx={{ ml: "0" }}>
                    <img src="openai.png" alt="openai" width={"30px"} />
                </Avatar>
                <Box>
                    <Typography sx={{ fontSize: "20px" }}>{content}</Typography>
                </Box>
            </Box> ) : ( 
            <Box
            sx={{
              display: "flex",
              p: 2,
              bgcolor: "#004d56",
              gap: 2,
              borderRadius: 2,
            }}
          >
              <Avatar sx={{ ml: "0", bgcolor: "black", color: "white" }}>
                {auth?.user?.name[0]}
                {auth?.user?.name.split("")[1][0]}
              </Avatar>
              <Box>
                  <Typography sx={{ fontSize: "20px" }}>{content}</Typography>
              </Box>
          </Box>
  );
};

export default ChatItem;







// import React from 'react'

// const ChatItem = ({content, role} : {content: string; role: "user" | "assistant";}) => {
//     return role == "assistant" ? (
//         <Box
//           sx={{
//             display: "flex",
//             p: 2,
//             bgcolor: "#004d5612",
//             gap: 2,
//             borderRadius: 2,
//             my: 1,
//           }}
//         >
// //           <Avatar sx={{ ml: "0" }}>
// //             <img src="openai.png" alt="openai" width={"30px"} />
// //           </Avatar>
//           {/* <Box>
//             {!messageBlocks && (
            //   <Typography sx={{ fontSize: "20px" }}>{content}</Typography>
//             )}
//             {messageBlocks &&
//               messageBlocks.length &&
//               messageBlocks.map((block) =>
//                 isCodeBlock(block) ? (
//                   <SyntaxHighlighter style={coldarkDark} language="javascript">
//                     {block}
//                   </SyntaxHighlighter>
//                 ) : (
//                   <Typography sx={{ fontSize: "20px" }}>{block}</Typography>
//                 )
//               )}
//           </Box> */}
         {/* </Box> */}
//       ) : (
//         <Box
//           sx={{
//             display: "flex",
//             p: 2,
//             bgcolor: "#004d56",
//             gap: 2,
//             borderRadius: 2,
//           }}
//         >
//           <Avatar sx={{ ml: "0", bgcolor: "black", color: "white" }}>
//             {/* {auth?.user?.name[0]}
//             {auth?.user?.name.split(" ")[1][0]} */}
//           </Avatar>
//           {/* <Box>
//             {!messageBlocks && (
//               <Typography sx={{ fontSize: "20px" }}>{content}</Typography>
//             )}
//             {messageBlocks &&
//               messageBlocks.length &&
//               messageBlocks.map((block) =>
//                 isCodeBlock(block) ? (
//                   <SyntaxHighlighter style={coldarkDark} language="javascript">
//                     {block}
//                   </SyntaxHighlighter>
//                 ) : (
//                   <Typography sx={{ fontSize: "20px" }}>{block}</Typography>
//                 )
//               )}
        //   </Box> */}
        
//       );
// };

// export default ChatItem;
