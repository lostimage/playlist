;(function(){
    'use strict';
    var list = [{
                author: "led zeppelin",
                song: "stairway to heaven",
                duration: "2:03"
            },
            {
                author: "queen",
                song: "bohemian rhapsody",
                duration: "2:30"
            },
            {
                author: "lynyrd skynyrd",
                song: "free bird",
                duration: "1:56"
            },
            {
                author: "deep purple",
                song: "smoke on the water",
                duration: "3:03"
            },
            {
                author: "jimi hendrix",
                song: "all along the watchtower",
                duration: "2:53"
            },
            {
                author: "AC/DC",
                song: "back in black",
                duration: "2:43"
            },
            {
                author: "queen",
                song: "we will rock you",
                duration: "2:13"
            },
            {
                author: "metallica",
                song: "enter sandman",
                duration: "3:03"
            }
        ];

        var playList = document.querySelector('.ba-playlist__list');

        for (var i = 0 ; i < list.length ; i++) {
            var playListLi = document.createElement('li');
            var playListTop = document.createElement('div')
            var playListAuthor = document.createElement('span');
            var playListSong = document.createElement('div');
            var playListDuration = document.createElement('span');
            // var playListSvg = document.createElement('svg');

            // playListSvg.classList.add('ba-tune__like');
            // playListSvg.classList.add('icon');
            // playListSvg.classList.add('icon-heart-broken');
            playListLi.classList.add('ba-tune');
            playListTop.classList.add('ba-tune__top');
            playListAuthor.classList.add('ba-tune__author');
            playListSong.classList.add('ba-tune__song');
            playListDuration.classList.add('ba-tune__duration');

           playList.appendChild(playListLi);
            playListLi.appendChild(playListTop);
            playListTop.appendChild(playListDuration);
           playListTop.appendChild(playListAuthor);
            playListLi.appendChild(playListSong);
            // playListLi.appendChild(playListSvg);

            playListAuthor.innerText = list[i].author;
            // console.log(list[i].author);
            playListSong.innerText = list[i].song;
            // console.log(list[i].song);
            playListDuration.innerText = list[i].duration;
            // console.log(list[i].duration);
            // playListSvg.innerHTML = '<use xlink:href="#icon-heart-broken">'+'</use>';
            // console.log(playListSvg.innerHTML);


        }






})();
