import { useAuth } from "./contexts/Auth";
import { redirect, useNavigate } from "react-router-dom";

export function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  async function handleSignOut() {
    // @TODO: add sign out logic
    await signOut();
    navigate("/login");
  }

  console.log("user=======", user);

  return (
    <div>
      <p>Welcome!</p>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}
