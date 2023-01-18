interface HabitProps {
    completed: number
}


export function Habit(props: HabitProps) {
    return (
      <div 
        className="bg-slate-700 w-10 text-white rounded-md m-1 p-2 text-center flex items-center justify-center">{props.completed}
      </div>
    )
       
    
}