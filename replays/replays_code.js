const play_replay = document.querySelectorAll(".play_replay");
const replay_item_video = document.querySelectorAll(".replay_item_video");



play_replay.forEach((el,ind) =>{
    el.addEventListener("click", ()=>{
        replay_item_video.forEach((elVideo,indVideo) =>{
            if(elVideo.classList.contains("replay_display_on")){
                elVideo.classList.toggle("replay_display_on")
                elVideo.classList.toggle("replay_display_off")
            }
            if(ind === indVideo){
                
                elVideo.classList.toggle("replay_display_off")
                elVideo.classList.toggle("replay_display_on")
            }
            else{
            }
        })
    })
})






















