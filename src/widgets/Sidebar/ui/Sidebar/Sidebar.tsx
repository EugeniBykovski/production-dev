import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { SidebarItemsList } from '../../model/items';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => setCollapsed(prev => !prev)

  const itemsList = useMemo(() => SidebarItemsList.map(item => (
    <SidebarItem
      item={item}
      key={item.path}
      collapsed={collapsed}
    />
  )), [collapsed])

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
        {itemsList}
      </div>

      <div className={cls.switchers}>
        <LangSwitcher short={collapsed} className={cls.lang} />
        <ThemeSwitcher />
      </div>
    </div>
  )
})