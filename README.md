myBoilerplate
=============
This is a template, which has some common settings for building and package managment systems. This includes:
	* **Grunt**, as a building system, which compiles
	* **CoffeeScript** and
	* **Stylus** style sheets.

That's all.

## Usage
You must have installed:
	*	**Node.js**
	* **LiveReload** browser plugin
	* **Git**
After that run the following command in Terminal:
	1. `git clone https//github.com/hermanya/myBoilerplate.git`
			Clone the boilerplate from GitHub or download it manually.
	2. `cd myBoilerplate`
			Navigate into the boilerplate directory.
	3. `npm install`
			Install Node.js dependencies listed in `package.json`.
	4. `bower install`
			Download web frameworks listed in `bower.json`.

The boilerplate is ready to use!
Open the page you want to work on in the browser, click on the **LiveReload** icon. 
Open Terminal, navigate into the project directory and run `grunt`. 
Do this every time you continue working on this project. It will automatically compile your CoffeeScripts and Stylus style sheets into js and css *on save*.

