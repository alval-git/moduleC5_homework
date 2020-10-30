const parser = new DOMParser();
const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;
const xmlDOM = parser.parseFromString(xmlString,"text/xml");
const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");
const nameNode = listNode.querySelectorAll("name");
const firstNameNode = listNode.querySelectorAll("first");
const secondNameNode = listNode.querySelectorAll("second");
const ageNode = listNode.querySelectorAll("age");
const profNode = listNode.querySelectorAll("prof");
let langAttrArr = [];
for (let i = 0; i < nameNode.length;i+=1){
  langAttrArr.push(nameNode[i].getAttribute('lang'));
  
};
const result = {
	list:[{name:firstNameNode[0].textContent + " " + secondNameNode[0].textContent, age: ageNode[0].textContent, prof:profNode[0].textContent,lang:langAttrArr[0]},
		  {name:firstNameNode[1].textContent + " " + secondNameNode[1].textContent, age: ageNode[1].textContent, prof:profNode[1].textContent,lang:langAttrArr[1]}]
};
console.log(result)const parser = new DOMParser();
const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;
const xmlDOM = parser.parseFromString(xmlString,"text/xml");
const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");
const nameNode = listNode.querySelectorAll("name");
const firstNameNode = listNode.querySelectorAll("first");
const secondNameNode = listNode.querySelectorAll("second");
const ageNode = listNode.querySelectorAll("age");
const profNode = listNode.querySelectorAll("prof");
let langAttrArr = [];
for (let i = 0; i < nameNode.length;i+=1){
  langAttrArr.push(nameNode[i].getAttribute('lang'));
  
};
const result = {
	list:[{name:firstNameNode[0].textContent + " " + secondNameNode[0].textContent, age: ageNode[0].textContent, prof:profNode[0].textContent,lang:langAttrArr[0]},
		  {name:firstNameNode[1].textContent + " " + secondNameNode[1].textContent, age: ageNode[1].textContent, prof:profNode[1].textContent,lang:langAttrArr[1]}]
};
console.log(result)