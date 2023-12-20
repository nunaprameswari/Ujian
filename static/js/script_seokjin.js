const music = new Audio('./static/songs/3.mp3');

const songs = [
    {
        id: '1',
        songName: `Anpanman <br>
        <div class="album">Love Yourself 轉 Tear (2018)</div>`,
        poster: "./static/img/seokjin/ephiphany.jpg",
    },
    {
        id: '2',
        songName: `뱁새 (Baepsae) <br>
        <div class="album">In The Mood For Love pt.2 (2016)</div>`,
        poster: "./static/img/seokjin/super_tuna.jpg",
    },
    {
        id: '3',
        songName: `Black Swan <br>
        <div class="album">Map Of The Soul 7 (2020)</div>`,
        poster: "./static/img/seokjin/the_astronaut.jpg",
    },
    {
        id: '4',
        songName: `Idol
        <div class="album">Love Yourself 结 Answer (2018)</div>`,
        poster: "./static/img/seokjin/moon.jpg",
    },
    {
        id: '5',
        songName: `Ddaeng <br>
        <div class="album">DD Ceremony</div>`,
        poster: "./static/img/seokjin/tonight.jpg",
    },
    {
        id: '6',
        songName: `2 Blood Sweat and Tears
        <div class="album">WINGS (2016)</div>`,
        poster: "./static/img/Blood_Sweat_Tears1.jpg",
    },
    {
        id: '7',
        songName: `Boy With Luv (Feat. Halsey)
        <div class="album">Map Of The Soul : PERSONA (2020)</div>`,
        poster: "./static/img/Boy_With_Luv1.jpg",
    },
    {
        id: '8',
        songName: `Butter
        <div class="album">BUTTER (2021)</div>`,
        poster: "./static/img/Butter1.jpg",
    },
    {
        id: '9',
        songName: `DNA
        <div class="album">Love Yourself 承 Her (2017)</div>`,
        poster: "./static/img/DNA1.jpg",
    },
    {
        id: '10',
        songName: `쩔어 (Dope)
        <div class="album">In The Mood For Love pt.1 (2015)</div>`,
        poster: "./static/img/DOPE1.jpg",
    },
    {
        id: '11',
        songName: `Dynamite
        <div class="album">Dynamite (2020)</div>`,
        poster: "./static/img/Dynamite1.jpeg",
    },
    {
        id: '12',
        songName: `Fake Love
        <div class="album">Love Yourself 轉 Tear (2018)</div>`,
        poster: "./static/img/FAKE_LOVE1.jpg",
    },
    {
        id: '13',
        songName: `고민보다 Go (Go Go)
        <div class="album">Love Yourself 承 Her (2017)</div>`,
        poster: "./static/img/Go_Go1.jpg",
    },
    {
        id: '14',
        songName: `Danger <br>
        <div class="album">Dark & Wild (2014)</div>`,
        poster: "./static/img/danger1.png",
    },
    {
        id: '15',
        songName: `MIC Drop
        <div class="album">Love Yourself 承 Her (2017)</div>`,
        poster: "./static/img/mic_drop1.jpg",
    },
    {
        id: '16',
        songName: `ON
        <div class="album">Map Of The Soul 7 (2020)</div>`,
        poster: "./static/img/ON1.jpeg",
    },
    {
        id: '17',
        songName: `Permission to Dance
        <div class="album">BUTTER (2021)</div>`,
        poster: "./static/img/Permission_to_Dance1.jpeg",
    },
    {
        id: '18',
        songName: `RUN
        <div class="album">In The Mood For Love pt.2 (2016)</div>`,
        poster: "./static/img/Run1.jpg",
    },
    {
        id: '19',
        songName: `Yet To Come (The Most Beatiful Moment)
        <div class="album">PROOF (2022)</div>`,
        poster: "./static/img/Yet_To_Come1.png",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bx-play');
        masterPlay.classList.add('bx-pause');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bx-play');
        masterPlay.classList.remove('bx-pause');
    }
});


const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bx-play-circle');
        el.classList.remove('bx-pause-circle');
    })
}

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(64, 0, 88, .0)';
    })
}


