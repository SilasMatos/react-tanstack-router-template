import { createFileRoute, Outlet } from '@tanstack/react-router'
import Header from '@/components/layout/header'
import Sidebar from '@/components/layout/sidebar'

export const Route = createFileRoute('/_authenticated')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div className="h-screen flex dark:bg-dark-background bg-light-background">
      <aside className="flex-shrink-0">
        <Sidebar />
      </aside>

      <section className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 p-4 overflow-auto scroll-edit">
          <Outlet />
        </main>
      </section>
    </div>
  )
}
