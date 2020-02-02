import { ComponentType } from 'react';
import Ide from './containers/Ide';
import Files from './containers/Files';
import Photos from './containers/Photos';

interface AppRoute {
  name: string;
  default?: boolean;
  path: string;
  iconPath: string;
  component: ComponentType;
}

export const routes: AppRoute[] = [{
  name: 'IDE',
  default: true,
  path: '/ide',
  iconPath: '/images/icon-ide.svg',
  component: Ide
}, {
  name: 'Photos',
  path: '/photos',
  iconPath: '/images/icon-photos.png',
  component: Photos
}, {
  name: 'Files',
  path: '/files',
  iconPath: '/images/icon-files.png',
  component: Files
}];

