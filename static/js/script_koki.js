const music = new Audio('./static/songs/3.mp3');

const songs = [
    {
        id: '1',
        songName: `Closer to You <br>
        <div class="album">Golden (2023)</div>`,
        poster: "./static/img/koki/closer.jpg",
    },
    {
        id: '2',
        songName: `Somebody <br>
        <div class="album">Golden (2023)</div>`,
        poster: "./static/img/koki/somebody.png",
    },
    {
        id: '3',
        songName: `My You <br>
        <div class="album">My You (2022)</div>`,
        poster: "./static/img/koki/my.jpg",
    },
    {
        id: '4',
        songName: `Please Don't Change <br>
        <div class="album">Golden (2020)</div>`,
        poster: "./static/img/koki/please.jpg",
    },
    {
        id: '5',
        songName: `Still With You <br>
        <div class="album">Still With You (2020)</div>`,
        poster: "./static/img/koki/still.jpg",
    },
    {
        id: '6',
        songName: `TOO MUCH <br>
        <div class="album">The First Time (2023)</div>`,
        poster: "./static/img/koki/too.jpeg",
    },
    {
        id: '7',
        songName: `Too Sad to Dance <br>
        <div class="album">Golden (2023)</div>`,
        poster: "./static/img/koki/sad.jpg",
    },
    {
        id: '8',
        songName: `Yes or No <br>
        <div class="album">Golden (2023)</div>`,
        poster: "./static/img/koki/yes.jpg",
    },
    {
        id: '9',
        songName: `Shot Glass of Tears <br>
        <div class="album">Golden (2023)</div>`,
        poster: "./static/img/koki/shot.jpg",
    },
    {
        id: '10',
        songName: `3D <br>
        <div class="album">3D : The Remixes (2023)</div>`,
        poster: "./static/img/koki/3d.png",
    },
    {
        id: '11',
        songName: `Hate You'  <br>
        <div class="album">Golden (2023)</div>`,
        poster: "./static/img/koki/hate.jpg",
    },
    {
        id: '12',
        songName: `Seven <br>
        <div class="album">Seven (Weekend Ver.) (2023)</div>`,
        poster: "./static/img/koki/seven.jpeg",
    },
    {
        id: '13',
        songName: `Standing Next to You <br>
        <div class="album">Golden (2023)</div>`,
        poster: "./static/img/koki/next.jpeg",
    },
    {
        id: '14',
        songName: `Standing Next to You - Usher Remix <br>
        <div class="album">COMING HOME (2024)</div>`,
        poster: "./static/img/koki/you.jpg",
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
        music.src = `./static/songs/koki/${index}.mp3`;
        music.play();
        masterPlay.classList.remove('bx-play');
        masterPlay.classList.add('bx-pause');
        download_music.href = `./static/songs/koki/${index}.mp3`;

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

    music.src = `./static/songs/koki/${index}.mp3`;
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

    music.src = `./static/songs/koki/${index}.mp3`;
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


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artist_bx = document.getElementsByClassName('Artist_bx')[0];

pop_art_right.addEventListener('click', () => {
    Artist_bx.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    Artist_bx.scrollLeft -= 330;
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
    music.src = `./static/songs/koki/${index}.mp3`;
    music.play();
    masterPlay.classList.remove('bx-play');
    masterPlay.classList.add('bx-pause');
    download_music.href = `./static/songs/koki/${index}.mp3`;

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
    music.src = `./static/songs/koki/${index}.mp3`;
    music.play();
    masterPlay.classList.remove('bx-play');
    masterPlay.classList.add('bx-pause');
    download_music.href = `./static/songs/koki/${index}.mp3`;

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
    music.src = `./static/songs/koki/${index}.mp3`;
    music.play();
    masterPlay.classList.remove('bx-play');
    masterPlay.classList.add('bx-pause');
    download_music.href = `./static/songs/koki/${index}.mp3`;

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


let menu_list_active_button = document.getElementById('menu_list_active_button');
    let menu_side = document.getElementsByClassName('menu_side')[0];

    menu_list_active_button.addEventListener('click', () => {
    menu_side.style.transform = "unset";
    menu_list_active_button.style.opacity = 0;
    })