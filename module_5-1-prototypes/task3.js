function Laptop(withFloppyDriver) {
    this.withFloppyDriver = withFloppyDriver;
    this.isFloppyDriverOpen = false;
}

Laptop.prototype.toggleFloppyDriver = function() {
    if (this.withFloppyDriver) {
        if (this.isFloppyDriverOpen) { // true
            this.isFloppyDriverOpen = !this.isFloppyDriverOpen; // false
            console.log('You have closed the floppy driver');
        } else {
            this.isFloppyDriverOpen = !this.isFloppyDriverOpen; // true
            console.log('You have opened the floppy driver');
        }
    } else {
        console.log('You don\'t have a floppy driver!');
    }
}

function HP(model, ssd, withFloppyDriver) {
    Laptop.call(this, withFloppyDriver);
    this.model = model;
    this.ssd = ssd;
}

HP.prototype = Object.create(Laptop.prototype);

const pavilion = new HP('Pavilion', 512, true);
console.log(pavilion.toggleFloppyDriver());
