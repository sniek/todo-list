import { defineStore } from "pinia";
import supabase from "../lib/supabase";
import { ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
  const user = ref();

  // create / register a new user
  const createNewUser = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) console.log("Error: ", error);
    else {
      ("Data: ", console.log(data))
      user.value = data;
    }
  };

  // sign in the user
  const signInUser = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) console.log('Error: ', error);
    else {
      ('Data: ', console.log(data))
      user.value = data;
    }
  }

  // Sign out the user and reload the page
  const signOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    location.reload();

    if (error) console.log('Error: ', error);
  }

  return { user, createNewUser, signInUser, signOutUser }
})