# alt-fest-app-backend

ALT Festival App Backend

Installation instructions:

1. Install MongoDB
2. Git clone
3. npm install
4. Start back-end using 'npm start' or 'nodemon start'

##To populate the DB:

**POST to: localhost:3000/api/artists/**
```
[
    {
        "name": "Skrillex"
    },
    {
        "name": "Major Lazer"
    },
    {
        "name": "M83"
    }
]

```
**POST to: localhost:3000/api/songs/**
```
[
    {
        "likes": 0,
        "name": "Skrillex&Damian\"Jr.Gong\"Marley-MakeItBunDem[OFFICIALVIDEO]",
        "urlYoutube": "https: //www.youtube.com/watch?v=BGpzGu9Yp6Y",
        "artistId": "56216ea9690c7da765f93af9" // change this id with your own
    },
    {
        "likes": 0,
        "name": "FirstOfTheYear(Equinox)-Skrillex[OFFICIAL]",
        "urlYoutube": "https: //www.youtube.com/watch?v=2cXDgFwE13g",
        "artistId": "56216ea9690c7da765f93af9" // change this id with your own
    },
    {
        "likes": 0,
        "name": "Major Lazer & DJ Snake - Lean On (feat. MØ) (Official Music Video)",
        "urlYoutube": "https://www.youtube.com/watch?v=YqeW9_5kURI",
        "artistId": "56216ea9690c7da765f93afa" // change this id with your own
    },
    {
        "likes": 0,
        "name": "Major Lazer - Watch out for this",
        "urlYoutube": "https: //www.youtube.com/watch?v=8W_1vg7W6Oo",
        "artistId": "56216ea9690c7da765f93afa" // change this id with your own
    },
    {
        "likes": 0,
        "name": "M83-Oblivion(feat.SusanneSundfør)",
        "urlYoutube": "https: //www.youtube.com/watch?v=1mkUp1V3ys0",
        "artistId": "56216ea9690c7da765f93afb" // change this id with your own
    },
    {
        "likes": 0,
        "name": "M83'Reunion'Officialvideo",
        "urlYoutube": "https: //www.youtube.com/watch?v=DJQQrjVmQG0",
        "artistId": "56216ea9690c7da765f93afb" // change this id with your own
    }
]
```
**To get a list of songs for an artist:**
localhost:3000/api/artists/56216ea9690c7da765f93af9/songs

##Allowed methods:
**GET:**
```
localhost:3000/api/artists/
localhost:3000/api/songs/
localhost:3000/api/artists/:artistId/songs
```
**PUT, DELETE:**
```
localhost:3000/api/artists/:id
localhost:3000/api/songs/:id
```
