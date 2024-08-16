const stars = document.querySelectorAll(".star");
const rating = document.querySelector(".rating");

stars.forEach((star,index)=>{
    star.addEventListener('click',()=>{
        let fill = index+1;
        rating.innerText=`${fill} of 5`;
          stars.forEach((star,i)=>{
            if(fill>=i+1){
                star.innerHTML=`&#9733`
            }
            else{
                star.innerHTML=`&#9734`
            } 
        }); 
    });
    
});