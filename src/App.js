import Friends from "./components/Friends"
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

  return (
    <div className="app">
      <Friends friends={friends}/>
      <AddFriend onAddFriend={setFriends}/>
    </div>
  )
}

export default App;