controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Blobert.isHittingTile(CollisionDirection.Bottom)) {
        Blobert.vy = -200
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
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
        7 . . . . . . . . . . . . . . . 
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
        . 7 . . . . 7 . . . . . . . 7 . 
        . . . . . . . . . 7 . . . . . . 
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
        . 7 . . . . . . 7 . . . . 7 . . 
        . . . . 7 . . . . . . . . . . . 
        . . . . . . . . . . 7 . . . . . 
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
        . . . . 7 . . . . . . . . 7 . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . . . . 7 . . . . . 
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
        7 . . . . . . . . . . . . . . . 
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
    125,
    true
    )
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`signBoard`, function (sprite, location) {
    if (SignNumber == 1) {
        game.showLongText("These are coins, collect them as you go on!", DialogLayout.Bottom)
        SignNumber = 2
        tiles.placeOnTile(Blobert, location)
        tiles.setTileAt(location, assets.tile`transparency16`)
    } else if (SignNumber == 2) {
        game.showLongText("These are Rocky walls, you can Wall Jump on them", DialogLayout.Bottom)
        SignNumber = 3
        tiles.placeOnTile(Blobert, location)
        tiles.setTileAt(location, assets.tile`transparency16`)
    } else if (SignNumber == 3) {
        game.showLongText("This is red slime, it dosent let you move, and moves you to the left", DialogLayout.Bottom)
        SignNumber = 4
        tiles.placeOnTile(Blobert, location)
        tiles.setTileAt(location, assets.tile`transparency16`)
    } else {
        game.showLongText("This is blue slime, red slime but to the right", DialogLayout.Bottom)
        SignNumber = 5
        tiles.placeOnTile(Blobert, location)
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameStart) {
    	
    }
})
info.onLifeZero(function () {
    music.stopAllSounds()
    game.setGameOverMessage(false, "GAME OVER!")
    game.gameOver(false)
})
function IndustryCredits () {
    music.play(music.createSong(hex`003c000408020106001c00010a006400f401640000040000000000000000000000000000000002280000000400031d222508000c00031d222510001400031d222518001c00031d222520003800031d2225`), music.PlaybackMode.InBackground)
    Company1 = fancyText.create("Blobert")
    Company2 = fancyText.create("Industries")
    Company1.setPosition(80, 35)
    Company2.setPosition(80, 85)
    pause(7300)
    sprites.destroy(Company1, effects.halo, 500)
    sprites.destroy(Company2, effects.halo, 500)
    pause(700)
}
function startScene () {
    scene.setBackgroundColor(4)
    music.play(music.createSong(hex`00b4000408020106001c00010a006400f4016400000400000000000000000000000000000000021a0000000400031d222508000c000120100014000122200024000125`), music.PlaybackMode.LoopingInBackground)
    Title = fancyText.create("   Blobert's\\nAdventures", 0, 0, fancyText.geometric_serif_11)
    Title.setPosition(80, 25)
    toStart = fancyText.create("Press A to start", 0, 0, fancyText.defaultArcade)
    toStart.setPosition(80, 90)
    pauseUntil(() => controller.A.isPressed())
    sprites.destroy(Title)
    sprites.destroy(toStart)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    game.setGameOverMessage(true, "You Win!")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
let toStart: fancyText.TextSprite = null
let Title: fancyText.TextSprite = null
let Company2: fancyText.TextSprite = null
let Company1: fancyText.TextSprite = null
let Gomba1: Sprite = null
let Blobert: Sprite = null
let gameStart = false
let SignNumber = 0
SignNumber = 1
gameStart = false
CreatePlayer()
IndustryCredits()
startScene()
music.stopAllSounds()
music.play(music.createSong(hex`00b40004080c0106001c00010a006400f401640000040000000000000000000000000000000002ab0000001800012218003000012430004800012548006000012760006800021d2968007000021b2770007800021925780080000218248000880002182488009000021622900098000218249800a000021824a000a800021925a800b800021824b800c000021622c000d800021824d800e000021622e000f800021420f800100102121e10012401011b28014001011940014801011b48015801011d58016001011e600170010120700180010122`), music.PlaybackMode.LoopingInBackground)
let playerSpeed = 100
let slimeSpeed = 50
controller.moveSprite(Blobert, 100, 0)
scene.cameraFollowSprite(Blobert)
gameStart = true
tiles.setCurrentTilemap(tilemap`level1`)
Blobert.setPosition(76, 20)
Blobert.ay = 400
let canWallJumpLeft = true
let canWallJumpRight = true
let gombas = 3
for (let index = 0; index < gombas; index++) {
    Gomba1 = sprites.create(img`
        . . . c c c c c c . . . . . . . 
        . . c 6 7 7 7 7 6 c . . . . . . 
        . c 7 7 7 7 7 7 7 7 c . . . . . 
        c 6 7 7 7 7 7 7 7 7 6 c . . . . 
        c 7 c 6 6 6 6 c 7 7 7 c . . . . 
        f 7 6 f 6 6 f 6 7 7 7 f . . . . 
        f 7 7 7 7 7 7 7 7 7 7 f . . . . 
        . f 7 7 7 7 6 c 7 7 6 f . . . . 
        . . f c c c c 7 7 6 f c c c . . 
        . . c 6 2 7 7 7 f c c 7 7 7 c . 
        . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
        . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
        . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
        . . c 6 1 1 1 1 1 7 6 6 c c . . 
        . . . c c c c c c c c c c . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(Gomba1, assets.tile`transparency16`)
    Gomba1.setVelocity(85, 0)
    Gomba1.setBounceOnWall(true)
}
game.onUpdate(function () {
    if (Blobert.isHittingTile(CollisionDirection.Right)) {
        canWallJumpLeft = true
    }
    if (Blobert.isHittingTile(CollisionDirection.Left)) {
        canWallJumpRight = true
    }
    if (Blobert.isHittingTile(CollisionDirection.Bottom)) {
        canWallJumpLeft = true
        canWallJumpRight = true
        Blobert.ax = 0
        Blobert.vx = 0
        controller.moveSprite(Blobert, 100, 0)
    }
    if (Blobert.tileKindAt(TileDirection.Left, sprites.builtin.forestTiles0) && (controller.left.isPressed() && controller.up.isPressed() && Blobert.isHittingTile(CollisionDirection.Left) && canWallJumpLeft)) {
        Blobert.vy = -160
        Blobert.vx = 100
        Blobert.ax = 100
        canWallJumpLeft = false
        canWallJumpRight = true
        controller.moveSprite(Blobert, 0, 0)
    }
    if (Blobert.tileKindAt(TileDirection.Right, sprites.builtin.forestTiles0) && (controller.right.isPressed() && controller.up.isPressed() && Blobert.isHittingTile(CollisionDirection.Right) && canWallJumpRight)) {
        Blobert.vy = -160
        Blobert.vx = -100
        Blobert.ax = -100
        canWallJumpRight = false
        canWallJumpLeft = true
        controller.moveSprite(Blobert, 0, 0)
    }
})
forever(function () {
    if (tiles.tileAtLocationEquals(Blobert.tilemapLocation(), assets.tile`myTile`)) {
        controller.moveSprite(Blobert, 0, 0)
        Blobert.vx = slimeSpeed
    } else {
        if (Blobert.isHittingTile(CollisionDirection.Bottom)) {
            controller.moveSprite(Blobert, playerSpeed, 0)
        }
    }
})
forever(function () {
    if (tiles.tileAtLocationEquals(Blobert.tilemapLocation(), assets.tile`redSlime`)) {
        controller.moveSprite(Blobert, 0, 0)
        Blobert.vx = slimeSpeed * -1
    } else {
        if (Blobert.isHittingTile(CollisionDirection.Bottom)) {
            controller.moveSprite(Blobert, playerSpeed, 0)
        }
    }
})
