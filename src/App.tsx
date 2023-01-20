import type { Component } from "solid-js";
import "./index.css";
import { createSignal, onMount } from "solid-js";
import { supabase } from "./client";

import Navbar from "./components/Navbar";
import { UserMetadata } from "@supabase/supabase-js";

const App: Component = () => {
  const [user, setUser] = createSignal<UserMetadata | undefined>(undefined);
  const [loading, setLoading] = createSignal(true);

  onMount(() => {
      setLoading(true);
      checkUser();
      window.addEventListener("haschange", function () {
        checkUser();
      });
      
  });

  async function checkUser() {
    const _user = await (
      await supabase.auth.getUser()
    ).data.user?.user_metadata;
    setUser(_user);
    document.getElementById("profile-pic")!.style.backgroundImage = `url(${_user?.avatar_url})`;
  }

  async function signIn() {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  }

  async function signOut() {
    await supabase.auth.signOut();
    setUser(undefined);
  }

  setLoading(false);

  if (loading()) {
    return (
      <div className="flex flex-row text-white">
        <Navbar />
        <div className="flex flex-col items-center justify-center text-3xl h-screen w-screen">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-row text-white">
        <Navbar />
        <div className="flex flex-col items-center justify-center text-3xl h-screen w-screen">
          {user() !== undefined ? (
            <>
              <h1>Welcome {user()!.user_name}</h1>
              <div id="profile-pic" className="w-20 h-20 absolute top-5 right-5 rounded-full bg-cover"></div>
            </>
          ) : (
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={signIn}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
