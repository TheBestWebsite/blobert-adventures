function CreatePlayer () {
    Blobert = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . d 7 7 7 . . . . . . 
        . . . . . d 7 7 7 7 7 . . . . . 
        . . . . d 7 7 7 7 7 7 7 . . . . 
        . . . . d 7 f f 7 f f 7 . . . . 
        . . . . d 7 f f 7 f f 7 . . . . 
        . . . d 7 7 7 7 7 7 7 7 7 . . . 
        . . . d 7 7 7 7 7 7 7 7 7 . . . 
        . . d 7 f 7 7 7 7 7 7 f 7 7 . . 
        . d 7 7 f f f f f f f f 7 7 7 . 
        d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b 
        . 7 7 7 7 7 7 7 7 7 7 7 7 b b . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    Blobert,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . d 7 7 7 . . . . . . 
        . . . . . d 7 7 7 7 7 . . . . . 
        . . . . d 7 7 7 7 7 7 7 . . . . 
        . . . . d 7 f f 7 f f 7 . . . . 
        . . . . d 7 f f 7 f f 7 . . . . 
        . . . d 7 7 7 7 7 7 7 7 7 . . . 
        . . . d 7 7 7 7 7 7 7 7 7 . . . 
        . . d 7 f 7 7 7 7 7 7 f 7 7 . . 
        . d 7 7 f f f f f f f f 7 7 7 . 
        d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b 
        . 7 7 7 7 7 7 7 7 7 7 7 7 b b . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . d 7 7 7 . . . . . . 
        . . . . . d 7 7 7 7 7 . . . . . 
        . . . . d 7 7 7 7 7 7 7 . . . . 
        . . . . d 7 f f 7 f f 7 . . . . 
        . . . . d 7 f f 7 f f 7 . . . . 
        . . . d 7 7 7 7 7 7 7 7 7 . . . 
        . . . d 7 7 7 7 7 7 7 7 7 . . . 
        . . d 7 f 7 7 7 7 7 7 f 7 7 . . 
        . d 7 7 f f f f f f f f 7 7 7 . 
        d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b 
        . 7 7 7 7 7 7 7 7 7 7 7 7 b b . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . d 7 7 7 . . . . . . 
        . . . . . d 7 7 7 7 7 . . . . . 
        . . . . d 7 7 7 7 7 7 7 . . . . 
        . . . . d 7 f f 7 f f 7 . . . . 
        . . . . d 7 f f 7 f f 7 . . . . 
        . . . d 7 7 7 7 7 7 7 7 7 . . . 
        . . . d 7 7 7 7 7 7 7 7 7 . . . 
        . . d 7 f 7 7 7 7 7 7 f 7 7 . . 
        . d 7 7 f f f f f f f f 7 7 7 . 
        d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b 
        . 7 7 7 7 7 7 7 7 7 7 7 7 b b . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . d 7 7 7 . . . . . . 
        . . . . . d 7 7 7 7 7 . . . . . 
        . . . . d 7 7 7 7 7 7 7 . . . . 
        . . . . d 7 f f 7 f f 7 . . . . 
        . . . . d 7 f f 7 f f 7 . . . . 
        . . . d 7 7 7 7 7 7 7 7 7 . . . 
        . . . d 7 7 7 7 7 7 7 7 7 . . . 
        . . d 7 f 7 7 7 7 7 7 f 7 7 . . 
        . d 7 7 f f f f f f f f 7 7 7 . 
        d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b 
        . 7 7 7 7 7 7 7 7 7 7 7 7 b b . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . d 7 7 7 . . . . . . 
        . . . . . d 7 7 7 7 7 . . . . . 
        . . . . d 7 7 7 7 7 7 7 . . . . 
        . . . . d 7 f f 7 f f 7 . . . . 
        . . . . d 7 f f 7 f f 7 . . . . 
        . . . d 7 7 7 7 7 7 7 7 7 . . . 
        . . . d 7 7 7 7 7 7 7 7 7 . . . 
        . . d 7 f 7 7 7 7 7 7 f 7 7 . . 
        . d 7 7 f f f f f f f f 7 7 7 . 
        d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b 
        . 7 7 7 7 7 7 7 7 7 7 7 7 b b . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . d 7 7 7 . . . . . . 
        . . . . . d 7 7 7 7 7 . . . . . 
        . . . . d 7 7 7 7 7 7 7 . . . . 
        . . . . d 7 f f 7 f f 7 . . . . 
        . . . . d 7 f f 7 f f 7 . . . . 
        . . . d 7 7 7 7 7 7 7 7 7 . . . 
        . . . d 7 7 7 7 7 7 7 7 7 . . . 
        . . d 7 f 7 7 7 7 7 7 f 7 7 . . 
        . d 7 7 f f f f f f f f 7 7 7 . 
        d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b 
        . 7 7 7 7 7 7 7 7 7 7 7 7 b b . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . d 7 7 7 . . . . . . 
        . . . . . d 7 7 7 7 7 . . . . . 
        . . . . d 7 7 7 7 7 7 7 . . . . 
        . . . . d 7 f f 7 f f 7 . . . . 
        . . . . d 7 f f 7 f f 7 7 . . . 
        . . . d 7 7 7 7 7 7 7 7 7 . . . 
        . . . d 7 7 7 7 7 7 7 7 7 7 . . 
        . . d 7 f 7 7 7 7 7 7 f 7 7 7 . 
        d d d 7 f f f f f f f f 7 7 7 b 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b 
        . 7 7 7 7 7 7 7 7 7 7 7 7 b b . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . d 7 7 7 . . . . . . 
        . . . . . d 7 7 7 7 7 . . . . . 
        . . . . d 7 7 7 7 7 7 7 . . . . 
        . . . . d 7 f f 7 f f 7 7 . . . 
        . . . . d 7 f f 7 f f 7 7 . . . 
        . . . d 7 7 7 7 7 7 7 7 7 . . . 
        . . d d 7 7 7 7 7 7 7 7 7 7 7 . 
        d d d 7 f 7 7 7 7 7 7 f 7 7 7 b 
        7 7 7 7 f f f f f f f f 7 7 7 b 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b 
        . 7 7 7 7 7 7 7 7 7 7 7 7 b b . 
        `],
    100,
    true
    )
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    playerJump()
})
function playerJump () {
    if (Blobert.vy == 0 || numJumps == 1) {
        Blobert.vy = -170
        numJumps += 1
    }
}
function IndustryCredits () {
    music.play(music.createSong(assets.song`industryCredits`), music.PlaybackMode.InBackground)
    Company1 = fancyText.create("Blobert")
    Company2 = fancyText.create("Industries")
    Company1.setPosition(80, 35)
    Company2.setPosition(80, 85)
    pause(7300)
    sprites.destroy(Company1, effects.halo, 700)
    sprites.destroy(Company2, effects.halo, 700)
    pause(700)
}
let Company2: fancyText.TextSprite = null
let Company1: fancyText.TextSprite = null
let numJumps = 0
let Blobert: Sprite = null
CreatePlayer()
IndustryCredits()
music.play(music.createSong(assets.song`game song`), music.PlaybackMode.LoopingInBackground)
