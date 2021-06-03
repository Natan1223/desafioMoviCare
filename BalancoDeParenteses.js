function expressao(exp = []){

    var i = null;
    var open = 0;
    var error = false;

    for(i = 0; i < exp.length; i++){
      if (exp[i] === '(') open++;
      if (exp[i] === ')') {
        if(open>0) open--;
        else{
         error = true;
         break;
        }
      }
    }

    if (error || open){
        console.log('incorrect');

    }else{
        console.log('correct');

    }
}
  
expressao('a+(b*c)-2-a');
expressao('(a+b*(2-c)-2+a)*2');
expressao('(a*b-(2+c)');
expressao('2*(3-a))');
expressao(')3+b*(2-c)(');