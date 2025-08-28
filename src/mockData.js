import { PageNames } from './pages/index.js';
import NotFoundIcon from './assets/icons/not-found.svg'

export const mockData = {
  [PageNames.NotFond]: {
    title: '404',
    titleTag: 'h1',
    subtitle: 'Не туда попали',
    subtitleTag: 'h2',
    goBack: '/',
    linkContent: 'Назад к чатам',
    svg: NotFoundIcon,
    titleSize: 'large',
    subtitleSize: 'small',
    subtitleVariant: 'secondary',
  },
  [PageNames.SomethingWentWrong]: {
    title: '500',
    titleTag: 'h1',
    subtitle: 'subtitle',
    subtitleTag: 'h2',
    goBack: '/',
    linkContent: 'Назад, к чатам!',
  },
}
