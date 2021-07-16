import WeatherSummary from './WeatherSummary';
import AddToFavoritesWidget from './AddToFavoritesWidget';
import { FC, memo } from 'react';
import { useAppSelector } from '../hooks/hooks';
import { Box } from '@material-ui/core';

const WeatherDisplay: FC = () => {
  const current = useAppSelector((state) => state.weather.current);
  const { conditions, info, fiveDayForecast } = current;

  return (
    <Box
      height="100%"
      display="flex"
      justifyContent="space-around"
      flexDirection="column"
      alignItems="center"
    >
      {current && (
        <>
          <Box display="flex" justifyContent="space-around" alignItems="center">
            <WeatherSummary conditions={conditions} info={info} />
            <AddToFavoritesWidget info={info} />
          </Box>
          <Box style={{ margin: '0 auto' }} color="secondary.main">
            <h1 style={{ fontSize: '4em' }}>
              {current.conditions.WeatherText}
            </h1>
          </Box>
          <div style={{ color: 'white' }}>
            {current.conditions.WeatherText} {current.conditions.WeatherIcon}{' '}
            {current.info.LocalizedName}
            {current.info.AdministrativeArea.LocalizedName}
            {current.info.Country.LocalizedName}
          </div>
        </>
      )}
    </Box>
  );
};

export default memo(WeatherDisplay);