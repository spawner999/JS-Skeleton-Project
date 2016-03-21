class Greeter {
  constructor(public greeting: string){
  }
  greet(){
    return 'Hello' + this.greeting;
  }
}


var greeters: Greeter[] = [];
greeters.push(new Greeter('world 0'));
greeters.push(new Greeter('world 1'));
greeters.push(new Greeter('world 2'));
for (var greeter in greeters){
  console.log(greeters[greeter].greet());
}
