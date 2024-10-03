import UserProfile from './Profile/Profile';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';

//////////////////// STYLES ////////////////////
import '../index.css';
import '../components/TransactionHistory/TransactionHistory.css';
//////////////////// STYLES ////////////////////

import { Statistics } from './Statistics/Statistics';
import { Mailbox } from './Mailbox/Mailbox';
import { Product } from './Products/Products';
import { Profile, Panel } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Statistics" stats={data} />
      <Statistics title="Statistics" stats={data} />
      <Mailbox username={'Saanya'} unreadMessages={'asa'} />
      <Product
        imgUrl={'https://cdn-icons-png.flaticon.com/512/2922/2922506.png'}
        name={'Sam Winchester'}
        price={10}
        quantity={20}
      />
      <Panel title="Friend List">
        {friends.map(friend => {
          return (
            <Profile
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
              key={friend.id}
            />
          );
        })}
      </Panel>
      <TransactionHistory props={transactions} />;
    </>
  );
};
