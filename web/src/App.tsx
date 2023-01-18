import './styles/global.css';
import { Habit } from "./components/Habit"

export function App() {
  return (
    <div>
      <Habit completed={5} />
      <Habit completed={5} />
      <Habit completed={5} />
      <Habit completed={89} />
      <Habit completed={26} />
   </div>
  
  )
}

// components: Reaproveitar / isolar
// Propriedade: Uma informação enviada pra modificar um componente visual ou comportamentalmente 