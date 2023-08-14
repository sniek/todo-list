import { defineStore } from "pinia"
import supabase from "../lib/supabase"
import { ref } from "vue"

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);

  const fetchTasks = async () => {
    const { data, error } = await supabase
      .from('tasks')
      .select()

    if (error) console.log("Error: ", error);
    else tasks.value = data;
    console.log("tasks: ", tasks.value);
  }

  const createTask = async (id, userId, title) => {
    const { error } = await supabase
      .from('tasks')
      .insert({
        id: id,
        user_id: userId,
        title: title
      })

    if (error) console.log('Error: ', error);
  }

  const deleteTask = async (id) => {
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', id)

    if (error) console.log('Error: ', error);
  }



  return { tasks, fetchTasks, createTask, deleteTask }
})