let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 3 3 3 3 3 3 3 3 3 . . . . . 
    . . 3 3 . . . . . . 3 3 3 . . . 
    . . . 3 . . . . . . . . 3 . . . 
    . . . 3 . 2 . . . 2 . . . 3 . . 
    . . . 3 . . . . . . . . . 3 . . 
    . . . 3 . . . . . . . . . 3 . . 
    . . 3 . . . . . . . . . . 3 . . 
    . . . 3 . . 2 2 2 2 . . . 3 . . 
    . . . 3 . . . . . . . . 3 . . . 
    . . . . 3 3 . . . . . 3 3 . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.sayText(";c")
