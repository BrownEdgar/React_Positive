import { useSelector } from 'react-redux'
import './TaskList.css'

export function TaskList() {
    const tasks = useSelector((state) => state.task);
  
return (
    <div className="Task">
    <div className='th'>
        <h1>Reviews from Our Clients</h1>
    </div>
    <div className='span'>
        <svg xmlns="http://www.w3.org/2000/svg" width="69" height="2" viewBox="0 0 69 2" fill="none">
        <path d="M1 1L68 1" stroke="#FF6A28" /></svg>
    <div className='text'>
        <span>OUR CLIENT SAYS</span>
    </div>
    </div>
        {tasks.map((task) => (
        <div key={task.id} className="Task-item">
        <div className="flex">
            <img src={task.image} alt="Task" />
        <div className="Task-content">
            <h2 className="Task-title">{task.title}</h2>
        <div className="categories">
            <span>{task.categories}</span>
        </div>
        <div className='desc'>
            <p className="description">{task.desc}</p>
        </div>
        <div className='button'>
            <svg xmlns="http://www.w3.org/2000/svg" width="141" height="55" viewBox="0 0 141 55" fill="none">
            <rect width="60" height="55" rx="5" fill="white"/>
            <rect x="81" width="60" height="55" rx="5" fill="#FF6A28"/>
            <path d="M39 28L21 28" stroke="#FF6A28" />
            <path d="M28 36L21 28L28 20" stroke="#FF6A28"/>
            <path d="M102 28L120 28" stroke="white"/>
            <path d="M113 20L120 28L113 36" stroke="white"/>
            </svg>
        </div>
        </div>
        </div>
    </div>
        ))}
</div>
    );
  }