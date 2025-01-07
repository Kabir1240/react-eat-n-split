import FriendList from "./components/FriendList"
import AddFriend from "./components/AddFriend"
import SplitBill from "./components/SplitBill"
import { useState } from "react";


const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476", 
    balance: 0,
  },
];

const App = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [addFriendCollapsed, setAddFriendCollapsed] = useState(true);

  const handleAddFriend = (newFriend) => {
    setFriends((friends) => [...friends, newFriend])
    setAddFriendCollapsed(true);
  }

  const handleShowAddFriend = () => {
    setAddFriendCollapsed((addFriendCollapsed) => !addFriendCollapsed)
    setSelectedFriend(null)
  }

  const handleSelectFriend = (isSelected, friend) => {
    isSelected ? setSelectedFriend(null) : setSelectedFriend(friend)
    setAddFriendCollapsed(true);
  }

  const handleSplitBill = (value) => {
    setFriends((friends) => friends.map((friend) => friend.id === selectedFriend.id ? 
    {...friend, balance:friend.balance + value} : friend))

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">

        <FriendList 
          friends={friends} 
          selectedFriend={selectedFriend} 
          onSelectFriend={handleSelectFriend}/>

        {!addFriendCollapsed && <AddFriend onAddFriend={handleAddFriend} />}

        <button className="button" onClick={handleShowAddFriend}>
          {addFriendCollapsed ? "Add Friend" : "Close"}
        </button>
        
      </div>

      {selectedFriend && 
        <SplitBill 
          selectedFriend={selectedFriend} 
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />}

    </div>
  )
}

export default App;