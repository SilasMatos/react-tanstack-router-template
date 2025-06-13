import React from 'react'
import {
  FaPhone,
  FaExchangeAlt,
  FaRedoAlt,
  FaPhoneSlash,
  FaClock,
  FaStopwatch,
  FaPercentage,
  FaChartLine
} from 'react-icons/fa'
import { BiSolidPurchaseTag } from 'react-icons/bi'
import { FiRefreshCw } from 'react-icons/fi'
import { MdCall } from 'react-icons/md'

interface IconConfig {
  title_icon: string
  icon: React.ReactElement
}

export const ICON_CONFIG: IconConfig[] = [
  { title_icon: 'Atendidas', icon: React.createElement(FaPhone, { size: 18 }) },
  {
    title_icon: 'Transferência',
    icon: React.createElement(FaExchangeAlt, { size: 18 })
  },
  {
    title_icon: 'Transferencia %',
    icon: React.createElement(FaExchangeAlt, { size: 18 })
  },
  {
    title_icon: '% Transferência',
    icon: React.createElement(FaExchangeAlt, { size: 18 })
  },
  {
    title_icon: 'Rechamada 72h',
    icon: React.createElement(FaRedoAlt, { size: 18 })
  },
  {
    title_icon: '% Rechamada',
    icon: React.createElement(FaRedoAlt, { size: 18 })
  },
  {
    title_icon: 'Rechamada 72 %',
    icon: React.createElement(FaRedoAlt, { size: 18 })
  },
  {
    title_icon: 'Rechamada %',
    icon: React.createElement(FaRedoAlt, { size: 18 })
  },
  {
    title_icon: 'Desconectada',
    icon: React.createElement(FaPhoneSlash, { size: 18 })
  },
  { title_icon: 'TMA', icon: React.createElement(FaClock, { size: 18 }) },
  {
    title_icon: 'Shortcall',
    icon: React.createElement(FaStopwatch, { size: 18 })
  },
  { title_icon: 'FCR', icon: React.createElement(MdCall, { size: 18 }) },
  {
    title_icon: 'Qtde Vendas',
    icon: React.createElement(BiSolidPurchaseTag, { size: 18 })
  },
  {
    title_icon: 'Conversão %',
    icon: React.createElement(FiRefreshCw, { size: 18 })
  },
  {
    title_icon: 'Retencao Lead %',
    icon: React.createElement(FaPercentage, { size: 18 })
  },
  {
    title_icon: 'Conversao Gross %',
    icon: React.createElement(FaChartLine, { size: 18 })
  },
  {
    title_icon: 'Conversao Migracao %',
    icon: React.createElement(FaExchangeAlt, { size: 18 })
  }
]

export type { IconConfig }
