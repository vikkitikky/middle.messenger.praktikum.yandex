import { PageNames } from './pages/index.js';

export const mockData = {
  [PageNames.NotFond]: {
    title: '404',
    titleTag: 'h1',
    subtitle: 'subtitle',
    subtitleTag: 'h2',
    goBack: '/',
    linkContent: 'Назад, к чатам!'
  },
  [PageNames.SomethingWentWrong]: {
    title: '500',
    titleTag: 'h1',
    subtitle: 'subtitle',
    subtitleTag: 'h2',
    goBack: '/',
    linkContent: 'Назад, к чатам!'
  },
}
