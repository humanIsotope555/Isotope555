class Generator{

    /* shuffle of array */
    shuffle(arr){
        return arr.sort(function(){return 0.5 - Math.random()})
    }

    /* selection of symbols */
    generator(new_pass){

        let alpha_lower = 'abcdefghijklmnopqrstuvwxyz'
        let alpha_upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let sym = '!@#$%^&*()_+-|:;"<>/?.,'
        let randInt = Math.floor(Math.random() * 10)
        let len_pass = 12
        let num = 0
        let half = 0

        if (len_pass % 2 != 0){
            half = Math.floor(len_pass / 2)

            for (i=0; i<half+1; i++){
                let randStr = Math.floor(Math.random() * alpha_lower.length)

                new_pass.push(alpha_lower[randStr]);
            }

        } else {
            half = Math.floor(len_pass / 2);

            for (i=0; i<half; i++){
                let randStr = Math.floor(Math.random() * alpha_lower.length)

                new_pass.push(alpha_lower[randStr]);
            }

        }

        while (num < half){

            if (num < half){
                new_pass.push(sym[Math.floor(Math.random() * sym.length)])
                num += 1
                }

            if (num < half){
                new_pass.push(alpha_upper[Math.floor(Math.random() * alpha_upper.length)])
                num += 1
                }

            if (num < half){
                new_pass.push(Math.floor(Math.random() * 10))
                num += 1

            } else {
                break
            }

        }

        return new_pass
    }

}

const gen = new Generator();


$('.button-gen').click(function(){

    let new_pass = new Array();

    const gen = new Generator();

    gen.generator(new_pass);

    gen.shuffle(new_pass);

    arr_str = new_pass.join('')

    alert(arr_str);
})