import { useState } from "react";

const SplitBill = ({ selectedFriend, onSplitBill }) => {
    const [billValue, setBillValue] = useState(0);
    const [yourExpense, setYourExpense] = useState(0);
    const [whoPaid, setWhoPaid] = useState("you");

    const friendsExpense = billValue - yourExpense;

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!billValue || !yourExpense) return;
        
        onSplitBill(whoPaid === "you" ? friendsExpense : -yourExpense)

        setBillValue(0);
        setYourExpense(0);
        setWhoPaid("you")
    }

    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>SPLIT A BILL WITH {selectedFriend.name.toUpperCase()}</h2>

            <label>💵 Bill Value: </label>
            <input type="number" value={billValue} onChange={(e) => setBillValue(Number(e.target.value))}></input>

            <label>🕴️ Your expense: </label>
            <input type="number" value={yourExpense} onChange={(e) => setYourExpense(Number(e.target.value))}></input>

            <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expense: </label>
            <input type="number" value={friendsExpense} disabled={true}></input>

            <label>🤑 Who is paying the bill?: </label>
            <select value={whoPaid} onChange={(e) => setWhoPaid(e.target.value)}>
                <option value="you">You</option>
                <option value={"friend"}>{selectedFriend.name}</option>
            </select>

            <button className="button">Split Bill</button>
        </form>
    )
}

export default SplitBill;
