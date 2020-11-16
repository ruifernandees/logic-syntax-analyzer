# 🔍 L.S. Analyzer
<img src="prints/insomnia.png" alt="Logic Syntax Analyzer request on Insomnia">

## 📝 Description
L.S. Analyzer is a REST API that receive a syntax and an expression that you defines and return if the expression is valid, based on your syntax.

## 💻 Technologies
- TypeScript
- NodeJS
- Jest (TDD)
- Express (Server)

## 🚀 Run on your machine
Note: it requires yarn installed 

> Initial steps
```bash
$ git clone https://github.com/ruifernandees/logic-syntax-analyzer.git
$ cd logic-syntax-analyzer
```

> Run the server
```bash

# Install all dependencies
$ yarn install

# Run the automated tests
$ yarn test

# Start the server
$ yarn dev
```

### 📄 Request Format
#### Note 1: you can customize the properties' values
#### Note 2: you can only send an expression with blank space between the characters, as the example shows:( P -> ~ R ) & T
```json
{
	"syntax": {
		"logicConstants": [
				"V",
				"F"
		],
		"propositionalSymbols": [
				"P",
				"Q",
				"R",
				"S",
				"T"
		],
		"logicOperators": {
				"negativeOperator": "~",
				"andOperator": "&",
				"orOperator": "|",
				"implicationOperator": "->",
				"biImplicationOperator": "<->"
		},
		"separators": [
				{ "first": "(", "last": ")" }
		]
	},
	"expression": "( P -> ~ R ) & T"
}
```
