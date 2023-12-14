import Tasks from './Tasks.jsx'

export default function ShowProject({ project, deleteProject, onAddTask, onDeleteTask, tasks }) {

  const formattedDate = new Date(project.date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  return (<>
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold   mb-2">{project.title}</h2>
          <button onClick={() => deleteProject(project.id)} className="text-stone-600 hover:text-stone-900">Delete</button>
        </div>
        <div>
          <p className="mb-4 text-stone-400">{formattedDate}</p>
          <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
        </div>
      </header>
      <Tasks onAdd={onAddTask} tasks={tasks} projectId={project.id} onDelete={onDeleteTask} ></Tasks>
    </div>
  </>
  );
}