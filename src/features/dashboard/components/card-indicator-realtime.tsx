import React from 'react'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { FaArrowTrendUp, FaArrowTrendDown } from 'react-icons/fa6'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { ICON_CONFIG } from '@/constants/icon-configs'

type TrendStatus = 'better' | 'worse' | 'equal'
type UserType = 'SUPERVISOR' | 'AGENT'
type OperationType = 'SERASA' | 'ALTO VALOR' | string

interface CardIndicatorProps {
  title: string
  displayValue: string
  value?: number
  loading?: boolean
  trend?: TrendStatus
  userType?: UserType
  userOperation?: OperationType
  showTrend?: boolean
  className?: string
  variant?: 'default' | 'compact'
}

const RESTRICTED_OPERATIONS = ['SERASA', 'ALTO VALOR'] as const

const getIconByTitle = (title: string): React.ReactElement => {
  const iconConfig = ICON_CONFIG.find(item => item.title_icon === title)

  return iconConfig ? (
    React.cloneElement(iconConfig.icon, {
      className: 'text-primary'
    } as React.HTMLAttributes<HTMLElement>)
  ) : (
    <IoMdInformationCircleOutline size={18} className="text-primary" />
  )
}

const getTrendIcon = (trend: TrendStatus): React.ReactElement => {
  const iconMap = {
    better: <FaArrowTrendUp size={17} className="text-green-500" />,
    worse: <FaArrowTrendDown size={17} className="text-destructive" />,
    equal: (
      <IoMdInformationCircleOutline
        size={17}
        className="text-muted-foreground"
      />
    )
  }

  return iconMap[trend]
}

const getTrendText = (trend: TrendStatus): string => {
  const textMap = {
    better: '↑ Dia Ant.',
    worse: '↓ Dia Ant.',
    equal: '→ Igual'
  }

  return textMap[trend]
}

const shouldShowTrendIndicator = (
  showTrend: boolean,
  userType?: UserType,
  userOperation?: OperationType
): boolean => {
  if (!showTrend) return false
  if (userType === 'SUPERVISOR') return false
  if (userOperation && RESTRICTED_OPERATIONS.includes(userOperation as any))
    return false

  return true
}

const CardIcon: React.FC<{
  title: string
  loading: boolean
}> = ({ title, loading }) => (
  <div className="p-2 bg-accent/20 hover:bg-accent/40 transition-colors duration-200 rounded-lg shadow-sm ">
    {loading ? (
      <Skeleton className="h-[18px] w-[18px] rounded-full" />
    ) : (
      getIconByTitle(title)
    )}
  </div>
)

const CardTitle: React.FC<{
  title: string
  loading: boolean
}> = ({ title, loading }) =>
  loading ? (
    <Skeleton className="h-4 w-24 ml-3" />
  ) : (
    <h2 className="ml-3 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200">
      {title}
    </h2>
  )

const TrendIndicator: React.FC<{
  trend: TrendStatus
  loading: boolean
}> = ({ trend, loading }) => (
  <div className="flex items-center justify-center bg-card p-2 shadow-sm rounded-full ">
    {loading ? (
      <Skeleton className="h-[17px] w-[17px] rounded-full" />
    ) : (
      getTrendIcon(trend)
    )}
  </div>
)

const ValueDisplay: React.FC<{
  displayValue: string
  value?: number
  title: string
  loading: boolean
}> = ({ displayValue, value, title, loading }) => (
  <div className="flex items-center gap-1">
    {loading ? (
      <Skeleton className="h-5 w-16" />
    ) : (
      <>
        <span className="text-lg font-semibold text-foreground">
          {displayValue || 0}
        </span>
        {title === 'TMA' && value !== undefined && (
          <span className="text-lg font-semibold text-foreground">
            | {value}s
          </span>
        )}
      </>
    )}
  </div>
)

const TrendText: React.FC<{
  trend: TrendStatus
}> = ({ trend }) => (
  <p
    className={cn(
      'text-xs font-medium',
      trend === 'equal' ? 'text-muted-foreground' : 'text-foreground'
    )}
  >
    {getTrendText(trend)}
  </p>
)

// Main component
const CardIndicatorRealTime: React.FC<CardIndicatorProps> = ({
  title,
  displayValue,
  value,
  loading = false,
  trend = 'equal',
  userType,
  userOperation,
  showTrend = true,
  className,
  variant = 'default'
}) => {
  const showTrendUI = shouldShowTrendIndicator(
    showTrend,
    userType,
    userOperation
  )

  const cardVariants = {
    default: 'p-4',
    compact: 'p-3'
  }

  return (
    <div
      className={cn(
        'w-full rounded-xl bg-card border border-border hover:shadow-md hover:border-primary/20 transition-all duration-200 hover:scale-[1.02]',
        cardVariants[variant],
        className
      )}
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center min-w-0 flex-1">
          <CardIcon title={title} loading={loading} />
          <CardTitle title={title} loading={loading} />
        </div>

        {showTrendUI && <TrendIndicator trend={trend} loading={loading} />}
      </div>

      <div className="flex items-center justify-between mt-4">
        <ValueDisplay
          displayValue={displayValue}
          value={value}
          title={title}
          loading={loading}
        />

        {showTrendUI && !loading && <TrendText trend={trend} />}
      </div>
    </div>
  )
}

export default CardIndicatorRealTime
export type { CardIndicatorProps, TrendStatus, UserType, OperationType }
