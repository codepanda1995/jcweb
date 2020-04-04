const data = require("./data.json");
const path = require("path");
const fs = require("fs");

// 获取图书列表数据
exports.getAllBooks = (req,res)=>{
    res.json(data);
};

// 自动生成图书编号(自增)
let maxBooksId = ()=>{
    // 设置一个空数组
    let arr = [];//用于存放图书信息id值
    data.forEach(
        item=>{
            arr.push(item.id);
        }
        
    );
    // 返回id值最大的id
    return Math.max.apply(null,arr);
};

// 把内存地址写入文件中
let writeDataToFile = (res) =>{
    fs.writeFile(path.join(__dirname,"data.json"),JSON.stringify(data,null,4),(err)=>{
        // 如果写入识别，显示状态码500
        if(err){
            res.json({
                status:500
            });
        }
        // 否则显示状态码200
        res.json({
            status:200
        });
    });
};

// 添加图书信息并且保存数据
exports.addBook = (req,res)=>{
    // 获取表单数据
    let info = req.body;
    let book = {};//用于存储表单数据
    // 遍历数据进行填充
    for(let key in info){
        book[key] = info[key];
    };
    // 设置图书时间 并对图书id+1
    book.date = "2020-03-03";
    book.id = maxBooksId() + 1;
    data.push(book);
    // 把内存中的数据写入文件
    writeDataToFile(res);
};

// 跳转到编辑图书页面
exports.toEditBook = (req,res)=>{
    let id = req.params.id;
    let book = {};//用于存储查询到的图书数据
    data.some(item=>{
        if(id == item.id){
            book = item;
            return true;//跳出循环
        }
    });
    res.json(book);//向前端响应json数据
}

// 修改指定图书信息
exports.editBook = (req,res)=>{
    let info = req.body;
    info.id = req.params.id;
    data.some(
        item=>{
            if(info.id == item.id){
                for(let key in info){
                    item[key] = info[key];
                }
                return true;
            }
        }
    );
    // 把内存中的数据写入文件中
    writeDataToFile(res);
};

// 删除指定图书信息
exports.deleteBook = (req,res)=>{
    let id = req.params.id;
    data.some(
        (item,index)=>{
            if(id == item.id){
                //删除数组的一项数据
                data.splice(index,1);//从指定索引开始移除一个数据
                return true;
            }
        }
    );
    // 把内存中的数据重新写入文件中
    writeDataToFile(res);
}