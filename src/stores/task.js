import { defineStore } from "pinia"
import supabase from "../lib/supabase"
import { ref } from "vue"

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);

 /*  const getUniqueId = () => {
    let uniqueId = 0;
    for (let i = 0; i == tasks.value[i].id; i++){
      uniqueId = i;
    }
    console.log('unique: ', uniqueId);
    return uniqueId;
  }
 */
  const fetchTasks = async () => {
    const { data, error } = await supabase
      .from('tasks')
      .select()
      .order('is_complete', {ascending: true})

    if (error) console.log("Error: ", error);
    else tasks.value = data;
    console.log("tasks: ", tasks.value);
  }

  const createTask = async (userId, title) => {
    const { error } = await supabase
      .from('tasks')
      .insert({
        user_id: userId,
        title: title
      })

    if (error) console.log('Error: ', error);
    
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