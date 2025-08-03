// features/routes/_authenticated/route.tsx
import {
  createFileRoute,
  redirect, // 👈 precisa importar
  Outlet
} from '@tanstack/react-router'
import { AppSidebar } from '@/components/app-sidebar'

import { SiteHeader } from '@/components/site-header'
import {
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar'

import { useUserStore } from '@/store/use-store'
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
     <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
       <  Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}
