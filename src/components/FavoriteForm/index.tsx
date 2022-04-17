// import Modal from '@components/common/Modal';
import { FormContainer, BtnContainer, MovieTitle, StyledBtn, DescFavorite } from './style';

interface IFavoriteFormProperties {
  Title?: string;
  isFavorite?: boolean;
  onBookmark: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const FavoriteForm = ({ Title, isFavorite, onBookmark, onClose }: IFavoriteFormProperties) => {
  const onCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClose && onClose(e);
  };

  const onToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    onBookmark && onBookmark(e);
  };

  return (
    <FormContainer>
      <MovieTitle>{Title}</MovieTitle>
      <DescFavorite>
        {isFavorite ? '즐겨찾기에서 제거 하시겠습니까?' : '즐겨찾기에 추가 하시겠습니까?'}
      </DescFavorite>
      <BtnContainer>
        <StyledBtn onClick={onToggle} className="favorite">
          {isFavorite ? '즐겨찾기 해제' : '즐겨찾기'}
        </StyledBtn>
        <StyledBtn onClick={onCancel} className="cancel">
          취소
        </StyledBtn>
      </BtnContainer>
    </FormContainer>
  );
};

export default FavoriteForm;
