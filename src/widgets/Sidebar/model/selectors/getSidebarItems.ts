import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/list.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import ArticleIcon from 'shared/assets/icons/articles.svg'
import { SidebarItemType } from './types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  userData => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Home'
      },
      {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'About'
      }
    ]

    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePath.profile + userData?.id,
          Icon: ProfileIcon,
          text: 'Profile',
          authOnly: true
        },
        {
          path: RoutePath.articles,
          Icon: ArticleIcon,
          text: 'Articles',
          authOnly: true
        }
      )
    }
    
    return sidebarItemsList
  }
)