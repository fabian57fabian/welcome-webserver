// JavaScript Document

(function ($) {
    console.log("JQUERY: " + $);

    $.fn.todo = function (options) {
        console.log("CALL PLUGIN TODO");
        var defaults = {
            serverURL: "example.com/server_page_url",
        }
        options = $.extend(defaults, options);
        console.log("OPTIONS: " + defaults['serverURL']);

        // for each item in the wrapped set
        return this.each(function (i, obj) {
            console.log("INITIALIZE PLUGIN " + i);

            // cache "this."
            var $this = $(this);

            $this.addClass('projects-list-container');
            loadToDo($this);
        });

        function loadToDo($el) {
            var $this = $el;
            console.log("loadProjects:");
            request_type = "load";

            var request = $.ajax({
                url: options.serverURL,
                type: "POST",
                //contentType: 'application/json; charset=utf-8',
                data: {"action": request_type},
                dataType: "json",
                //headers: {"Content-type" :"application/x-www-form-urlencoded"},
            });

            request.done(function (data) {
                console.log("done query;");
                handleLoad(data, $this);
            });

            request.fail(
                function (jqXHR, textStatus) {
                    alert("Request failed: " + textStatus);//jqXHR.responseText);
                    console.log(jqXHR);
                });
        }


        function handleLoad(data, $el) {
            console.log("handleLoad");

            $this = $el;
            var projects = data["projects"];
            var $toDoList = $("<ul class='todo-list'>");
            var html = "";

            if (projects.length > 0) {
                $this.append($toDoList);

                $(projects).each(function (index, object) {
                    html += "<li data-id='todo_" + object['id'] + "'" + "><a href='../"+object['link']+"'><span class='todo_text'>" + object['title'] + " by " + object['creator']
                        + "</span></a></li>\n";
                });

                $toDoList.append($(html));
                //addDeleteListener();
                //addUpdateListener();*/
            } else {
                htmlS = "<p>Add a to do!</p>";
                $this.html(htmlS);
            }
        }
    }
})
(jQuery);
