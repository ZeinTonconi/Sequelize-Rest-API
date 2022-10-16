import { Task } from "../models/Task.js"

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.status(200).json({
            tasks
        })
    } catch (error) {
        res.status(500).json({
            msg: "Error en la DB"
        })
    }
}

export const createTask = async (req, res) => {
    try {
        const { name, done, projectId } = req.body;
        const newTask = await Task.create({
            name,
            done,
            projectId
        })
        res.status(201).json({
            newTask
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error en la DB"
        })
    }
}

export const getTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findOne({
            where: { id },
            attributes: ["id", "name", "done"]
        })
        res.status(200).json({
            task
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error en la DB"
        })
    }
}

export const updateTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findByPk(id);
        task.set(req.body);
        await task.save();
        res.status(200).json({
            task
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error en la DB"
        })
    }
}
export const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Task.destroy({
            where: { id }
        })
        res.json({
            result
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error en la DB"
        })
    }
}