import {useEffect} from "react";

export function usePrevent(overflow){
    useEffect(() =>{
        function scrolling(){
            if(overflow){
                window.document.body.style.overflow = 'hidden';
            }else if(!overflow){
                window.document.body.style.overflow = 'unset';
            }
        };
        scrolling();
    },[overflow]);
};
