import image from '@rollup/plugin-image';
import babel from '@rollup/plugin-babel';
import styles from 'rollup-plugin-styles';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const isWatch = Boolean(process.env.ROLLUP_WATCH);

export default {
  input: 'index.js',
  output: {
    file: './bundle.js',
    format: 'iife'
  },
  plugins: [
    // 1. Стили (должен быть первым)
    styles(),
    
    // 2. Картинки
    image(),
    
    // 3. Babel для совместимости
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env']
    }),
    
    // 4. Сервер и перезагрузка только для режима watch
    isWatch &&
      serve({
        open: true,
        verbose: true,
        contentBase: [''],
        host: 'localhost',
        port: 3000
      }),
    isWatch && livereload()
  ]
};
