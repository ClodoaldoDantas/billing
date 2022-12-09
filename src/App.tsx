import { Sidebar } from './components/Sidebar'
import { DrawerProvider } from './contexts/DrawerContext'
import { Billing } from './pages/Billing'

export function App() {
  return (
    <DrawerProvider>
      <Sidebar />

      <main className="wrapper">
        <Billing />
      </main>
    </DrawerProvider>
  )
}

export default App
