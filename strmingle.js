function stringMingling(str1, str2, i=0){
    if(i > str2.length) return ""
    if (str1.length == str2.length) return (str1[i] + str2[i]) + stringMingling(str1, str2, ++i)
}
console.log(stringMingling("race", "face"))

function stringMingling(str1, str2, i=0) {return (i > str2.length) ? "" : (str1.length == str2.length) ? (str1[i] + str2[i]) + stringMingling(str1, str2, ++i): ""}

console.log(stringMingling("mat", "bath"))
//I don't know why 'NaN' is attached to the end. How do I remove it? I still got the strings to mingle, though :)