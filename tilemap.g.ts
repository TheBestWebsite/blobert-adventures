// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000001010101000000000000000000000000010000010000000000000000000000000100000100000000000000000000000001000001000000000000000000000000010000010000000000000000000000000100000100000000000000000000000001000001000000000000000000000000010000010000000000000000000000000100000100000000000000000000000001000001000000000000000000000000010000010000000000000000000000000100000102000000000000000000000001000001020200000002000000000000000000010202020000020404040404000000000102020202020203030303030202020202`, img`
. . . . . . . . . . . . 2 2 2 2 
. . . . . . . . . . . . 2 . . 2 
. . . . . . . . . . . . 2 . . 2 
. . . . . . . . . . . . 2 . . 2 
. . . . . . . . . . . . 2 . . 2 
. . . . . . . . . . . . 2 . . 2 
. . . . . . . . . . . . 2 . . 2 
. . . . . . . . . . . . 2 . . 2 
. . . . . . . . . . . . 2 . . 2 
. . . . . . . . . . . . 2 . . 2 
. . . . . . . . . . . . 2 . . 2 
. . . . . . . . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 2 . . . 2 . . . . . . . . . 2 
2 2 2 . . 2 . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.castle.tileGrass1,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "slime":
            case "tile1":return tile1;
            case "myTile":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
