import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [essay, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(essay);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your essay:
        <input 
          type="text" 
          value={essay}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);