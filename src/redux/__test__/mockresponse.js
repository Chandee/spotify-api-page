export const mock = {
  data: {
    albums: {
      href: 'https://api.spotify.com/v1/search?query=zeca&type=album&market=from_token&offset=0&limit=10',
      items: [
        {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of',
              },
              href: 'https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of',
              id: '0LyfQWJT6nXafLPZqxe9Of',
              name: 'Vários intérpretes',
              type: 'artist',
              uri: 'spotify:artist:0LyfQWJT6nXafLPZqxe9Of',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/6saQKGLQ7cDoPbD4a6uPGA',
          },
          href: 'https://api.spotify.com/v1/albums/6saQKGLQ7cDoPbD4a6uPGA',
          id: '6saQKGLQ7cDoPbD4a6uPGA',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b27336ef8e4d7687ee5c19c3e7cc',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e0236ef8e4d7687ee5c19c3e7cc',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d0000485136ef8e4d7687ee5c19c3e7cc',
              width: 64,
            },
          ],
          name: 'Zeca Apresenta: O Quintal Do Zeca Pagodinho (Ao Vivo)',
          release_date: '2016-03-03',
          release_date_precision: 'day',
          total_tracks: 28,
          type: 'album',
          uri: 'spotify:album:6saQKGLQ7cDoPbD4a6uPGA',
        },
      ],
      limit: 10,
      next: 'https://api.spotify.com/v1/search?query=zeca&type=album&market=from_token&offset=10&limit=10',
      offset: 0,
      previous: null,
      total: 464,
    },
  },
};

export const mock2 = {
  data: {
    album_type: 'album',
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/3qZ2n5keOAat1SoF6bHwmb',
        },
        href: 'https://api.spotify.com/v1/artists/3qZ2n5keOAat1SoF6bHwmb',
        id: '3qZ2n5keOAat1SoF6bHwmb',
        name: 'Zeca Pagodinho',
        type: 'artist',
        uri: 'spotify:artist:3qZ2n5keOAat1SoF6bHwmb',
      },
    ],
    copyrights: [
      {
        text: '© 2009 Universal Music International',
        type: 'C',
      },
      {
        text: '℗ 2009 Universal Music International',
        type: 'P',
      },
    ],
    external_ids: {
      upc: '00602577153112',
    },
    external_urls: {
      spotify: 'https://open.spotify.com/album/4rDMla3wFYoWfhcoUQ5XuC',
    },
    genres: [],
    href: 'https://api.spotify.com/v1/albums/4rDMla3wFYoWfhcoUQ5XuC',
    id: '4rDMla3wFYoWfhcoUQ5XuC',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b2739f171d77622d03aa2d31832c',
        width: 640,
      },
      {
        height: 300,
        url: 'https://i.scdn.co/image/ab67616d00001e029f171d77622d03aa2d31832c',
        width: 300,
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/ab67616d000048519f171d77622d03aa2d31832c',
        width: 64,
      },
    ],
    label: 'Universal Music Ltda.',
    name: 'Zeca Pagodinho - Uma Prova De Amor Ao Vivo (Deluxe)',
    popularity: 54,
    release_date: '2009-07-10',
    release_date_precision: 'day',
    total_tracks: 24,
    tracks: {
      href: 'https://api.spotify.com/v1/albums/4rDMla3wFYoWfhcoUQ5XuC/tracks?offset=0&limit=50',
      items: [
        {
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3qZ2n5keOAat1SoF6bHwmb',
              },
              href: 'https://api.spotify.com/v1/artists/3qZ2n5keOAat1SoF6bHwmb',
              id: '3qZ2n5keOAat1SoF6bHwmb',
              name: 'Zeca Pagodinho',
              type: 'artist',
              uri: 'spotify:artist:3qZ2n5keOAat1SoF6bHwmb',
            },
          ],
          disc_number: 1,
          duration_ms: 194678,
          explicit: false,
          external_urls: {
            spotify: 'https://open.spotify.com/track/3ADuEIn09NAZIBgpYY3IsE',
          },
          href: 'https://api.spotify.com/v1/tracks/3ADuEIn09NAZIBgpYY3IsE',
          id: '3ADuEIn09NAZIBgpYY3IsE',
          is_local: false,
          name: 'Deixa A Vida Me Levar - Ao Vivo',
          preview_url:
            'https://p.scdn.co/mp3-preview/d0b1a9ecaa7d723cc36fcf74c74801738eb5af27?cid=a5626c71bb664145b9bdce4e0b87c865',
          track_number: 1,
          type: 'track',
          uri: 'spotify:track:3ADuEIn09NAZIBgpYY3IsE',
        },
      ],
      limit: 50,
      next: null,
      offset: 0,
      previous: null,
      total: 24,
    },
    type: 'album',
    uri: 'spotify:album:4rDMla3wFYoWfhcoUQ5XuC',
  },
};
