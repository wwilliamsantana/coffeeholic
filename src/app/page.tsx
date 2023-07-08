import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

// Responsive  breaking in 982px

export default function Home() {
  return (
    <main className="grid place-items-start m-4 ">
      <Header />
      <Sidebar />
    </main>
  )
}
