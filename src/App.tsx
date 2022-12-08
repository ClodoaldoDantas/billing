import { Sidebar } from './components/Sidebar'
import { Billing } from './pages/Billing'

export function App() {
  return (
    <>
      <Sidebar />

      <main className="wrapper">
        <Billing />
      </main>
    </>
  )
}

export default App
