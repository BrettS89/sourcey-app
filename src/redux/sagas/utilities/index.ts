import api from '../../../api';

export const getDataAfterAuthentication = (userId: string) => {
  const articles = api
    .service('content/article')
    .find({
      query: {
        $sort: { _id: -1 },
        $resolve: {
          audioFile: true,
        },
      },
    });

  const playlists = api
    .service('content/playlist')
    .find({
      query: {
        userId,
        $limit: 50,
        $resolve: {
          playlistItems: true,
        },
      },
    });

  return Promise.all([articles, playlists]);
};
