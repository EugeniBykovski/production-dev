import { useState } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import MainIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/list.svg'

import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => setCollapsed(prev => !prev)

  return (
    <div 
      data-testid="sidebar"
      className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
    >
      <Button 
        data-testid='sidebar-toggle' 
        onClick={onToggle}
        className={cls.collapsedBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        square
        size={ButtonSize.M}
      >
        {collapsed ? ">" : "<"}
      </Button>

      <div className={cls.items}>
        <AppLink 
          theme={AppLinkTheme.SECONDARY} 
          to={RoutePath.main} 
          className={cls.item}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.link}>Home</span>
        </AppLink>
        
        <AppLink 
          theme={AppLinkTheme.SECONDARY} 
          to={RoutePath.about}
          className={cls.item}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>About</span>
        </AppLink>
      </div>

      <div className={cls.switchers}>
        <LangSwitcher short={collapsed} className={cls.lang} />
        <ThemeSwitcher />
      </div>
    </div>
  )
}