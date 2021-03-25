// 4․ Ստեղծել myMap մեթոդ Array-ի համարար , որը կաշխատի ինչպես map մեթոդը. [].map(fn) -ը կ
// արողանանք գրել [].myMap(fn) -ի միջոցով ։

Array.prototype.myMap = function(){
    this.map(i=>console.log(i))
};
[1,2,3].myMap();
