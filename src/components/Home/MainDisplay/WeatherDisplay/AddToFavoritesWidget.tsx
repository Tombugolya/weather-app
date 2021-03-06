import { FC } from 'react';
import { HeartFill, Heart } from 'react-bootstrap-icons';
import { Box, Button, withStyles } from '@material-ui/core';
import { LocationInfoResponse } from '../../../../api/AccuWeatherAPI';
import {
  addFavorite,
  removeFavorite,
} from '../../../../store/reducers/weatherReducer';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { red } from '@material-ui/core/colors';

interface AddToFavoritesWidgetProps {
  info: LocationInfoResponse;
}

const ColorButton = withStyles(() => ({
  root: {
    color: red[500],
  },
}))(Button);

const AddToFavoritesWidget: FC<AddToFavoritesWidgetProps> = ({ info }) => {
  const { Key } = info;
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.weather.favorites);
  const isFavorited = favorites.includes(Key);

  const onAddToFavoritesClick = () => {
    dispatch(isFavorited ? removeFavorite(Key) : addFavorite(Key));
  };

  return (
    <Box
      color="primary.main"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
    >
      <ColorButton onClick={onAddToFavoritesClick}>
        {isFavorited ? <HeartFill size={50} /> : <Heart size={50} />}
      </ColorButton>
    </Box>
  );
};

export default AddToFavoritesWidget;
