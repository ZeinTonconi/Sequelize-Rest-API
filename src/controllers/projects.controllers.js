import { Project } from "../models/Project.js"
import { Task } from "../models/Task.js";


export const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll();
        res.status(200).json({
            msg: "Get Project",
            projects
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error en la DB"
        })
    }

}

export const getProject = async (req,res) => {
    const {id}=req.params;
    try {
        const project = await Project.findByPk(id);
        res.status(200).json({
            msg: "Get One Project",
            project
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error en la DB"
        })   
    }
}

export const postProject = async (req, res) => {
    const { name, priority, description } = req.body;
    try {

        const newProject = await Project.create({
            name,
            description,
            priority
        })
        res.status(200).json({
            msg: "Get Project",
            newProject
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error en la DB"
        })
    }
}

export const updateProject = async (req, res) => {
    const { id } = req.params;
    const { name, priority, description } = req.body;
    try {
        const project = await Project.findByPk(id);
        project.name = name;
        project.priority = priority;
        project.description = description;
        await project.save();
        res.status(200).json({
            project
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error en la DB"
        })
    }
}
export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        await Project.destroy({
            where: {
                id
            }
        })
        console.log(id);
        res.status(201).json({
            msg: "Se elimino el projecto"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error en la DB"
        })
    }
}

export const getProjectTask = async (req,res) => {
    const {id} = req.params;
    try {
        const tasks = await Task.findAll({
            where: {
                projectId: id
            }
        })
        res.status(200).json({
            tasks
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error en la DB"
        })
    }
}