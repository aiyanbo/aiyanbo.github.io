window.AiShell = new ShellCore();
function ShellCore() {
    this.shell = null;
    this.historyCommands = [];
    this.historyIndex = this.historyCommands.length;
    this.libs = [];

    this.all = function () {
        this.shell = document.getElementById("shell");
        this.shell.getElementsByClassName("readLine")[0].focus();
        this.libs.push(Math);
        this.libs.push(CoreLib);
        this.libs.push(this);
    };

    this.keyPressListener = function (evt) {
        evt = evt || window.event;
        var keyCode = evt.keyCode || evt.which;
        keyCode = parseInt(keyCode);
        var target = evt.target || evt.srcElement;
        if (keyCode == 13) {
            this.executeCommand(target);
        } else if (keyCode == 38 || keyCode == 40) {
            var command = null;
            for (var i in this.historyCommands) {
                command = this.getHistory(keyCode != 38);
                if (command != target.value) {
                    break;
                }
            }
            if (command.isNotBlank()) {
                target.value = command;
            }
        }
    };

    this.executeCommand = function (readLine) {
        var responseContainer = document.createElement("div");
        var response = "";
        if (readLine.value.isNotBlank()) {
            var request = readLine.value.split(' ');
            var command = undefined;
            for (var i in AiShell.libs) {
                command = AiShell.libs[i][request[0]];
                if (command != undefined) {
                    break;
                }
            }
            try {
                if (command.apply) {
                    response = command.apply(command.constructor, request[1] ? request[1].split(',') : null);
                } else {
                    response = command;
                }
                AiShell.historyCommands.push(request[0]);
            } catch (e) {
                response = e.toLocaleString().replace("command" + "\"" + command + "\"");
            }
        }
        this.historyIndex = this.historyCommands.length;
        responseContainer.innerHTML = response ? response : "";
        readLine.parentNode.appendChild(responseContainer);
        var nextLine = readLine.parentNode.cloneNode(true);
        nextLine.getElementsByTagName("input")[0].value = "";
        nextLine.removeChild(nextLine.getElementsByTagName("div")[0]);
        readLine.parentNode.parentNode.appendChild(nextLine);
        nextLine.getElementsByTagName("input")[0].focus();
        readLine.disabled = "disabled";
    };

    this.getShell = function () {
        var _this = this;
        if (_this.shell == null) {
            _this.shell = document.getElementById("shell");
        }
        return _this.shell;
    };

    this.getHistory = function (nexted) {
        if (nexted) {
            this.historyIndex++;
        } else {
            this.historyIndex--;
        }
        if (this.historyIndex > this.historyCommands.length) {
            this.historyIndex = this.historyCommands.length;
        } else if (this.historyIndex < 0) {
            this.historyIndex = -1;
        }
        var command = this.historyCommands[this.historyIndex];
        return command != undefined ? command : "";
    };

    this.history = function () {
        if (AiShell.historyCommands.length == 0) {
            return "";
        }
        return "<pre>" + AiShell.historyCommands.join("<br>") + "</pre>"
    };

    this.exit = function () {
        AiShell.getShell().style.display = "none";
        window.close();
    }
}