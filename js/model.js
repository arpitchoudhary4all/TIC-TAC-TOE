const tictac={
    isSame(one,two,three){
        if(this.isBlank(one,two,three)){
            return false;
        }
        return one ===two && one===three;
    },
        
    isBlank(one,two,three){
    return this.isButtonBlank(one) && this.isButtonBlank(two) && this.isButtonBlank(three);//true if all true
    },

    isButtonBlank(button){
    return button.trim().length==0?true:false;//true if button is empty
    },

    isTie(one,two,three,four,five,six,seven,eigth,nine){
        if(one.trim().length && two.trim().length && three.trim().length && four.trim().length &&
         five.trim().length && six.trim().length && seven.trim().length && eigth.trim().length && 
         nine.trim().length !=0){
             return true;
         }
    }
}