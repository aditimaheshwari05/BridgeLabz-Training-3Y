class Student{
    static uName="GLA";
    #studentid=101;
    #studentName="Aditi";

}

getDetails()
{
    console.log("Student ID:- "+this.#studentid);
    console.log("Student Name:- "+this.#studentName);
    this.#studentName="";
}