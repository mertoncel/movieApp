import React, { useState } from 'react';
import { Segmented, List } from 'antd';
import { useGetSeriesSeasonQuery } from '../../store/moviesSlice';
import dayjs from 'dayjs';
import style from './SeriesSeasons.module.css';
import { Link } from 'react-router-dom';

interface SeriesSeasonsProps {
  imdbID: string;
  totalSeasons: string;
}

const SeriesSeasons: React.FC<SeriesSeasonsProps> = ({
  imdbID,
  totalSeasons,
}) => {
  const [selectedSeason, setSelectedSeason] = useState('1');
  const {
    data: seasonData,
    error,
    isLoading,
  } = useGetSeriesSeasonQuery({ imdbID, season: selectedSeason });

  const seasons = Array.from(
    { length: Number(totalSeasons) },
    (_, i) => `Season ${i + 1}`
  );

  return (
    <div className={style.seasonContainer}>
      <Segmented
        options={seasons}
        onChange={(value) => setSelectedSeason(value.toString().split(' ')[1])}
      />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading season data</p>}
      {seasonData && (
        <List
          itemLayout="horizontal"
          dataSource={seasonData.Episodes}
          renderItem={(episode) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <Link to={`/episode/${episode.imdbID}`}>{episode.Title}</Link>
                }
                description={`Episode ${episode.Episode} - ${dayjs(episode.Released).format('MMMM D, YYYY')}`}
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default SeriesSeasons;
