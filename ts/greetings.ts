class Greeter {
  constructor(public greeting: string){
  }
  greet(){
    return 'Hello' + this.greeting;
  }
}

var greeters = [];
greeters.push(new Greeter('world 0'));
greeters.push(new Greeter('world 1'));
greeters.push(new Greeter('world 3'));
for (var greeter in greeters){
  console.log(greeters[greeter].greet());
}
