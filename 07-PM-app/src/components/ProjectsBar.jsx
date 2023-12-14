import Button from './Button.jsx';

export default function ProjectsBar({ createProject, projects, displayProject, selectedProjectId }) {
  return (<aside className="bg-stone-900 w-1/3 text-stone-50 px-8 py-16 md:w-72 rounded-r-xl">
    <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
    <div>
      <Button onClick={createProject}>
        + Add Project
      </Button>
    </div>
    <ul className="list-none mt-8">
      {projects.map((project, index) => {
        return <li key={project.id}>
          <button className='w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800' onClick={() => displayProject(index)}>
            {project.title}
          </button>
        </li>
      })}
    </ul>
  </aside>
  )
}
