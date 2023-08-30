import { defineStore } from "pinia"
import supabase from "../lib/supabase"
import { ref } from "vue"

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);

  const fetchTasks = async () => {
    const { data, error } = await supabase
      .from('tasks')
      .select()
      .order('id', {ascending: true})

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
    
    console.log('Create: ', id);
    fetchTasks();
  }

  const deleteTask = async (id) => {
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', id)

    if (error) console.log('Error: ', error);

    fetchTasks();
  }

  const updateTask = async (id, update) => {
    const { error } = await supabase
      .from('tasks')
      .update( update )
      .eq('id', id)

    if (error) console.log('Error: ', error);

    fetchTasks();
  }

  return { 
    tasks,
    fetchTasks, 
    createTask, 
    deleteTask, 
    updateTask, 
  }
})