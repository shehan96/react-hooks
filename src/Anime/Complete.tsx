import './anime.css';

type CompleteProps = {
    completed : boolean;
}

const Complete = ({completed} : CompleteProps) => {
    return (
      <>
        {completed ? (
          <span className='completed-lable'>Completed</span>
        ) : (
          <span className='not-completed-lable'>Not Completed</span>
        )}
      </>
    );
};

export {Complete}