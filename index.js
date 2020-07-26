//4. Существует страница на домене domain.one,
//  на которой загружается iframe с другого домена
//   - domain.two. Нужно на странице domain.one 
//   использовать скрипт для записи/чтения/удаления 
//   данных из localStorage домена domain.two. При 
//   этом оба домена под нашим управлением, то есть, 
//   мы можем изменять файлы и там, и там, как нам удобно.

// Задача: написать реализацию методов для чтения/записи
// /удаления данных из доступного localStorage другого домена. 
// Пусть при успешном чтении данные выводятся в консоль, а при 
// успешной записи/удалении в консоль отправляется лог вроде
//  “written” или “removed”.

//   5. Для работы с кросс-доменным localStorage понадобилось
//    не только чтение/запись/удаление данных из него,
//     но и их дополнительная обработка. 

// Задача: добавить в решение задачи 4 возможность
//  передать callback и вызвать его на domain.one после 
//  выполнения операции чтения/записи/удаления.


const input = document.getElementById("input-value");
const save = document.getElementById("save");
const look = document.getElementById("look");
const del = document.getElementById("del");
const checkValueStorage = value => { return value.toUpperCase() };
save.addEventListener("click", () => {
  localStorage.setItem('test', input.value);
  console.log("written");
  localStorage.setItem("callback", checkValueStorage);
});
look.addEventListener("click", () => {
  console.log(localStorage.getItem('test'));
});
del.addEventListener("click", () => {
  localStorage.removeItem("test");
  console.log("removed");
});

