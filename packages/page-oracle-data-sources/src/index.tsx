import type { KeyedEvent } from '@polkadot/react-query/types';
import * as React from 'react';
import { useRef } from 'react';
import { Route, Switch } from 'react-router';
import Tabs from '@polkadot/react-components/Tabs';

import { useTranslation } from './translate';
import Main from './Main'
import DataSourceInfo from './DataSourceInfo'

interface Props {
  basePath: string;
  className?: string;
  newEvents?: KeyedEvent[];
}

function OracleMarketApp({ basePath, className }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const itemsRef = useRef([
    {
      isRoot: true,
      name: 'overview',
      text: t<string>('Data sources')
    },
    {
      hasParams: true,
      name: 'query',
      text: t<string>('Data source details')
    }
  ]);
  return (
    <main className={className}>
      <header>
        <Tabs
          basePath={basePath}
          items={itemsRef.current}
        />
      </header>
      <Switch>
        <Route path={`${basePath}/query`}><DataSourceInfo /></Route>
        <Route>
          <Main />
        </Route>
      </Switch>
    </main>
  );
}

export default React.memo(OracleMarketApp);
