
$(document).on("ready", config);

function config() {

    arrTracks = ['Ishmael', 'Voyeur', 'NicesWolkchen', 'Timeaway', 'Castles', 'Dekire'];
    arrArtists = ['Nicolas Jaar, Will Epstein, Dave Harrington, Ian Sims', 'James Blake', 'DJ Koze', 'Darkstar', 'Black Atlass', 'Charles Murdoch'];
    arrCouleurs = ['#19232E', '#A14000', '#13856E', '#208A4C', '#6E3685', '#96291E'];
    arrClassesMorceau = ['Abril Fatface', 'Oswald', 'Exo 2', 'Dancing Script', 'Gravitas One', 'Alfa Slab One'];
    arrClassesArtiste = ['Georgia', 'PT Mono', 'Georgia', 'Helvetica', 'PT Mono', 'Georgia'];

    morceauEnCours = arrTracks[0];
    etatPlayer = false;

    var initIshmael = '#' + morceauEnCours;
    $(initIshmael).css('color', 'red');

    $('.nomMorceau').addClass('nomMorceau-' + morceauEnCours);
    $('.nomArtiste').addClass('nomArtiste-' + morceauEnCours);

    $('#Ishmael').hover(afficherHover, afficherNormal);

    $.each(arrTracks, function(index, valeur) {
        var selecteur = '#' + valeur;
        $(selecteur).click(changerTrack);
    });

    $("audio").trigger("pause");
    $(window).keypress(playPauseSpaceBar);
}

function playPauseSpaceBar(e) {
    if (e.keyCode == 0 || e.keyCode == 32) {
        if ($("audio").get(0).paused) {
            $("audio").trigger("play");
        } else {
            $("audio").trigger("pause");
        }
    }
}

function afficherHover() {
    $(this).css("color", 'white');
}

function afficherNormal() {
    if (morceauEnCours != this.id) {
        $(this).css("color", '#d5d5d5');
    } else {
        $(this).css('color', 'red');
    }
}

function changerTrack() {
    var nomFichier = 'audio/' + this.id + '.mp3';
    var audioPlayer = $("audio");
    morceauEnCours = this.id;

    var nouvelleCouleur = $.inArray(morceauEnCours, arrTracks);
    $('body').css('background-color', arrCouleurs[nouvelleCouleur]);

    $('.nomMorceau').text(morceauEnCours);
    var indexArtiste = $.inArray(morceauEnCours, arrTracks);
    $('.nomArtiste').text(arrArtists[indexArtiste]);
    var indexClasseMorceau = $.inArray(morceauEnCours, arrTracks);
    $('.nomMorceau').css('font-family', "'" + arrClassesMorceau[indexClasseMorceau] + "'");
    //$('.nomArtiste').css('font-family', "'" + arrClassesArtiste[indexClasseMorceau] + "'");

    $.each(arrTracks, function(index, valeur) {
        var selecteur = '#' + valeur;
        $(selecteur).css('color', '#d5d5d5');
    });

    $(this).css('color', 'red');

    if (audioPlayer.attr('src') != nomFichier) {
        audioPlayer.attr('src', nomFichier);
    }

    if (audioPlayer.get(0).paused) {
        audioPlayer.trigger("play");
    } else {
        audioPlayer.trigger("pause");
    }
}