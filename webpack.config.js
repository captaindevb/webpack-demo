const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports  =  {
    entry: './src/index.js',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'build'), // 노드에서 예약된 예약어. 현재 파일의 위치를 의미.
        //최종적인 출력 파일이 저장되는 곳
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/, //.css 로 끝나면 (정규식)
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/, //.scss 로 끝나면 (정규식)
                use: ['style-loader', 'css-loader', 'sass-loader'] //순서는 뒤에서부터 시작
            }
        ]
    }
}