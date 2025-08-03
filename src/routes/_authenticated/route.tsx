// features/routes/_authenticated/route.tsx
import {
  createFileRoute,
  redirect, // 👈 precisa importar
  Outlet
} from '@tanstack/react-router'

import { useUserStore } from '@/store/use-store'
import Header from '@/components/layout/header'
import Sidebar from '@/components/layout/sidebar'

export const Route = createFileRoute('/_authenticated')({
  async beforeLoad({ location }) {
    const { user, setUser } = useUserStore.getState()

    if (user) return

    /* Não temos → tenta validar o cookie no back-end */
    try {
    } catch {
      throw redirect({
        to: '/sign-in',
        search: { redirect: location.href } // onde ele queria ir
      })
    }
  },

  // ⬇️ 2. se passou pelo beforeLoad, r enderiza o layout
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
          <Outlet /> {/* rotas internas aparecem aqui */}
        </main>
      </section>
    </div>
  )
}
