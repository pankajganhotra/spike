import React, { useEffect, useState } from "react";
import { api } from "./resources/api"

const App = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get("/auth/session")
      .then(res => {
        setUser(res.data.user);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      })
  }, []);


  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return <div>No user</div>
  }

  return (<div className="App"> {JSON.stringify(user)} </div>
  );

}


export default App;
