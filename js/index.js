const $video = document.querySelector('#video')
const $pause = document.querySelector('#pause')
const $play = document.querySelector('#play')
const $forward = document.querySelector('#forward')
const $backward = document.querySelector('#backward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$pause.addEventListener('click', handlePause)
        

function handlePlay()
{
    $play.hidden = true
    $video.play()
    console.log('1');
    $pause.hidden = false
    
}
function handlePause()
{
    $pause.hidden = true
    $play.hidden = false
    $video.pause()
    console.log(2);
}


$backward.addEventListener('click', handleBackward)

function handleBackward()
{
    $video.currentTime -= 10
    console.log('Para atrás 10 segundos', $video.currentTime);
}

$forward.addEventListener('click', handleForward)

function handleForward()
{
    $video.currentTime += 10
    console.log('Para adelante 10 segundos', $video.currentTime);
}


const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);

function handleLoaded()
{
    $progress.max = $video.duration
    console.log('Ha cargado mi video', $video.duration);
}

function handleTimeUpdate()
{
    $progress.value = $video.currentTime;
    // console.log('tiempo actual', $video.currentTime);
}

$progress.addEventListener('input', handleInput)

function handleInput()
{
    $video.currentTime = $progress.value
    console.log($progress.value);
}