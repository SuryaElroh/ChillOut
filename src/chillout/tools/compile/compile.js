var fs = require ('fs');
/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  ...
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */
var Watch = function () {
};
/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  ...
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */
Watch.prototype.last_date = [];
Watch.prototype.last_date_previous = [];
Watch.prototype.files = [];
Watch.prototype.source = "";
Watch.prototype.destination = "";
Watch.prototype.file_name = "";
Watch.prototype.folder_separator = "/";
/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  ...
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */
Watch.prototype.getFiles = function (dir , files_) {
    files_ = files_ || [];
    var files = fs.readdirSync (dir)
    .sort ();
    var files_length = files.length;
    var i = 0;
    for (; ;) {
        if (i >= files_length) {
            break;
        }
        var name = dir + this.folder_separator + files[i];
        var last_modified_time = new Date (fs.statSync (name).mtime);
        var date = [
            this.numberLength (last_modified_time.getFullYear ()) ,
            this.numberLength (last_modified_time.getMonth ()) ,
            this.numberLength (last_modified_time.getDay ()) ,
            this.numberLength (last_modified_time.getHours ()) ,
            this.numberLength (last_modified_time.getMinutes ()) ,
            this.numberLength (last_modified_time.getSeconds ())
        ];
        this.last_date.push (date.join (""));
        if (fs.statSync (name)
            .isDirectory ()) {
            this.getFiles (name , files_);
        }
        else {
            files_.push (name);
        }
        i++;
    }
    return files_;
};
/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  ...
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */
Watch.prototype.setSource = function (value) {
    this.source = value;
};
/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  ...
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */
Watch.prototype.setDestination = function (value) {
    this.destination = value;
};
/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  ...
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */
Watch.prototype.setFileName = function (value) {
    this.file_name = value.split (this.folder_separator)
    .pop ();
};
/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  ...
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */
Watch.prototype.numberLength = function (source) {
    if (source.toString ().length == 1) {
        source = "0" + "" + source;
    }
    return source;
};
/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  ...
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */
Watch.prototype.arrayDiff = function (new_tabb , old_tabb) {
    var i = 0;
    var old_tabb_length = old_tabb.length;
    var new_tabb_length = new_tabb.length;
    if (old_tabb_length != new_tabb_length) {
        old_tabb_length = new_tabb_length;
    }
    var diff = [];
    for (; ;) {
        if (i >= old_tabb_length) {
            break;
        }
        if (old_tabb[i] != new_tabb[i]) {
            diff.push (new_tabb[i]);
        }
        i++;
    }
    return diff;
};
/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  ...
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */
Watch.prototype.start = function () {
    if (!this.controlStart ()) return false;
    var that = this;
    var interval = setInterval (function () {
        that.last_date = [];
        that.files = that.getFiles (that.source);
        if (that.arrayDiff (that.last_date , that.last_date_previous).length != 0) {
            that.last_date_previous = that.last_date;
            that.action ();
        }
    } , 1000);
};
/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  ...
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */
Watch.prototype.log = function (value) {
    console.log (":: Watch :: " + value);
};
/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  ...
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */
Watch.prototype.controlStart = function () {
    var control = false;
    if (this.source && this.destination) {
        control = true;
    }
    return control;
};
/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  ...
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */
Watch.prototype.action = function () {
    var date = new Date ();
    console.log ('component [' + this.file_name + '] has changed : ' + date);
    var files = this.files;
    var files_length = files.length;
    var app_css = "";
    var i = 0;
    for (; ;) {
        if (i >= files_length) {
            break;
        }
        if (/\.css$/.test (files[i])) {
            app_css += fs.readFileSync (files[i] , 'utf8');
        }
        i++;
    }
    fs.writeFile (this.destination + this.folder_separator + this.file_name + ".css" , app_css);
    var app_js = "";
    var i = 0;
    for (; ;) {
        if (i >= files_length) {
            break;
        }
        if (/\.js$/.test (files[i])) {
            app_js += fs.readFileSync (files[i] , 'utf8');
        }
        i++;
    }
    fs.writeFile (this.destination + this.folder_separator + this.file_name + ".js" , app_js);
};
/*
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  ...
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 */
var watch = new Watch ();
var argv_length = process.argv.length;
process.argv.forEach (function (val , index , array) {
    if (index == 2) {
        watch.setFileName (val);
        watch.setSource (val);
    }
    else if (index == 3) {
        watch.setDestination (val);
    }
    if (argv_length == ( index + 1 )) {
        watch.start ();
    }
});
