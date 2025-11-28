import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import { Loading } from "../components/Loading";

export const Tasks = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [tasks, setTasks] = useState([]);

  const { form, handleChange, handleReset } = useForm({
    title: "",
    description: "",
    is_completed: false,
  });

  const [editingTask, setEditingTask] = useState(false);

  const showTasks = async () => {
    try {
      const fetchTasks = await fetch(
        "http://localhost:3000/api/tasks-by-user",
        {
          credentials: "include",
        }
      );

      setIsLoading(true);

      const taskRes = await fetchTasks.json();
      setTasks(taskRes);

      setIsLoading(false);
    } catch (error) {
      alert("Ocurrió un error inesperado");
    }
  };

  useEffect(() => {
    showTasks();
  }, []);

  const handleCheckboxChange = (event) => {
    handleChange({
      target: { name: event.target.name, value: event.target.checked },
    });
  };

  const updateTask = async (idTask) => {
    try {
      const fetchUpdate = await fetch(
        `http://localhost:3000/api/tasks/${idTask}`,
        {
          method: "PUT",
          body: JSON.stringify({
            title: form.title,
            description: form.description,
            is_completed: form.is_completed,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (fetchUpdate.ok) {
        await showTasks();
        setEditingTask(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (idTask) => {
    if (!window.confirm("¿Estás seguro de eliminar esta tarea?")) return;

    try {
      const fetchDelete = await fetch(
        `http://localhost:3000/api/tasks/${idTask}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      if (fetchDelete.ok) await showTasks();
    } catch (error) {
      console.log("Error interno: " + error);
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className="container py-4 codec-bg text-codec">
      <h1 className="mb-4 text-center codec-title">Tareas del Usuario</h1>

      <div className="row g-3">
        {tasks.map((task) => (
          <div className="col-12" key={task.id}>
            <div className="card codec-card shadow-sm">
              <div className="card-body">
                <h4 className="card-title">
                  {task.title}
                  {task.is_completed ? (
                    <span className="badge bg-success ms-2">Completada</span>
                  ) : (
                    <span className="badge bg-warning ms-2">Pendiente</span>
                  )}
                </h4>

                <p className="card-text mb-1">
                  <strong>Descripción:</strong> {task.description}
                </p>

                <p className="card-text">
                  <strong>Creada:</strong> {task.createdAt}
                </p>

                <div className="d-flex gap-2">
                  <button
                    className="btn btn-outline-info btn-sm"
                    onClick={() => {
                      if (editingTask === task.id) {
                        setEditingTask(false);
                        handleReset();
                        return;
                      }

                      setEditingTask(task.id);
                      handleChange({
                        target: { name: "title", value: task.title },
                      });
                      handleChange({
                        target: {
                          name: "description",
                          value: task.description,
                        },
                      });
                      handleChange({
                        target: {
                          name: "is_completed",
                          value: task.is_completed,
                        },
                      });
                    }}
                  >
                    {editingTask === task.id ? "Cancelar" : "Editar"}
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteTask(task.id)}
                  >
                    Eliminar
                  </button>
                </div>

                {editingTask === task.id && (
                  <div className="mt-3 p-3 border rounded codec-edit-box">
                    <h5>Editando tarea #{task.id}</h5>

                    <div className="mb-2">
                      <label className="form-label">Título</label>
                      <input
                        className="form-control codec-input"
                        type="text"
                        value={form.title}
                        name="title"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-2">
                      <label className="form-label">Descripción</label>
                      <input
                        className="form-control codec-input"
                        type="text"
                        value={form.description}
                        name="description"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-check mb-3">
                      <input
                        id="is_completed_checkbox"
                        className="form-check-input"
                        type="checkbox"
                        checked={form.is_completed}
                        name="is_completed"
                        onChange={handleCheckboxChange}
                      />
                      <label
                        htmlFor="is_completed_checkbox"
                        className="form-check-label"
                      >
                        ¿Completada?
                      </label>
                    </div>

                    <button
                      className="btn btn-success"
                      onClick={() => updateTask(task.id)}
                    >
                      Guardar Cambios
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};