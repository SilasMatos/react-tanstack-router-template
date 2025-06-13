import { createFileRoute, Outlet } from '@tanstack/react-router'
import Header from '@/components/layout/header'
import Sidebar from '@/components/layout/sidebar'

export const Route = createFileRoute('/_authenticated')({
  component: Layout
})

function Layout() {
  return (
    <div className="h-screen flex flex-col overflow-hidden dark:bg-dark-background bg-light-background">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="text-black flex-1 overflow-y-auto overflow-x-hidden   scroll-edit ">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
