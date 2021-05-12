import { FaTimes } from 'react-icons/fa';
import format from 'date-fns/format';
import enUS from 'date-fns/locale/en-US';

const Task = ({ task, onDelete, onToggle }) => {
  const formatedDate = format(new Date(task.day), 'MMM do yyyy, HH:mm bbb' , {
    locale: enUS,
  });
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{formatedDate}</p>
    </div>
  );
};

export default Task;
