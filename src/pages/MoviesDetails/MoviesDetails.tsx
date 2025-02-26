import { useParams, useNavigate } from 'react-router-dom';
import style from './MovieDetails.module.css';
import { Tag } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import imdbIcon from '../../assets/imdb.png';
import rottenTomatoesIcon from '../../assets/rotten_tomatoes.png';
import metacriticIcon from '../../assets/metacritic.png';
import { useGetMovieDetailsQuery } from '../../store/moviesSlice';
import CustomSpin from '../../components/CustomSpin';
import SeriesSeasons from './SeriesSeasons';

const MovieDetails = () => {
  const { imdbID } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetMovieDetailsQuery(imdbID || '');

  const handleBackClick = () => {
    navigate(-1);
  };

  const getRatingIcon = (source: string) => {
    switch (source) {
      case 'Internet Movie Database':
        return imdbIcon;
      case 'Rotten Tomatoes':
        return rottenTomatoesIcon;
      case 'Metacritic':
        return metacriticIcon;
      default:
        return undefined;
    }
  };

  if (isLoading) return <CustomSpin />;
  if (error) return <p>Error loading movie details.</p>;

  return (
    <div className={style.movieDetailCard}>
      <button onClick={handleBackClick} className={style.backButton}>
        <ArrowLeftOutlined />
      </button>
      <div className={style.flexWrapper}>
        <div className={style.movieDetailCardLeft}>
          <img src={data?.Poster} alt={data?.Title} />
          <div className={style.movieDetailCardLeftBottom}>
            <div className={style.movieDetailCardLeftBottomItem}>
              <h3>Rating</h3>
              <div className={style.rating}>
                {data?.Ratings?.map((rating) => (
                  <div key={rating.Source} className={style.ratingItem}>
                    <img
                      src={getRatingIcon(rating.Source)}
                      alt={rating.Source}
                      className={style.ratingIcon}
                    />
                    {rating.Value}
                  </div>
                ))}
              </div>
            </div>
            <div className={style.movieDetailCardLeftBottomItem}>
              <h3>Duration</h3>
              <span>{data?.Runtime}</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className={style.title}>
              <h1>{data?.Title}</h1>
              <span>({data?.Year})</span>
            </div>
            <div>
              <h3>Director</h3>
              <span>{data?.Director}</span>
            </div>
            <div>
              <h3>Actors</h3>
              {data?.Actors?.split(', ').map((actor, index) => (
                <Tag key={index} color="#646cff">
                  {actor}
                </Tag>
              ))}
            </div>
            <div>
              <h3>Genre</h3>
              <span>{data?.Genre}</span>
            </div>
            <div>
              <h3>Synopsis</h3>
              <span>{data?.Plot}</span>
            </div>
            {data?.Type === 'series' && (
              <SeriesSeasons
                imdbID={data.imdbID}
                totalSeasons={data?.totalSeasons || ''}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
