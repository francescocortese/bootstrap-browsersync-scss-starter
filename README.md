# bootstrap-browsersync-scss-starter
Bootstrap Starterkit working with scss, gulp, browsersync, gulp-file-include. Version 1.0

### Prerequisites
* node js >=6.9.1
* npm >=3.10.10

### Main Dependencies
* browser-sync
* gulp
* gulp-file-include
* gulp-sass
* gulp-uglify
* stylelint
* autoprefixer

### Quick Start
For installation, clone or download the package and open the terminal to run:
```shell

# Go to the root folder of your project, or just type cd, space and drag n drop the folder in terminal
cd /main-folder-of-your-project

# Install browserSync and all the node dependencies that we need
npm install

# Start the gulp task and browserSync
gulp
```
After installation and run gulp, browser-sync will lunch the automatically with http://localhost:3000 on the port :3000. On the port :3001 will find other browser-sync feature.

### Structure
Inside the app there is all you need for your project
```shell

  app
   ├── build                  # Build folder
   │   ├── css                # CSS builded files from SCSS folder
   │   └── js                 # JS folder with app.min.js(plugins.js + main.js) builded from ./app/js/ folder
   ├── inc                    # Include folder via gulp-file-include (_header.html, _footer.html, etc.)
   ├── js                     # Test files (alternatively `spec` or `tests`)
   │   ├── main.js            # Your scripts
   │   └──  plugins.js        # Your JQuery plugins
   ├── js                     
   │   ├── main.js            # Your scripts
   │   └── plugins.js         # Your JQuery plugins
   ├── js                     
   │   ├── main.js            # Your scripts
   │   └── plugins.js         # Your JQuery plugins
   │   └── unit               
   ├── scss                     
   │   ├── bootstrap          # All Bootstrap style and scss files
   │    ├── main.scss          # Main file with all the @import      
   │   └── _commons.scss      # Your JQuery plugins
   └── ...

```

* The folder ./app/js is just for compile and build the file plugins.js and main.js. For other plugins or scripts, put .js files into the ./app/build/js/

### Bootrastrap 4.0
Bootstrap 4.0 SCSS is included via dependencie inside the node_modules folder. If you prefer used it without the node_modules, is already included inside the SCSS folder. The Bootstrap's js are included in the folder ./app/build/js/. Bootrastrap need popper.js.

``` html
<!-- scripts insde the ./app/inc/_footer.html  -->
<script src="js/jquery-3.3.1.slim.min.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/app.min.js"></script>
```

### GULP FILE INCLUDE
You can include files thanks to gulp-file-include. All the included files are in the ./app/inc folder.
``` html
<!-- just put this code inside your .html files -->
@@include('inc/_footer.html')
```
