import React, { useState, useEffect } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { ContentTradingView } from './Graph.styled';

const Graph = ({ symbol, interval }) => {
  const [theme, setTheme] = useState(Themes.LIGHT);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme(Themes.DARK);
    }
  }, []);

  return (
    <ContentTradingView>
    <TradingViewWidget
      symbol={symbol}
      interval={interval}
      theme={theme}
      hide_side_toolbar={false}
      allow_symbol_change={false}
      autosize={true}
    />
    </ContentTradingView>

  );
};

export default Graph;
