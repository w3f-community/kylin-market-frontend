// Copyright 2017-2020 @polkadot/apps-routing authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from 'i18next';
import type { Route } from './types';

import Component from '@polkadot/app-oracle-data-sources';

export default function create (t: TFunction): Route {
  return {
    Component,
    display: {
      needsAccounts: true,
      needsApi: []
    },
    group: 'network',
    icon: 'server',
    name: 'data-sources',
    text: t('nav.oracle-data-sources', 'Oracle data sources', { ns: 'apps-routing' })
  };
}
