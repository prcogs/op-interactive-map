class Canva {
	constructor(domTarget, domSecond) {
		webBike.canva = this;
		this.dom = document.createElement('canvas');
		this.dom.id = "canvas";
		this.dom.style.height = "80px";
		this.dom.style.width = "225px";


		domTarget.insertBefore(this.dom, domSecond);
		console.log(this.dom)
		// this.domCanva = document.getElementById('canva');

	    this.isDrawing = false;
	    this.prevPoint = {
		  x : 0,
		  y : 0	
		};
		// console.log('prevPoint', this.prevPoint)

	    this.context = this.dom.getContext('2d');
	    this.rect 	 = this.dom.getBoundingClientRect();
		// console.log("rect", this.rect);
		// console.log('context', this.context)

	    this.dom.onmousedown = this.start;
	    this.dom.onmousemove = this.draw;
	    this.dom.onmouseup   = this.stop;

    //évènements mobiles : https://developer.mozilla.org/fr/docs/Web/Guide/DOM/Events/Touch_events
    //dessiner dans le canvas : https://developer.mozilla.org/fr/docs/Web/API/Element/mousedown_event
	}

	// getBoundingClientRect(){
	// this.rect  = this.dom.getBoundingClientRect();

	// }

	start(event){
		console.log("start",event);

		this.isDrawing = true;
		console.log('isDrawing', this.isDrawing)
		this.prevPoint = {
		  x : event.clientX - this.rect.left,
		  y : event.clientY - this.rect.top	
		};
	}

	draw(event){
		if (this.isDrawing === true) {
			this.domCanva = document.getElementById('canvas');
			this.rect 	 = this.domCanva.getBoundingClientRect();
			console.log("rect", this.rect);
			this.drawLine(this.context, this.x, this.y, event.clientX - this.rect.left, event.clientY - this.rect.top);
			this.prevPoint = {
				x : event.clientX - this.rect.left,
		  		y : event.clientY - this.rect.top
		  	};	

		};
		// console.log("draw",event)
	}

	stop(event){
		// console.log("stop",event)

		if (this.isDrawing === true) {
			this.drawLine(this.context, this.x, this.y, event.clientX - this.rect.left, event.clientY - this.rect.top);
			this.prevPoint = {
				x : 0,
				y : 0	
			};

		    this.isDrawing=false;
		}
	}

	drawLine(context, x1, y1, x2, y2) {
		this.context.beginPath();
		this.context.strokeStyle = 'black';
		this.context.lineWidth = 1;
		this.context.moveTo(x1, y1);
		this.context.lineTo(x2, y2);
		this.context.stroke();
		this.context.closePath();
	}
}