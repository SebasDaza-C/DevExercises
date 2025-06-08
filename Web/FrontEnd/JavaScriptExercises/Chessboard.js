for (let row = 0; row < 8; row++) {
    if (row % 2 == 0) {
        let box = "";
        for (let times = 0; times < 8; times++) {
            if (times % 2 == 0) {
                box = box + "X";
            } else {
                box = box + "O";
            }
        }
        console.log(box);
    } else {
        let box = "";
        for (let times = 0; times < 8; times++) {
            if (times % 2 == 0) {
                box = box + "O";
            } else {
                box = box + "X";
            }
        }
        console.log(box);
    }
}