import {
  ItemContainer,
  ImageContainer,
  ContentContainer,
  MovieTitle,
  MovieInfo,
  BookmarkBtn,
  // BookmarkIcon,
} from './style';
import { IMovie } from '@interfaces/movies';
import PlaceHolder from '@assets/images/image-placeholder.png';
import Image from '@components/common/Image';
import { memo } from 'react';
import Icon from '@components/common/Icon';

interface IMovieItemProperties extends IMovie {
  isFavorite: boolean;
  onOpenModal: (movie: IMovie) => void;
  draggable?: boolean;
  position?: number | null;
  onDragStart: (e: React.DragEvent<HTMLLIElement>, movie: IMovie) => void;
  onDragEnd: (e: React.DragEvent<HTMLLIElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLLIElement>) => void;
  onDrop: (e: React.DragEvent<HTMLLIElement>) => void;
}

const MovieItem = ({
  imdbID,
  Title,
  Year,
  Type,
  Poster,
  position,
  isFavorite,
  onOpenModal,
  draggable,
  onDragStart,
  onDragEnd,
  onDrop,
  onDragOver,
}: IMovieItemProperties) => {
  const isNotAvailable = Poster === 'N/A';
  const posterUrl = isNotAvailable ? PlaceHolder : Poster;

  const onClickItem = () => {
    onOpenModal && onOpenModal({ imdbID, Title, Year, Type, Poster, isFavorite });
  };

  const _onDragStart = (e: React.DragEvent<HTMLLIElement>) => {
    onDragStart && onDragStart(e, { imdbID, Title, Year, Type, Poster, isFavorite });
  };

  return (
    <ItemContainer
      draggable={draggable}
      data-position={position}
      onClick={onClickItem}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
      onDragStart={_onDragStart}
      onDragOver={onDragOver}
      // onTouchStart={_onDragStart}
      // onTouchEnd={onDragEnd}
      // onTouchCancel={onDrop}
      // onTouchMove={onDragOver}
    >
      <ImageContainer>
        <Image mode="fill" src={posterUrl} alt="영화 포스터" lazy />
      </ImageContainer>
      <ContentContainer>
        <MovieTitle>{Title}</MovieTitle>
        <MovieInfo>
          {Year} / {Type}
        </MovieInfo>
      </ContentContainer>
      <BookmarkBtn>
        <Icon name={isFavorite ? 'bookmark-on' : 'bookmark'} alt="즐겨찾기" />
      </BookmarkBtn>
    </ItemContainer>
  );
};

export default memo(MovieItem);
