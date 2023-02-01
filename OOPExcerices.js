//1 Refactor the above as an Account class
// that shares its methods across different instances.

function makeAccount(initial) {
    var makeAccount={};
    makeAccount.balance = initial
    makeAccount.withdraw=withdraw
    makeAccount.deposit=deposit
    
    return makeAccount}

       var withdraw= function(amount) {
              if (this.balance - amount >= 0) {
                   this.balance = this.balance - amount;
                   return 'Here is your money: $' + amount;
              }
         return 'Insufficient funds.';
         }

var deposit= function(amount) {
              this.balance = this.balance + amount;
              return 'Your balance is: $' + this.balance;
         }

//2 as before, refactor the makeStopwatch into a Stopwatch class with shared methods.
function MakeStopwatch() {
     var MakeStopwatch= {}
     MakeStopwatch.stop=undefined
    MakeStopwatch.time = 0
    MakeStopwatch.start=start
    MakeStopwatch.stopp= stopp
    MakeStopwatch.reset=reset
    
     return MakeStopwatch}
         
         
        var start= function() {
           var that = this
               that.stop = setInterval(function() {
               that.time = that.time + 1
               console.log('Elapsed time: ' + that.time + 's.');
          }, 1000);
     }
 
        var stopp = function() {
               clearInterval(this.stop);
          }
 
 
      var reset= function() {
               clearInterval(this.stop);
               this.time = 0;
          }

//More practice 


         function Toaster() {
            var instance = {};
               
                 instance.addToast=addToast
                 instance.eject=eject
                 instance.toast=undefined
                 instance.start=start
                 instance.stop=stop
           return instance;
        }
       
          var addToast =function(to){
                      return this.toast =to}
                    
                
           var eject=function(){
                   if (this.toast===undefined){
                       return 'the toaster is empty'}
                    else {var temp=this.toast 
                         this.toast=undefined
                        
                        return temp}
                }

                var start = function(){
                    if(this.Toast===undefined){
                      return "your toaster is empty"
                    }
                    else {
                         var that = this
                         this.Timer = setTimeout(function(){
                              console.log("ding ding !");
                              that.Toast = that.Toast+"(Toasted)"
                              console.log(that.Toast);
                         },10000)
               
                    }
                }
               
                var stop = function(){
               clearTimeout(this.Timer)
                }
