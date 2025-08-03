const stats = [
  { label: 'Usuários Ativos', value: 1240 },
  { label: 'Novos Cadastros', value: 87 },
  { label: 'Vendas Hoje', value: 56 },
  { label: 'Receita (R$)', value: '12.340' }
]
import { ChartAreaInteractive } from '@/components/chart-area-interactive'
import { DataTable } from '@/components/data-table'
import { SectionCards } from '@/components/section-cards'



import data from "./data.json"
export default function DashboardPage() {
  return (
  <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
  )
}
