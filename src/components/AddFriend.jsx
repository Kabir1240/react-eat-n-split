import { useState } from "react"

const AddFriend = ({ onAddFriend }) => {
    const [friendName, setFriendName] = useState("");
    const [friendImage, setFriendImage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const newFriend = {id: new Date(), name: friendName, image:friendImage, balance:0}
        onAddFriend((friends) => [...friends, newFriend])

        // Reset
        setFriendName("")
        setFriendImage("")
    }

    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <div>
                <span>🧑‍🤝‍🧑 Friend Name: </span>
                <input value={friendName} onChange={(e) => setFriendName(e.target.value)}></input>
            </div>

            <div>
                <span>🌄 Image URL: </span>
                <input value={friendImage} onChange={(e) => setFriendImage(e.target.value)}></input>
            </div>

            <button className="button">Add</button>
        </form>
    )
}

export default AddFriend;
