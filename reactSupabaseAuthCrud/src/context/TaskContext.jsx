import { createContext, useContext, useState } from "react";
import { supabase } from "../supabase/client";

export const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTasks debe estar dentro del proveedor TaskContext');
    }
    return context;
}

export const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [adding, setAdding] = useState(false);
    const [loading, setLoading] = useState(false);

    const getTasks = async (done = false) => {
        setLoading(true);
        try {
            const usuario = await supabase.auth.getUser();
            const { error, data } = await supabase
                .from('Recolectas')
                .select()
                .eq('userId', usuario.data.user.id)
                .eq("done", done)
                .order('id', { ascending: true });

            if (error) throw error;
            setTasks(data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        } finally {
            setLoading(false);
        }
    }

    const createTask = async (taskName, Litros, price) => {
        setAdding(true);
        try {
            const usuario = await supabase.auth.getUser();
            const { data, error } = await supabase
                .from('Recolectas')
                .insert({ name: taskName, Litros, price, userId: usuario.data.user.id })
                .select();

            if (error) throw error;
            setTasks([...tasks, ...data]);
        } catch (error) {
            console.error("Error creating task:", error);
        } finally {
            setAdding(false);
        }
    }

    const deleteTask = async (id) => {
        try {
            const usuario = await supabase.auth.getUser();
            const { error } = await supabase
                .from('Recolectas')
                .delete()
                .eq('userId', usuario.data.user.id)
                .eq('id', id);

            if (error) throw error;
            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    }

    const updateTask = async (id, updateFields) => {
        try {
            const usuario = await supabase.auth.getUser();
            const { data, error } = await supabase
                .from('Recolectas')
                .update(updateFields)
                .eq('userId', usuario.data.user.id)
                .eq('id', id)
                .select();

            if (error) throw error;
            setTasks(tasks.map(task => (task.id === id ? data[0] : task)));
        } catch (error) {
            console.error("Error updating task:", error);
        }
    }

    return (
        <TaskContext.Provider value={{ tasks, getTasks, createTask, adding, loading, deleteTask, updateTask }}>
            {children}
        </TaskContext.Provider>
    );
}
