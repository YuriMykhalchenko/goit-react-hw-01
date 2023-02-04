// [
//   {
//     "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
//     "name": "Mango",
//     "isOnline": true,
//     "id": 1812
//   },
//   {
//     "avatar": "https://cdn-icons-png.flaticon.com/512/616/616438.png",
//     "name": "Kiwi",
//     "isOnline": false,
//     "id": 1137
//   },
//   {
//     "avatar": "https://cdn-icons-png.flaticon.com/512/1623/1623681.png",
//     "name": "Ajax",
//     "isOnline": true,
//     "id": 1213
//   },
//   {
//     "avatar": "https://cdn-icons-png.flaticon.com/512/2977/2977285.png",
//     "name": "Jay",
//     "isOnline": true,
//     "id": 1714
//   },
//   {
//     "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998749.png",
//     "name": "Poly",
//     "isOnline": false,
//     "id": 1284
//   }
// ]
import friends from '../../data/friends.json';
import { FriendsList } from './FriendsList/FriendsList';
import { Box } from '../../utils/Box';
import { theme } from '../../utils/theme';

export const Friends = () => {
  return (
    <Box
      width={400}
      bg={theme.colors.wrapper}
      borderRadius="10px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      ml="auto"
      mr="auto"
      mb={5}
      p={5}
      as="section"
    >
      <Box
        width="100%"
        pb={4}
        textAlign="center"
        m={0}
        color={theme.colors.heading}
        as="h2"
      >
        USER'S FRIENDS
      </Box>
      <FriendsList friends={friends} />
    </Box>
  );
};
