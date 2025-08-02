import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import {Sidebar} from "./components/Sidebar"
import {TaskInput} from "./components/TaskInput"
import {Task} from "./components/Task"
import type {TaskCardProps} from "./libs/types"

function App() {
  const TaskCards: TaskCardProps[] = [
    {id: 1, title: "Read a book", description: "Vite + React + Bootstrap + TS", isDone: false},
    {id: 2, title: "Write code", description: "Finish project for class", isDone: false},
    {id: 3, title: "Deploy app", description: "Push project to GitHub Pages", isDone: false}
  ];

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      <Header></Header>

      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <Sidebar userName="Pongpol" type="student"></Sidebar>

        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            {/* input ด้านบน*/}
            <TaskInput></TaskInput>

            {/* Card รายการ */}
            <Task {...TaskCards[0]}></Task>
            <Task {...TaskCards[1]}></Task>
            <Task {...TaskCards[2]}></Task>
          </main>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
      <Footer year="2026" fullName="Pongpol Sritalanut" studentId="670610718"></Footer>
    </div>
  );
}

export default App;
