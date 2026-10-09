import db from "../DB/db.js";

 export const readMiniTasks=(req,res)=>{
    const query="SELECT * FROM tasks order by id desc";

    db.query(query,(err,results)=>{
        if(err){
            return res
            .status(500)
            .json({error:err.message});
        }
       return res.json(results);
    })

}




export const CreateMiniTask=(req,res)=>{
    const {task}=req.body;

    if(!task || !task.trim()){
        return res
        .status(400)
        .json({error:"Task is required"});
    }
    const query="INSERT INTO tasks (task) VALUES (?)";
    db.query(query,[task.trim()],(err,results)=>{
        if(err){

        return res
        .status(500)
        .json({error:err.message});


     }
        readMiniTasks(req,res);
    });
}




export const updateMiniTask = (req, res) => {
    const { updateId, task } = req.body;

    if (!updateId || !task || !task.trim()) {
        return res
        .status(400)
        .json({
        error: "Task and updateId are required"
        });
    }

    const query = "UPDATE tasks SET task = ? WHERE id = ?";

    db.query(query, [task.trim(), updateId], (err, results) => {
        if (err) {
            return res
            .status(500)
            .json({
                  error: err.message
            });
        }

        if (results.affectedRows === 0) {
            return res
            .status(404)
            .json({
                          error: "Mini task not found"
            });
        }

        return readMiniTasks(req, res);
    });
};




export const deleteTask = (req, res) => {
    const { id } = req.body;

    if (!id) {
        return res
        .status(400)
        .json({
        error: "Task ID is required"
        });
    }

    const query = "DELETE FROM tasks WHERE id = ?";

    db.query(query, [id], (err, results) => {
        if (err) {
            return res
            .status(500)
            .json({
                  error: err.message
            });
        }

        if (results.affectedRows === 0) {
            return res
            .status(404)
            .json({
                          error: "Mini task not found"
            });
        }

        return readMiniTasks(req, res);
    });
};



export const completeTask = (req, res) => {
    const { id } = req.body;

    if (!id) {
        return res
        .status(400)
        .json({
        error: "Task ID is required"
        });
    }

    const query = "UPDATE tasks SET status = ? WHERE id = ?";

    db.query(query, ["completed", id], (err, results) => {
        if (err) {
            console.log("Complete task error:", err.message);

            return res
            .status(500)
            .json({
                  error: err.message
            });
        }

        if (results.affectedRows === 0) {
            return res
            .status(404)
            .json({
                error: "Task not found"
            });
        }

        return readMiniTasks(req, res);
    });
};
 

