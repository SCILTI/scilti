function rotateMain(value){
    const wheelinner = document.querySelectorAll('.content_text');

    deg = 0;
    for (let item of wheelinner){
        item.style.transform = `rotate(${deg}deg)`
        deg+=value;

    }
    return value 
}

 rotateMain(15);

 function rotateOuther(value){
     const wheelContent = document.querySelectorAll('.content_text>a');

     deg = 0;
     for (let item of wheelContent){
         item.style.transform = `rotate(${deg}deg)`
         deg+=value;
     }
 }

 rotateOuther(2)