import CardIndicatorRealTime from '@/features/dashboard/components/card-indicator-realtime'
import { useTheme } from '@/contexts/theme-context'
import ProfileDash from '@/features/dashboard/components/profile-dashboard'
const mockCardIndicatorData: any = [
  {
    title: 'Atendidas',
    displayValue: '1,245',
    value: 1245,
    trend: 'better',
    userType: 'AGENT',
    userOperation: 'GERAL',
    showTrend: true
  },
  {
    title: 'Transferência',
    displayValue: '87',
    value: 87,
    trend: 'worse',
    userType: 'AGENT',
    userOperation: 'GERAL',
    showTrend: true
  },
  {
    title: 'Transferência',
    displayValue: '87',
    value: 87,
    trend: 'worse',
    userType: 'AGENT',
    userOperation: 'GERAL',
    showTrend: true
  },
  {
    title: 'Transferência',
    displayValue: '87',
    value: 87,
    trend: 'worse',
    userType: 'AGENT',
    userOperation: 'GERAL',
    showTrend: true
  },
  {
    title: 'Transferência',
    displayValue: '87',
    value: 87,
    trend: 'worse',
    userType: 'AGENT',
    userOperation: 'GERAL',
    showTrend: true
  },
  {
    title: 'Transferência',
    displayValue: '87',
    value: 87,
    trend: 'worse',
    userType: 'AGENT',
    userOperation: 'GERAL',
    showTrend: true
  },
  {
    title: 'Transferencia %',
    displayValue: '6.98%',
    value: 6.98,
    trend: 'equal',
    userType: 'AGENT',
    userOperation: 'GERAL',
    showTrend: true
  }
]
export default function DashboardPage() {
  // const { theme } = useTheme()

  return (
    <div className="min-h-screen bg-background p-1">
      <div className="p-4 grid grid-cols-1 lg:grid-cols-[3fr,1fr] gap-4">
        <div className="flex flex-col gap-2">
          <div className="mb-4">
            <div className="">
              <div className="mt-0 mb-2">
                <div className="font-semibold text-black dark:text-white">
                  <div className=" text-xs font-medium text-gray-500 flex  items-center gap-1">
                    Diario -
                    <div className="h-2 w-2 rounded-full bg-green-500 pulse-animation"></div>{' '}
                    Última Atualização: 100
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6  gap-3  w-full">
                {mockCardIndicatorData.map((item: any, index: number) => (
                  <CardIndicatorRealTime
                    key={index}
                    title={item.title}
                    displayValue={item.displayValue}
                    value={item.value}
                    trend={item.trend}
                    userType={item.userType}
                    userOperation={item.userOperation}
                    showTrend={item.showTrend}
                    className="w-full"
                    loading={false}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className=" text-xs font-medium text-gray-500 flex  items-center gap-1 mb-1">
                Consolidado -
                <div className="h-2 w-2 rounded-full bg-green-500 pulse-animation"></div>{' '}
                Dados até: 10
              </div>
              <div className=" rounded-lg bg-white dark:bg-dark-box  w-full px-5 py-3">
                <div className="font-medium  text-black dark:text-zinc-300">
                  Consolidado Mês
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-full">
                    <div className="mb-2">
                      <h6 className="font-semibold text-sm text-gray-400">
                        teste
                      </h6>
                    </div>

                    <div className="text-center p-4">
                      <p className="text-xs font-medium">
                        Nenhum dado disponível
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mt-6 flex-1 flex-grow w-full">
            <ProfileDash />
          </div>
        </div>
      </div>
    </div>
  )
}
