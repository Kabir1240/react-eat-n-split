import { useState } from "react"

const AddFriend = ({ onAddFriend }) => {
    const [friendName, setFriendName] = useState("");
    const [friendImage, setFriendImage] = useState("https://i.pravatar.cc/48");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!friendName || !friendImage) return;

        const id = crypto.randomUUID()
        const newFriend = { id: id, 
                            name: friendName, 
                            image:`${friendImage}?=${id}`, 
                            balance:0}

        onAddFriend(newFriend)

        // Reset
        setFriendName("")
        setFriendImage("https://i.pravatar.cc/48")
    }

    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label>🧑‍🤝‍🧑 Friend Name: </label>
            <input type="text" value={friendName} onChange={(e) => setFriendName(e.target.value)}></input>

            <label>🌄 Image URL: </label>
            <input type="text" value={friendImage} onChange={(e) => setFriendImage(e.target.value)}></input>

            <button className="button">Add</button>
        </form>
    )
}

export default AddFriend;
