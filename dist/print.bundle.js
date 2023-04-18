"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["print"],{

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todos)\n/* harmony export */ });\nconst $todos = document.querySelector('.todoContainer');\r\n\r\n// Export a Todos class as the default export\r\nclass Todos {\r\n  // Define a constructor for the Todos class\r\n  constructor() {\r\n    // Retrieve the todoList array from local storage or create an empty array if none exists\r\n    this.todoList = JSON.parse(localStorage.getItem('todoList')) || [];\r\n\r\n    // If the todoList array is not empty, loop through each item and add it to the DOM\r\n    if (this.todoList.length > 0) {\r\n      this.todoList.forEach((todo, index) => {\r\n        // Use insertAdjacentHTML to add a new todo item to the DOM\r\n        $todos.insertAdjacentHTML(\r\n          'beforeend',\r\n          `<ul class=\"listcontainer \">\r\n            <div class=\"checBox\">\r\n              <input type=\"checkbox\" class=\"checkboxClass\" id=\"myCheckbox\">\r\n            </div>\r\n            <li class=\"list textTodo\">${todo.description}</li>\r\n            <i class=\"fa-solid fa-ellipsis-vertical vertical\" ></i>\r\n            <i class=\"fa-solid fa-trash-can delete\" id=\"${todo.description}\"></i>\r\n          </ul>\r\n          `,\r\n        );\r\n        // Add a click event listener to the remove button for each todo item\r\n        const $removeButton = document.getElementById(`${todo.description}`);\r\n        if ($removeButton) {\r\n          $removeButton.addEventListener('click', () => {\r\n            this.remove(todo.index);\r\n          });\r\n        }\r\n        // Update the index property of the todo item\r\n        todo.index = index;\r\n        todo.completed = false;\r\n      });\r\n    }\r\n  }\r\n\r\n  updateIndexes = () => {\r\n    this.todoList.forEach((todo, index) => {\r\n      todo.index = index;\r\n    });\r\n  };\r\n\r\n  // Define an add method to add a new todo item to the DOM and the todoList array\r\n  add = (description) => {\r\n    const item = { description, index: this.todoList.length, completed: false };\r\n    this.todoList.push(item);\r\n    $todos.insertAdjacentHTML(\r\n      'beforeend',\r\n      `<ul class=\"listcontainer \">\r\n        <div class=\"checBox\">\r\n          <input type=\"checkbox\" class=\"checkboxClass\" id=\"myCheckbox\">\r\n        </div>\r\n        <li class=\"list textTodo\">${item.description}</li>\r\n        <i class=\"fa-solid fa-ellipsis-vertical vertical\" id=\"edit-${item.description}\" ></i>\r\n        <i class=\"fa-solid fa-trash-can delete\" id=\"${item.description}\"></i>\r\n      </ul>\r\n      `,\r\n    );\r\n    localStorage.setItem('todoList', JSON.stringify(this.todoList));\r\n    // Add a click event listener to the remove button for the new todo item\r\n    const $removeButton = document.getElementById(`${item.description}`);\r\n    $removeButton.addEventListener('click', () => {\r\n      const indexToRemove = this.todoList.findIndex((e) => e.description === item.description);\r\n      if (indexToRemove > -1) {\r\n        this.remove(indexToRemove);\r\n        this.updateIndexes();\r\n      }\r\n    });\r\n    this.updateIndexes(); // Update the indexes after adding an item\r\n\r\n    // Add a click event listener to the edit button for the new todo item\r\n    // Edit button\r\n    const $editButton = document.getElementById(`edit-${item.description}`);\r\n    $editButton.addEventListener('click', () => {\r\n      const $inputField = document.getElementById('input'); // input div\r\n      $inputField.value = item.description;\r\n      const $addButton = document.getElementById('addBtn'); // add button\r\n\r\n      // Edit button click handler\r\n      $addButton.addEventListener('click', () => {\r\n        const newDescription = $inputField.value;\r\n        const indexToEdit = this.todoList.findIndex((e) => e.description === item.description);\r\n\r\n        if (newDescription !== '' && newDescription !== item.description) {\r\n          if (indexToEdit > -1) {\r\n            // Edit item\r\n\r\n            this.edit(indexToEdit, newDescription);\r\n            $editButton.id = `edit-${newDescription}`;\r\n            $editButton.textContent = newDescription;\r\n            this.updateIndexes();\r\n          }\r\n        } else {\r\n          // Delete item previous item\r\n          // $editButton.parentElement.removeChild($editButton);\r\n          this.remove(indexToEdit);\r\n        }\r\n      });\r\n    });\r\n\r\n    // Add a click event listener to the checkbox for each todo item\r\n    /* const $checkboxes = document.querySelectorAll('.checkboxClass');\r\n    $checkboxes.forEach(($checkbox, index) => {\r\n      $checkbox.addEventListener('change', () => {\r\n        const todoToUpdate = this.todoList[index];\r\n        if (todoToUpdate) {\r\n          todoToUpdate.completed = $checkbox.checked;\r\n          localStorage.setItem('todoList', JSON.stringify(this.todoList));\r\n        }\r\n        const $todoDescription = $checkbox.parentElement.nextElementSibling;\r\n        if ($todoDescription) {\r\n          $todoDescription.classList.toggle('complete', $checkbox.checked);\r\n        }\r\n      });this.updateIndexes()\r\n    }); */\r\n  };\r\n\r\n  edit = (indexToEdit, newDescription) => {\r\n    // Retrieve the todo item to edit from the todoList array\r\n    const todoToEdit = this.todoList[indexToEdit];\r\n\r\n    // If the todo item exists, update its description and update the DOM\r\n    if (todoToEdit) {\r\n      todoToEdit.description = newDescription;\r\n      const $todoDescription = document.querySelector(`.textTodo[data-index=\"${indexToEdit}\"]`);\r\n      if ($todoDescription) {\r\n        $todoDescription.textContent = newDescription;\r\n        this.updateIndexes();\r\n      }\r\n      localStorage.setItem('todoList', JSON.stringify(this.todoList));\r\n    }\r\n  };\r\n\r\n  // Define a remove method to remove a todo item from the DOM and the todoList array\r\n  remove = (indexToRemove) => {\r\n    const todoToRemove = this.todoList[indexToRemove];\r\n\r\n    if (todoToRemove) { // Check if todoToRemove is defined\r\n      const { parentElement } = document.getElementById(todoToRemove.description);\r\n      if (parentElement) {\r\n        parentElement.remove();\r\n      } else {\r\n        this.updateIndexes();\r\n      }\r\n\r\n      if (indexToRemove > -1) {\r\n        this.todoList.splice(indexToRemove, 1);\r\n        this.updateIndexes();\r\n        localStorage.setItem('todoList', JSON.stringify(this.todoList));\r\n      }\r\n\r\n      this.updateIndexes(); // Update the indexes after removing an item\r\n    }\r\n  };\r\n}\n\n//# sourceURL=webpack://todo-list/./src/print.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/print.js"));
/******/ }
]);