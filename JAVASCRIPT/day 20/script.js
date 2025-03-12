const student={
    name: "shourav kumar",
    age:22,
    marks:66,
    city:"patna",
    eng:77,
    hindi:33,     
    math:80,
    getAvg(){
        let avg=(this.hindi+this.eng+this.math)/3;
        console.log(avg);
    }
}