let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        music.src = `./static/songs/seokjin/${index}.mp3`;
        music.play();
        masterPlay.classList.remove('bx-play');
        masterPlay.classList.add('bx-pause');
        download_music.href = `./static/songs/seokjin/${index}.mp3`;

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName, poster } = elss;
            title.innerHTML = songName;
            poster_master_play.src = poster;
            download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(64, 0, 88, .7)";
        makeAllplays();
        el.target.classList.remove('bx-play-circle');
        el.target.classList.add('bx-pause-circle');
        wave.classList.add('active1');
    });
});


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;


    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    } 
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerHTML = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;

});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bxs-volume-full');
        vol_icon.classList.remove('bxs-volume-low');
        vol_icon.classList.add('bxs-volume');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bxs-volume-full');
        vol_icon.classList.add('bxs-volume-low');
        vol_icon.classList.remove('bxs-volume');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bxs-volume-full');
        vol_icon.classList.remove('bxs-volume-low');
        vol_icon.classList.remove('bxs-volume');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }

    music.src = `./static/songs/seokjin/${index}.mp3`;
        music.play();
        masterPlay.classList.remove('bx-play');
        masterPlay.classList.add('bx-pause');

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName, poster } = elss;
            title.innerHTML = songName;
            poster_master_play.src = poster;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(64, 0, 88, .7)";
        makeAllplays();
        el.target.classList.remove('bx-play-circle');
        el.target.classList.add('bx-pause-circle');
        wave.classList.add('active1');
})

next.addEventListener('click', () => {
    index ++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }

    music.src = `./static/songs/seokjin/${index}.mp3`;
        music.play();
        masterPlay.classList.remove('bx-play');
        masterPlay.classList.add('bx-pause');

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName, poster } = elss;
            title.innerHTML = songName;
            poster_master_play.src = poster;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(64, 0, 88, .7)";
        makeAllplays();
        el.target.classList.remove('bx-play-circle');
        el.target.classList.add('bx-pause-circle');
        wave.classList.add('active1');
})


let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});


let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bx-repeat');
            shuffle.classList.remove('bx-music');
            shuffle.classList.remove('bx-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
    
        case "repeat":
            shuffle.classList.remove('bx-repeat');
            shuffle.classList.remove('bx-music');
            shuffle.classList.add('bx-shuffle');
            shuffle.innerHTML = 'random';
            break;

        case "random":
            shuffle.classList.remove('bx-repeat');
            shuffle.classList.add('bx-music');
            shuffle.classList.remove('bx-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
});


const next_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index ++;
    }
    music.src = `./static/songs/seokjin/${index}.mp3`;
    music.play();
    masterPlay.classList.remove('bx-play');
    masterPlay.classList.add('bx-pause');
    download_music.href = `./static/songs/seokjin/${index}.mp3`;

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName, poster } = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(64, 0, 88, .7)";
    makeAllplays();
    el.target.classList.remove('bx-play-circle');
    el.target.classList.add('bx-pause-circle');
    wave.classList.add('active1');
}

const repeat_music = () => {
    index;
    music.src = `./static/songs/seokjin/${index}.mp3`;
    music.play();
    masterPlay.classList.remove('bx-play');
    masterPlay.classList.add('bx-pause');
    download_music.href = `./static/songs/seokjin/${index}.mp3`;

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName, poster } = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(64, 0, 88, .7)";
    makeAllplays();
    el.target.classList.remove('bx-play-circle');
    el.target.classList.add('bx-pause-circle');
    wave.classList.add('active1');
}

const random_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    music.src = `./static/songs/seokjin/${index}.mp3`;
    music.play();
    masterPlay.classList.remove('bx-play');
    masterPlay.classList.add('bx-pause');
    download_music.href = `./static/songs/seokjin/${index}.mp3`;

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName, poster } = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(64, 0, 88, .7)";
    makeAllplays();
    el.target.classList.remove('bx-play-circle');
    el.target.classList.add('bx-pause-circle');
    wave.classList.add('active1');
}

music.addEventListener('ended', () => {
    let b = shuffle.innerHTML;

    switch (b) {
        case "repeat":
            repeat_music();
            break;
        case "next":
            next_music();
            break;
        case "random":
            random_music();
            break;
    }
})