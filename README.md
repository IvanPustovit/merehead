Для запуска проекта:
1. Клонуємо проект з репозиторію.
2. В корні папки запускаємо "npm i".
3. Запускаємо скрипт "npm run client:install"
4. В корні створюємо файл ".env".
5. У файлі ".env" прописуємо змінні згідно файла ".env.   example".
    5.1. 'CONNECTION_URI' - це URI для підкючення бази mongoDB типу 'mongodb+srv://<user>:<password>@cluster0.gfxu6.mongodb.net/<database_name>?retryWrites=true&w=majority'

    5.2 Моя тестова база 'mongodb+srv://user:GwIT7wGUnp9fsvja@cluster0.gfxu6.mongodb.net/database?retryWrites=true&w=majority'
    
6. Якщо константа "PORT" не дорівнює 5000, то у файлі 'client/src/constant.js' міняємо порт у константи "BASE_URI".
7.Для запуску у режимі production:
    7.1. запускаємо скрипт "npm run client:build".
    7.2. запускаємо скрип "npm start".
8. В браузері відкриваємо вкладку за адресою "localhost:(порт який вказали у файлі .env)".