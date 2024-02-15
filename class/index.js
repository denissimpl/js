class Clock {
    constructor ({template}) {
        this.template = template
    }

    render() {
        let date = new Date();
    
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        let output = template
          .replace('h', hours)
          .replace('m', mins)
          .replace('s', secs);
    
        console.log(output);
      }
    
    stop = function() {
        clearInterval(timer);
      };
    
    start = function() {
        render();
        this.timer = setInterval(render, 1000);
      };
}


let clock = new Clock({template: 'h:m:s'});
clock.start();