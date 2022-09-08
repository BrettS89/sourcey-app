import React from 'react';
import { PlaylistItem, Article as ArticleType } from '../../../types';
import Article from '../discover/article';

interface Props {
  playlistItem: PlaylistItem;
  selectArticle(article: ArticleType): void;
  openPlaylistItemOptionsModal(playlistId: string): void;
}

const PlaylistItemCard: React.FC<Props> = ({ playlistItem, selectArticle, openPlaylistItemOptionsModal }) => {
  return (
    <>
      <Article
        article={playlistItem.article!}
        selectArticle={selectArticle}
        openPlaylistItemOptionsModal={openPlaylistItemOptionsModal}
        playlistItemId={playlistItem._id}
      />
    </>
  );
};

export default PlaylistItemCard;
