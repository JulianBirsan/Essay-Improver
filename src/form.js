import React, { useState } from 'react';
import axios from 'axios';

function MyForm() {

    const [essay, setEssay] = useState("");
    const [advice, setAdvice] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/result', {'essay': essay}).then(
            (response) => {
                setAdvice(response.data);
            },
            (error) => {
                console.log(error);
            }
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>Enter your essay:
                <input 
                type="search"
                class="search-box" 
                value={essay}
                onChange={(e) => setEssay(e.target.value)}
                />
            </label>
            <input type="submit" />
            </form>
            <p>Here is the feedback:</p>
            {advice && <div>{JSON.stringify(advice)}</div>}
        </div>
    )
}
//
export default MyForm

