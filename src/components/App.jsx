import user from '../data/user.json';
import friends from '../data/friends.json';
import upcomingData from '../data/stats.json';
import transactions from '../data/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Friends } from './Friends/Friends';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       Hello Yurii
//     </div>
//   );
// };
export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics upcomingData={upcomingData} title="UPLOAD STATS" />
      <Friends friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
