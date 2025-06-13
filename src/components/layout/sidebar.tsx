import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinksOperador } from '@/components/layout/data/nav-links'

const SidebarDemo = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [activeItem, setActiveItem] = useState('/')
  const [theme, setTheme] = useState('light')

  const sidebarVariants = {
    collapsed: {
      width: '80px',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    expanded: {
      width: '250px',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  }

  const itemVariants = {
    collapsed: {
      justifyContent: 'center',
      padding: '12px'
    },
    expanded: {
      justifyContent: 'flex-start',
      padding: '12px 16px'
    }
  }

  const textVariants = {
    hidden: {
      opacity: 0,
      x: -10,
      transition: {
        duration: 0.1
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        delay: 0.1
      }
    }
  }

  return (
    <div
      className={`${theme === 'dark' ? 'dark' : ''} ${theme === 'orange' ? 'orange' : ''}`}
    >
      <motion.div
        className="relative h-[98%] shadow-xl border-r m-2 rounded-lg "
        style={{
          backgroundColor: 'var(--sidebar)',
          borderColor: 'var(--sidebar-border)'
        }}
        variants={sidebarVariants}
        animate={isExpanded ? 'expanded' : 'collapsed'}
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
      >
        <nav className="py-4 px-4">
          {navLinksOperador.map((item, index) => (
            <motion.button
              key={item.to}
              className={`w-full flex items-center rounded-xl mb-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                activeItem === item.to ? 'shadow-md' : 'hover:shadow-sm'
              }`}
              style={{
                backgroundColor:
                  activeItem === item.to
                    ? 'var(--sidebar-primary)'
                    : 'transparent',
                color:
                  activeItem === item.to
                    ? 'var(--sidebar-primary-foreground)'
                    : 'var(--sidebar-foreground)'
              }}
              variants={itemVariants}
              animate={isExpanded ? 'expanded' : 'collapsed'}
              onClick={() => setActiveItem(item.to)}
              whileHover={{
                backgroundColor:
                  activeItem === item.to
                    ? 'var(--sidebar-primary)'
                    : 'var(--sidebar-accent)',
                color:
                  activeItem === item.to
                    ? 'var(--sidebar-primary-foreground)'
                    : 'var(--sidebar-accent-foreground)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="flex items-center gap-3 w-full"
                initial={false}
                animate={isExpanded ? 'expanded' : 'collapsed'}
              >
                <span
                  className={`flex-shrink-0 ${!isExpanded ? 'w-full flex justify-center' : ''}`}
                >
                  {item.icon}
                </span>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.span
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={textVariants}
                      className="font-medium text-xs whitespace-nowrap"
                    >
                      {item.text}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.button>
          ))}
        </nav>
        {/* Footer da Sidebar */}
      </motion.div>
    </div>
  )
}

export default SidebarDemo
