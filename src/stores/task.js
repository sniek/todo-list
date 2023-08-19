import { defineStore } from "pinia"
import supabase from "../lib/supabase"
import { ref } from "vue"
import { getCurrentInstance } from 'vue';

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);
  const singleTask = ref();

  const fetchTasks = async () => {
    const { data, error } = await supabase
      .from('tasks')
      .select()

    if (error) console.log("Error: ", error);
    else tasks.value = data;
    console.log("tasks: ", tasks.value);
  }

  const fetchSingleTask = async (id) => {
    const { data, error } = await supabase
      .from('tasks')
      .select()
      .eq(id, id)

      if (error) console.log('Error: ', error);
      else singleTask.value = data;
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

  const updateTask = async (id, isComplete) => {
    const { error } = await supabase
      .from('tasks')
      .update({ is_complete: isComplete })
      .eq('id', id)

    if (error) console.log('Error: ', error);

    fetchTasks();
  }

  const updateTitle = async (id, title) => {
    const { error } = await supabase
      .from('tasks')
      .update({ title: title })
      .eq('id', id)

    if (error) console.log('Error: ', error);

    fetchTasks();
  }

  return { tasks, 
    singleTask, 
    fetchTasks, 
    createTask, 
    deleteTask, 
    updateTask, 
    updateTitle, 
    fetchSingleTask }
})