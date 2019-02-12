class Options {
	constructor(height = 100, width = 100, bg = '#abc', fontSize = 20, textAlign = 'center') {
		this.height = height + 'px';
		this.width = width + 'px';
		this.bg = bg;
		this.fontSize = fontSize + 'px';
		this.textAlign = textAlign;
	}
	createDiv(str) {
		let div = document.createElement('div');
		document.body.appendChild(div);
		div.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}`;
		console.log(div);
		div.textContent = str;
	}
}

let myDiv = new Options(100, 150, '#b99', 20, 'center'),
	div1 =  new Options(70, 250, '#4ab', 25, 'left'),
	div2 =  new Options(50, 350, '#a61', 22, 'right');

myDiv.createDiv('Первый блок');
div1.createDiv('Голубой блок');
div2.createDiv('Длинный текст');