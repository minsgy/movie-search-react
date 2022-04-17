import { GNB_HEIGHT, GRID_PADDING } from '@constants/size';
import { ReactComponent as Bookmark } from '@assets/icons/icon-bookmark-btn.svg';
import styled from 'styled-components';

const ItemContainer = styled.li`
  position: relative;
  ${({ theme }) => theme.common.flexCenter}
  background: rgba(0, 0, 0, 0.6);
  background: linear-gradient(
    170deg,
    rgba(212, 57, 25, 0.7) 0%,
    rgba(0, 0, 0, 0.7) 20%,
    rgba(0, 0, 0, 0.7) 70%,
    rgba(212, 57, 25, 0.7) 100%
  );
  width: 100%;
  height: 300px;
  margin-top: 20px;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;

  transition: transform 0.2s ease 0s;

  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: ${GNB_HEIGHT + GRID_PADDING}px;
  }

  &.grabbing {
    cursor: grabbing;
    opacity: 0.7;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  max-width: 50%;
  height: 100%;
  background-color: #000;
  align-items: center;
`;

const ContentContainer = styled.div`
  flex: 1;
  ${({ theme }) => theme.common.flexColumn}
  padding: 8px 8px 8px 16px;
`;

const MovieTitle = styled.strong`
  overflow: hidden;
  line-height: 1.6rem;
  max-height: 4.8rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color.textColor};
  text-overflow: ellipsis;
  display: -webkit-box;
  word-break: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const MovieInfo = styled.span`
  margin-top: 16px;
`;

const BookmarkBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const BookmarkIcon = styled(Bookmark)``;

export {
  ItemContainer,
  ImageContainer,
  ContentContainer,
  MovieTitle,
  MovieInfo,
  BookmarkBtn,
  BookmarkIcon,
};
