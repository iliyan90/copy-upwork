import { listCards } from "../data/dataAllStory";

const labelList = ['All','Admin & Customer Support','Design & Creative','Development & IT','Work & Career','Hiring & Managment','Writing & Translation','Finance & Accounting','Sales & Marketing'];

export let admin =[];
export let design =[];
export let development =[];
export let work =[];
export let hiring =[];
export let writing =[];
export let finance =[];
export let sales =[];

listCards.map((item, index) =>(
    item.category.map((ctg) =>(
        labelList[1] === ctg ? admin.push(item) : null 
    ))
));
listCards.map((item, index) =>(
    item.category.map((ctg) =>(
        labelList[2] === ctg ? design.push(item) : null 
    ))
));

listCards.map((item, index) =>(
    item.category.map((ctg) =>(
        labelList[3] === ctg ? development.push(item) : null 
    ))
));
listCards.map((item, index) =>(
    item.category.map((ctg) =>(
        labelList[4] === ctg ? work.push(item) : null 
    ))
));
listCards.map((item, index) =>(
    item.category.map((ctg) =>(
        labelList[5] === ctg ? hiring.push(item) : null 
    ))
));
listCards.map((item, index) =>(
    item.category.map((ctg) =>(
        labelList[6] === ctg ? writing.push(item) : null 
    ))
));
listCards.map((item, index) =>(
    item.category.map((ctg) =>(
        labelList[7] === ctg ? finance.push(item) : null 
    ))
));
listCards.map((item, index) =>(
    item.category.map((ctg) =>(
        labelList[8] === ctg ? sales.push(item) : null 
    ))
));





