function shadow(options) {
    let images = document.querySelectorAll('.shadowToAll');


    if(options.shadow_Type == 'hard'){
        options.shadow_Type == '0px';
    }else {
        options.shadow_Type == '15px';
    }


    images.forEach(image =>{
        image.style.boxShadow = `10px 10px ${options.shadow_Type} 1px rgba(0, 0, 0, 0.12)`;

        if(options.padding){
            image.style.padding = '1em';
        }
        
        if(options.imgColor == 'red'){
            image.style.color = 'red';
        }
    })
}


module.exports.shadow = shadow;