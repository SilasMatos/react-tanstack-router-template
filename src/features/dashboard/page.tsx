const stats = [
  { label: 'Usuários Ativos', value: 1240 },
  { label: 'Novos Cadastros', value: 87 },
  { label: 'Vendas Hoje', value: 56 },
  { label: 'Receita (R$)', value: '12.340' }
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map(stat => (
          <div
            key={stat.label}
            className="bg-white rounded-lg shadow p-6 flex flex-col items-center"
          >
            <div className="text-2xl font-semibold text-blue-600">
              {stat.value}
            </div>
            <div className="text-gray-500 mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Resumo</h2>
        <p className="text-gray-600">
          Bem-vindo ao painel de controle! Aqui você pode acompanhar os
          principais indicadores do sistema.
        </p>
      </div>
    </div>
  )
}
