# 说明
为了练习[commander](https://github.com/tj/commander.js)模块，进行的小项目。
# 功能
可以生成 [谚语|段子|唐诗|宋词]和动物图形。
# example:

$ hfuuss  #不加参数默认会随机出现一只动物和一句谚语       
![](http://images.hfuusec.cn/18-4-24/72622667.jpg)       
$ hfuuss -i 10 -t jokes # -i 指定某个动物   -t 指定内容类型       
![](http://images.hfuusec.cn/18-4-24/30851368.jpg)       
$ hfuuss ls #显示所有动物 和序号       
![](http://images.hfuusec.cn/18-4-24/93656420.jpg)       

# 如何使用
1、npm install hfuuss -g   
2、hfuuss

Usage: main [options]


  Options:

    -V, --version       output the version number
    -i, --index <n>     ascii art index, default is random
    -t, --type <value>  [quotes|jokes|tang|song]
    -h, --help          output usage information

# --type
 [quotes|jokes|tang|song] 分别代表 [谚语|段子|唐诗|宋词]


# 如何开发调试
1、git clone git@github.com:hfuuss/hfuuss-cli.git     
2、cd hfuuss-cli && npm install    
3、npm link     
4、hfuuss