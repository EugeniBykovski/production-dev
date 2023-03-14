import { CSSProperties, memo, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss'

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = memo(({ className, src, size, alt }: AvatarProps) => {
  const mods: Mods = {}

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size || 100,
      height: size || 100,
    }
  }, [size])

  return (
    <img 
      src={src} 
      alt={alt}
      className={classNames(cls.Avatar, mods, [className])} 
      style={styles} 
    />
  )
})