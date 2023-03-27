import { ArticleView } from '../../model/types/article';
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames';
import ListIcon from 'shared/assets/icons/list_block.svg';
import TiledIcon from 'shared/assets/icons/plate.svg';
import cls from './ArticleViewSelector.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView,
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  { view: ArticleView.PLATE, icon: TiledIcon },
  { view: ArticleView.LIST, icon: ListIcon },
]

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props
  const { t } = useTranslation()

  const onClick = (newView: ArticleView) => () => onViewClick?.(newView)

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map(viewType => (
        <Button 
          theme={ThemeButton.CLEAR} 
          key={viewType.view} 
          onClick={onClick(viewType.view)}
        >
          <Icon 
            className={classNames('', {[cls.notSelected]: viewType.view !== view})}
            Svg={viewType.icon}  
          />
        </Button>
      ))}
    </div>
  )
}