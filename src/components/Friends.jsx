const Friends = ({ friends }) => {

    return (
        <ul className="sidebar">
            {friends.map((friend) => (
                <Friend key={friend.id} friend={friend}/>
            ))}
        </ul>
    )
}

const Friend = ({ friend }) => {
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
            <button className="button">Select</button>
        </li>
    )
}

export default Friends;