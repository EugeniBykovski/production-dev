import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>

      </div>
    </div>
  )
}