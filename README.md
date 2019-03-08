# ExpressAPI & Elm
Elm ver 0.19  

### Package Install
```
$ npm install
$ elm install elm/json
$ elm install elm/http
```

### Sequelize
migration
```
$ node_modules/.bin/sequelize db:migrate --env development
```

model作成  
```
$ node_modules/.bin/sequelize model:create --name todo --underscored --attributes title:string,description:string,flg:boolean
```
**attributes以下はスペース不要**  

seed作成  
```
$ node_modules/.bin/sequelize seed:generate --name todo
```

seed実行  
```
$ node_modules/.bin/sequelize db:seed:all
```

### 起動
```
$ npm run start
```
**事前に以下コマンドでElmソースをコンパイルする必要がある。**  
```
$ elm make src/Main.elm --output public/app.js
```
