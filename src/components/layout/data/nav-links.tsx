import {
  BarChart2,
  PieChart,
  User,
  BadgeCheck,
  Calendar,
  Users,
  Calculator,
  Menu,
  X,
  Trophy,
  PenTool
} from 'lucide-react'

export const navLinksOperador = [
  { to: '/', icon: <BarChart2 size={18} />, text: 'Dashboard' },
  { to: 'seus_resultados', icon: <PieChart size={18} />, text: 'Resultados' },
  { to: 'perfil', icon: <User size={18} />, text: 'Perfil' },
  { to: 'qualidade', icon: <BadgeCheck size={18} />, text: 'Qualidade' },
  { to: 'agenda', icon: <Calendar size={18} />, text: 'Agenda' },
  { to: 'recursos_humanos', icon: <Users size={18} />, text: 'RH' },

  { to: 'quartil', icon: <Trophy size={18} />, text: 'Quartil' },
  { to: 'pergamo', icon: <PenTool size={18} />, text: 'Pergamo' },
  { to: 'simulador', icon: <Calculator size={18} />, text: 'Simulador' }
]
