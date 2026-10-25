let userName = "Aditi";
let userAge = 20;
let isStudent = true;
let skills = ["Java", "JavaScript", "Python"];
let userDetails = {
    city: "Mathura",
    course: "BTech"
};
let address = null;
let phoneNumber;

let report = [
    {
        label: "User Name",
        value: userName,
        type: typeof userName
    },
    {
        label: "User Age",
        value: userAge,
        type: typeof userAge
    },
    {
        label: "Is Student",
        value: isStudent,
        type: typeof isStudent
    },
    {
        label: "Skills",
        value: skills.join(", "),
        type: Array.isArray(skills) ? "array" : typeof skills
    },
    {
        label: "User Details",
        value: JSON.stringify(userDetails),
        type: typeof userDetails
    },
    {
        label: "Address",
        value: address,
        type: address === null ? "null" : typeof address
    },
    {
        label: "Phone Number",
        value: phoneNumber,
        type: typeof phoneNumber
    }
];

console.table(report);