class Visualizer {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        this.array = [];
        this.bars = [];
        this.animationSpeed = 50;
    }
    
    generateRandomArray(size = 50, min = 5, max = 500) {
        //we create a an array with a size of 50 and for every iteration we generate a random number from 5 - 500
        this.array = Array.from({ length: size }, () => Math.floor(Math.random() * (max - min + 1)) + min)
        this.renderBars();
        return this.array;
    }

    renderBars(){
        this.container.innerHTML = '';
        this.bars = [];

        const maxValue = Math.max(...this.array)
        //we create div element for each number in the array we create from generateRandomArray
        this.array.forEach((value, index) => {
            const bar = document.createElement('div');
            bar.className = 'array-bar';
            bar.style.height = `${(value / maxValue) * 100}%`;
            this.container.appendChild(bar);
            this.bars.push(bar);
        });
    };

    visualize(animations){
        animations.forEach((animation, idx) => {
            const [i, j, isSwap] = animation;

            setTimeout(() => {
                if(isSwap){
                    [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
                    
                    //this is the part we change the height
                    const tempHeight = this.bars[i].style.height;
                    this.bars[i].style.height = this.bars[j].style.height;
                    this.bars[j].style.height = tempHeight;

                    //here is the color
                    this.bars[i].style.backgroundColor = '#FF6F20';
                    this.bars[j].style.backgroundColor = '#FF6F20';
                }else{
                    this.bars[i].style.backgroundColor = '#6AB7FF';
                    this.bars[j].style.backgroundColor = '#6AB7FF';
                }

                setTimeout(() => {
                    this.bars[i].style.backgroundColor = '';
                    this.bars[j].style.backgroundColor = '';
                }, this.animationSpeed);
               
            }, idx * this.animationSpeed)
        })
    }
}