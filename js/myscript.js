function Person(fname, lname, age) {

this.fname = fname;

this.lname = lname;

this.age = age;

this.fullname = function() {

return (fname + " " + lname);

};

}



