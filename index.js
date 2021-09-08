/**
 * playSound
 * @param url       声音地址
 * @param delay     延时删除
 */
export const playSound = ({url,delay}) =>{
    return new Promise((resolve,reject)=>{
        const iAudio = document.createElement("audio");
        iAudio.setAttribute('class','iAudio_');
        iAudio.setAttribute('autoplay','autoplay');
        iAudio.setAttribute('style','display:none');
        const iSource = document.createElement("source");
        iAudio.setAttribute('src',url);
        const iEmbed = document.createElement("embed");
        iEmbed.setAttribute('src',url);
        iEmbed.setAttribute('hidden',true);
        iEmbed.setAttribute('autostart',true);
        iEmbed.setAttribute('loop',false);
        iAudio.appendChild(iSource);
        iAudio.appendChild(iEmbed);
        document.querySelector('body').appendChild(iAudio);
        const iAudio1 = document.querySelector(".iAudio_");
        if (delay) {
            setTimeout(()=>{
                resolve({code:200})
                removeElement(iAudio1)
            },delay)
        }else{
            resolve({code:200})
            resolve()
        }

    })

}
function removeElement(_element){
    var _parentElement = _element.parentNode;
    if(_parentElement){
        _parentElement.removeChild(_element);
    }
}
