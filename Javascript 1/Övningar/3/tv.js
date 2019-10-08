class TV {
    constructor(width = null, height = null, aspectRatio = "16:9") {
        this.maxHeight = Number(height);
        this.maxWidth = Number(width);
        this.aspectRatio = aspectRatio;

        this.largestHeightFromWidth = null;
        this.largestWidthFromHeight = null;
        this.maxInchesForTv = null;

        this.convertAspectRatioStringToObject();
        this.findLargestTvFormat();
    }

    convertAspectRatioStringToObject() {
        this.aspectRatio = this.aspectRatio.split(":");
        let newObject = {
            width: Number(this.aspectRatio[0]),
            height: Number(this.aspectRatio[1])
        };

        this.aspectRatio = newObject;
    }

    convertCmToInches(valueInCm) {
        const cmInAInch = 2.54;

        let valueInInches = valueInCm * (1 / cmInAInch);
        return Math.round(valueInInches * 10) / 10;
    }

    getHypotenuse(height,width) {
        let hypotenuse = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
        return hypotenuse;
    }

    findLargestTvFormat() {
        this.largestHeightFromWidth = Math.round((this.maxWidth / this.aspectRatio.width) * this.aspectRatio.height * 10 ) / 10;
        this.largestWidthFromHeight = Math.round((this.maxHeight / this.aspectRatio.height) * this.aspectRatio.width * 10 ) / 10;
        let hypotenuse = null;
        if(!this.maxHeight) {
            hypotenuse = this.getHypotenuse(this.largestHeightFromWidth, this.maxWidth);
        } 
        else if(!this.maxWidth) {
            hypotenuse = this.getHypotenuse(this.maxHeight, this.largestWidthFromHeight);
        }
        this.maxInchesForTv = this.convertCmToInches(hypotenuse);
    }

}