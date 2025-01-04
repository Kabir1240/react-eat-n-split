const FriendList = ({ friends, selectedFriend, onSelectFriend }) => {

    return (
        <ul>
            {friends.map((friend) => (
                <Friend key={friend.id} friend={friend} selectedFriend={selectedFriend} onSelectFriend={onSelectFriend}/>
            ))}
        </ul>
    )
}

const Friend = ({ friend, selectedFriend, onSelectFriend }) => {
    const isSelected = selectedFriend?.id === friend.id;

    const owedAmountString = () => {
        if (friend.balance < 0) return <p className="red">You owe {friend.name} ${Math.abs(friend.balance)}</p>
        else if (friend.balance === 0) return <p className="green">You and {friend.name} are even</p>
        else if (friend.balance > 0) return <p>{friend.name} owes you ${Math.abs(friend.balance)}</p>
    }

    return (
        <li>
            <img src={friend.image} alt={friend.name}/>
            <h3>{friend.name}</h3>
            {owedAmountString()}
            <button className="button" onClick={() => onSelectFriend(isSelected, friend)}>{isSelected ? "Close" : "Select"}</button>
        </li>
    )
}

export default FriendList;