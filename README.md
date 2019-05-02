# welcome-webserver
Hi there! 
- Are you tired of having a cool apache webserver on your pc or raspberry pi but have to manually insert a link to open an index page? 
- Are you tired of typing 'localhost' and then navigate thru folders to get to your project?

If so, i have the answer for you: get a welcome webserver!
It is simple as possible: every time you create a project or a new html page you want to navigate quickly, just add it to your project links and use my simple redirection page to navigate to it!
The project list is automatically stored in a sql server to remember it and you are free to use it.

# Installation

To install welcome-webserver you have to install mysql (or phpmyadmin, mariadb, postgresql...).
Once you've done that add an user with a specified password (the default one i am using is *client1* with password *client1password*).
Next you have to login into the database  and execute the commands inside create_table.sql file. Ignore the insert lines because they are for testing purposes and as example.

Final think: you have to create a file called *index.html* inside your htdocs folder in apache (or your main folder depending on what webserver you use) and write this code:
```html
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url = welcome_server/index.html">
</head>
<body>
</body>
</html>
```

