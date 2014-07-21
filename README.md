fis-parser-less-import
====

Import less lib before parsing.

Usage
----
在`fis-conf.js`中，将其声明为`less`的`parser`之一。请注意，`fis-parser-less-import`必须声明在真正的`less-parser`(如此例中的`fis-parser-less`)之前： 
```
fis.config.merge({
    modules: {
        parser: {
            less : ['less-import', 'less']
        }
    },
    settings: {
        parser: {
            'less-import': {
                file: 'mixin.less'
            }
        }
    }
};
```

Setting
----
- `file{String}`: `import`的文件地址

FAQ
---
### 这是一个`less-parser`吗？
不是。严格来说，这是一个`less`预处理工具，原理是在所有的`less`文件头部添加`@import`。
### 配置中的`file`相对什么路径？
取决于你的`less-parser`的配置。`less`本身定义了`paths`配置项来定义`@import`的查找位置，如果你是用的`fis-parser-less`，会依次尝试目标文件目录、项目目录以及根目录（绝对路径）。