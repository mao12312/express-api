let mongoose = require('mongoose'); //mongoDBに接続するためのライブラリ
let Schema = mongoose.Schema; //mongoDBのスキーマを作る

let UserSchema = new Schema({
    name: String,
    screen_name: String,
    bio: String
});

// スキーマをモデルとしてコンパイルし、それをモジュールとして扱えるようにする
module.exports = mongoose.model('UserModel', UserSchema);
