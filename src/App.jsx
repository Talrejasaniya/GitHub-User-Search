import { useState } from "react";
import "./github.css";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchUser = async () => {
    if (username.trim() === "") {
      setError("Please enter the username");
      setUserData(null);
      return;
    }

    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        throw new Error("User not found");
      }

      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      {!error && !userData && <p className="title">Search for a GitHub user</p>}

      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={(e) => {
  if (e.key === "Enter") searchUser();
}}
      />
      <button onClick={searchUser}>Search</button>
      

      {error && <p className="error">{error}</p>}

      {userData && (
        <div className="card">
          <img
            src={userData.avatar_url}
            alt="avatar"
            width="100"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <h2>{userData.name || userData.login}</h2>
          <p>{userData.bio || "No bio available"}</p>
          <p>Public repos: {userData.public_repos}</p>
          <p>Followers: {userData.followers}</p>
        </div>
      )}
    </div>
  );
}

export default App;
