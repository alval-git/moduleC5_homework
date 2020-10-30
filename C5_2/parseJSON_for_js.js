const jsonStr = `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;
const data = JSON.parse(jsonStr);
const people = data.list;
console.log("people", people)
const result = {
	list : [{name:people[0].name,age:people[0].age,prof:people[0].prof},
			{name:people[1].name,age:people[1].age,prof:people[1].prof}
	       															   ]
};
console.log(result)