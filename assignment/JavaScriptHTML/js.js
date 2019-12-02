var students_infromation = [
    {
        id: 1,
        number: 11823023017,
        name: '张一',
        college: '人工智能学院',
        study: '软件工程',
        gade: 2,
        class: 3,
        old: 20
    },
    {
        id: 2,
        number: 11823020118,
        name: '张二',
        college: '人工智能学院',
        study: '软件工程',
        gade: 2,
        class: 3,
        old: 19
    }, {
        id: 1,
        number: 11823023017,
        name: '张三',
        college: '人工智能学院',
        study: '软件工程',
        gade: 2,
        class: 3,
        old: 20
    },
    {
        id: 2,
        number: 11823020318,
        name: '张四',
        college: '人工智能学院',
        study: '软件工程',
        gade: 2,
        class: 3,
        old: 19
    },
    {
        id: 2,
        number: 11823020118,
        name: '张五',
        college: '人工智能学院',
        study: '软件工程',
        gade: 2,
        class: 3,
        old: 19
    },
    {
        id: 2,
        number: 11823020318,
        name: '张六',
        college: '人工智能学院',
        study: '软件工程',
        gade: 2,
        class: 3,
        old: 19
    },
    {
        id: 2,
        number: 11823020318,
        name: '张七',
        college: '人工智能学院',
        study: '软件工程',
        gade: 2,
        class: 3,
        old: 19
    },
    {
        id: 2,
        number: 11823020318,
        name: '张八',
        college: '人工智能学院',
        study: '软件工程',
        gade: 2,
        class: 3,
        old: 19
    },
    {
        id: 2,
        number: 11823020318,
        name: '张九',
        college: '人工智能学院',
        study: '软件工程',
        gade: 2,
        class: 3,
        old: 19
    },
    {
        id: 2,
        number: 11823020318,
        name: '张十',
        college: '人工智能学院',
        study: '软件工程',
        gade: 2,
        class: 3,
        old: 19
    },
    {
        id: 2,
        number: 11823020318,
        name: '张十一',
        college: '人工智能学院',
        study: '软件工程',
        gade: 2,
        class: 3,
        old: 19
    },
    {
        id: 2,
        number: 11823020318,
        name: '张十二',
        college: '人工智能学院',
        study: '软件工程',
        gade: 2,
        class: 3,
        old: 19
    },
    {
        id: 2,
        number: 11823020318,
        name: '张十三',
        college: '人工智能学院',
        study: '软件工程',
        gade: 2,
        class: 3,
        old: 19
    },
    {
        id: 2,
        number: 11823020318,
        name: '张十四',
        college: '人工智能学院',
        study: '软件工程',
        gade: 2,
        class: 3,
        old: 19
    },
    {
        id: 2,
        number: 11823020318,
        name: '张十五',
        college: '人工智能学院',
        study: '软件工程',
        gade: 2,
        class: 3,
        old: 19
    },
    {
        id: 2,
        number: 11823020318,
        name: '张十六',
        college: '人工智能学院',
        study: '软件工程',
        gade: 2,
        class: 3,
        old: 19
    },
    {
        id: 2,
        number: 11823020318,
        name: '张十七',
        college: '人工智能学院',
        study: '软件工程',
        gade: 2,
        class: 3,
        old: 19
    },
    {
        id: 2,
        number: 11823020318,
        name: '张十八',
        college: '人工智能学院',
        study: '软件工程',
        gade: 2,
        class: 3,
        old: 19
    },
    {
        id: 2,
        number: 11823020318,
        name: '张十九',
        college: '人工智能学院',
        study: '软件工程',
        gade: 2,
        class: 3,
        old: 19
    },
    {
        id: 2,
        number: 11823020318,
        name: '张二十',
        college: '人工智能学院',
        study: '软件工程',
        gade: 2,
        class: 3,
        old: 19
    },
    {
        id: 2,
        number: 11823020318,
        name: '张二十一',
        college: '人工智能学院',
        study: '软件工程',
        gade: 2,
        class: 3,
        old: 19
    },
    {
        id: 2,
        number: 11823020318,
        name: '张二十二',
        college: '人工智能学院',
        study: '软件工程',
        gade: 2,
        class: 3,
        old: 19
    },
    {
        id: 2,
        number: 11823020318,
        name: '张二十三',
        college: '人工智能学院',
        study: '软件工程',
        gade: 2,
        class: 3,
        old: 19
    },
];

function add() {                    //添加功能
    var id = students_infromation.length;
    id_student = document.getElementById("xh");
    name_add = document.getElementById("xh_first");
    college = document.getElementById("xh_isecond");
    word = document.getElementById("xh_threeth");
    gade = document.getElementById("xh_forth");
    class_add = document.getElementById("xh_fiveth");
    old = document.getElementById("xh_sixth");
    if (id_student.className === "right2" && name_add.className === "right2" && college.className === "right2" &&
        word.className === "right2" && gade.className === "right2" && class_add.className === "right2"
        && old.className === "right2") {
        students_infromation.push({
            id: id,
            number: id_student.value,
            name: name_add.value,
            college: college.value,
            study: word.value,
            gade: gade.value,
            class: class_add.value,
            old: old.value
        });
        document.getElementById("div").style.display = "none";
        goPage(1, 10);
        alert("添加成功!!!");
    } else {
        alert("信息填写不正确!")
    }
}

function change_information(i) {            //修改功能
    set_false();
    document.getElementById("div").style.display = "none";
    document.getElementById("see_information").style.display = "none";
    document.getElementById("change_information").style.display = "";
    var input = ["change_id", "change_student", "change_colloge", "change_studty", "change_gade", "change_class", "change_old"];
    var span = ["change_student_id", "change_student_name", "change_student_colloge", "change_student_studty", "change_student_gade", "change_student_class", "change_student_old"];
    for (var h = 0; h < 7; h++) {
        document.getElementById(input[h]).className = "initial";
        document.getElementById(span[h]).innerHTML = "";
    }
    document.getElementById("change_information").style.display = "";
    document.getElementById("change_id").value = students_infromation[i].number;
    document.getElementById("change_student").value = students_infromation[i].name;
    document.getElementById("change_colloge").value = students_infromation[i].college;
    document.getElementById("change_studty").value = students_infromation[i].study;
    document.getElementById("change_gade").value = students_infromation[i].gade;
    document.getElementById("change_class").value = students_infromation[i].class;
    document.getElementById("change_old").value = students_infromation[i].old;
    sign_mark(i);
    goPage(1, 10);

}
var shart = [];                     //设置判断行的标志
function set_false() {              //初始化标志
    for (var i = 0; i < students_infromation.length; i++) {
        shart[i] = false;
    }
}


function sign_mark(h) {
    shart[h] = true;          //行的标志
}


function save() {              //修改保存
    for (var a = 0; a < students_infromation.length; a++) {
        if (shart[a] === true) {
            break;
        }
    }
    id_student = document.getElementById("change_id");
    student = document.getElementById("change_student");
    college = document.getElementById("change_colloge");
    word = document.getElementById("change_studty");
    gade = document.getElementById("change_gade");
    class_add = document.getElementById("change_class");
    old = document.getElementById("change_old");
    if (id_student.className !== "wrong" && student.className !== "wrong" && college.className !== "wrong" &&
        word.className !== "wrong" && gade.className !== "wrong" && class_add.className !== "wrong"
        && old.className !== "wrong") {
        students_infromation[a] = {
            id: a + 1,
            number: id_student.value,
            name: student.value,
            college: college.value,
            study: word.value,
            gade: gade.value,
            class: class_add.value,
            old: old.value
        };
        alert("修改成功!!");
        shart[a]=false;
        goPage(1, 10);
        close_change()
    } else {
        alert("信息填写不正确!!")
    }

}

function close_see() {              //关闭查看窗口
    document.getElementById("see_information").style.display = "none";
}

function close_change() {           //关闭修改窗口
    document.getElementById("change_information").style.display = "none";
}

function see_information(i) {       //查看窗口
    document.getElementById("div").style.display = "none";
    document.getElementById("see_information").style.display = "";
    document.getElementById("change_information").style.display = "none";
    document.getElementById("see_id").value = students_infromation[i].number;
    document.getElementById("see_student").value = students_infromation[i].name;
    document.getElementById("see_colloge").value = students_infromation[i].college;
    document.getElementById("see_studty").value = students_infromation[i].study;
    document.getElementById("see_gade").value = students_infromation[i].gade;
    document.getElementById("see_class").value = students_infromation[i].class;
    document.getElementById("see_old").value = students_infromation[i].old;

}

function remove(i) {                    //删除功能
    students_infromation.pop(i);
    goPage(1, 10);
}

function close_window(i) {              //关闭更新
    document.getElementById("div").style.display = "none";
    hidden_value()
}

function hidden_value() {               //关闭更新
    var input = ["xh", "xh_first", "xh_isecond", "xh_threeth", "xh_forth", "xh_fiveth", "xh_sixth"];
    var span = ["id_student", "xh_name", "xh_icollege", "xh_word", "xh_gade", "xh_class", "xh_old"];
    for (var h = 0; h < 7; h++) {
        document.getElementById(input[h]).value = "";
        document.getElementById(input[h]).className = "initial";
        document.getElementById(span[h]).innerHTML = "";
    }
}

function show() {                      //新增窗口打开
    document.getElementById("div").style.display = "";
    document.getElementById("see_information").style.display = "none";
    document.getElementById("change_information").style.display = "none";
    hidden_value()
}

function f() {                         //学号表单验证
    xh = document.getElementById("xh");
    xh1 = document.getElementById("id_student");
    if (/^\d{11}$/.test(xh.value)) {
        xh1.innerHTML = "<img src='picture/right.png'>";
        xh.className = 'right2';
        return true;
    } else {
        xh1.innerHTML = "<img src='picture/wrong.png'>";
        xh.className = 'wrong';
        return false
    }
}


function ch_verification(xh, xh_next) {             //文字表单验证
    xh1 = document.getElementById("xh_" + xh_next);
    xh2 = document.getElementById("xh_" + xh);
    if (/^[\u4e00-\u9fa5]+$/.test(xh2.value)) {
        xh1.innerHTML = "<img src='picture/right.png'>";
        xh2.className = 'right2';
        return true
    } else {
        xh1.innerHTML = "<img src='picture/wrong.png'>";
        xh2.className = "wrong";
        return false;
    }
}

function number_verification(xh, xh_next) {         //数字表单验证
    xh3 = document.getElementById("xh_" + xh);
    xh1 = document.getElementById("xh_" + xh_next);
    if (/^[0-9]*$/.test(xh3.value) && xh3.value !== "") {
        xh1.innerHTML = "<img src='picture/right.png'>";
        xh3.className = 'right2';
        return true;
    } else {
        xh1.innerHTML = "<img src='picture/wrong.png'>";
        xh3.className = 'wrong';
        return false
    }
}

function change_student1() {                    //学号表单验证
    xh = document.getElementById("change_id");
    xh1 = document.getElementById("change_student_id");
    if (/^\d{11}$/.test(xh.value)) {
        xh1.innerHTML = "<img src='picture/right.png'>";
        xh.className = 'right2';
        return true;
    } else {
        xh1.innerHTML = "<img src='picture/wrong.png'>";
        xh.className = 'wrong';
        return false
    }
}

function change_student2(xh, xh_next) {         //文字表单验证
    xh1 = document.getElementById(xh_next);
    xh2 = document.getElementById(xh);
    if (/^[\u4e00-\u9fa5]+$/.test(xh2.value)) {
        xh1.innerHTML = "<img src='picture/right.png'>";
        xh2.className = 'right2';
        return true
    } else {
        xh1.innerHTML = "<img src='picture/wrong.png'>";
        xh2.className = "wrong";
        return false;
    }
}

function change_student3(xh, xh_next) {         //数字表单验证
    xh3 = document.getElementById(xh);
    xh1 = document.getElementById(xh_next);
    if (/^[0-9]*$/.test(xh3.value) && xh3.value !== "") {
        xh1.innerHTML = "<img src='picture/right.png'>";
        xh3.className = 'right2';
        return true;
    } else {
        xh1.innerHTML = "<img src='picture/wrong.png'>";
        xh3.className = 'wrong';
        return false
    }
}

function selectall() {              //全选功能
    var check = document.getElementsByName("checked_student");
    var check2 = document.getElementById("checked_allstudent");
    for (var i = 0; i < check.length; i++) {
        check[i].checked = check2.checked;
    }
}

function judge() {
    var check = document.getElementsByName("checked_student");
    var check2 = document.getElementById("checked_allstudent");
    for(var h=0;h<check.length;h++){
        if(check[h].checked!==true){
            check2.checked=false;
            return true;
        }
    }
    check2.checked=true;
}
function delete_student() {         //删除功能
    var h = 1;
    var check = document.getElementsByName("checked_student");
    var check2 = document.getElementById("checked_allstudent");

    if (students_infromation.length === 0) {
        check2.checked = false;
        alert("暂无数据！！！");
        goPage(1, 10)
    }else {
        var check3 = document.getElementById("low");
        var index = check3.innerText;
        for (var i = 0; i < check.length; i++) {
            if (check[i].checked === true) {
                students_infromation.splice(parseInt(index) + i - h, 1);
                h++;
            }
        }
        check2.checked = false;
        goPage(parseInt(parseInt(index)/10+1)+0.1, 10);
        alert("删除成功!!")
    }
}

goPage(1, 10);

function goPage(pno, psize) {            //pno 页数，psize 每页数据数
    dagit = " <tr class=\'head_table\'>\n" +
        "<td><input type=\"checkbox\" id=\"checked_allstudent\"  onclick=\"selectall()\"></td>\n" +
        "<th width=90px>序号</th>\n" +
        "<th>学号</th>\n" +
        "<th>姓名</th>\n" +
        "<th>学院</th>\n" +
        "<th>专业</th>\n" +
        "<th>年级</th>\n" +
        "<th>班级</th>\n" +
        "<th>年龄</th>\n" +
        "<th>操作</th>\n" +
        "</tr>";
    if (students_infromation.length !== 0) {
        var num = students_infromation.length;//表格所有行数(所有记录数)
        var totalPage = 0;//总页数
        var pageSize = psize;//每页显示行数
        //总共分几页
        if (num / pageSize > parseInt(num / pageSize)) {
            totalPage = parseInt(num / pageSize) + 1;
        } else {
            totalPage = parseInt(num / pageSize);
        }
        var currentPage = pno;//当前页数
        if (currentPage === 0) {
            alert("已是第一页");
            currentPage = 1;
        }
        if (currentPage === totalPage+1) {
            alert("已是最后一页");
            currentPage = totalPage;
        }

        if(currentPage>parseInt(currentPage)){
            if(parseInt(currentPage)>totalPage){
                currentPage = totalPage;
            }else {
                currentPage = parseInt(currentPage);
            }
        }
        var startRow = (currentPage - 1) * pageSize + 1;//开始显示的行 31
        var endRow = currentPage * pageSize;//结束显示的行  40
        endRow = (endRow > num) ? num : endRow;  //40
        //遍历显示数据实现分页


        for (var i = startRow - 1; i < endRow; i++) {

            if ((i + 1) % 2 !== 0) {
                dagit +=
                    "<tr id=\'rowcolor1\' class=\"color_singular\">\n" +
                    "<td><input type=\"checkbox\" name=\"checked_student\" onclick='judge()'></td>\n" +
                    "<th id=\"low\">" + (i + 1) + "</td>\n" +
                    "<th align=\"center\">" + students_infromation[i].number + "</th>\n" +
                    "<th align=\"center\" id=\"three\">" + students_infromation[i].name + "</th>\n" +
                    "<th align=\"center\" id=\"four\">" + students_infromation[i].college + "</th>\n" +
                    "<th align=\"center\" id=\"five\">" + students_infromation[i].study + "</th>\n" +
                    "<th align=\"center\" id=\"six\">" + students_infromation[i].gade + "</th>\n" +
                    "<th align=\"center\" id=\"seven\">" + students_infromation[i].class + "</th>\n" +
                    "<th align=\"center\" id=\"eight\">" + students_infromation[i].old + "</th>\n" +
                    "<th align=\"center\" id=\"nine\">" +
                    "<span class='float_left text_css' onclick='see_information(" + i + ")'>查看</span>" +
                    "&nbsp&nbsp<span class='float_right text_css' onclick='change_information(" + i + ")'>修改</input></th>\n" +
                    "</tr>\n"
            } else {
                dagit +=
                    "<tr id=\'rowcolor1\' class=\"color_even\">\n" +
                    "<td><input type=\"checkbox\" name=\"checked_student\" onclick='judge()'></td>\n" +
                    "<th id=\"low\">" + (i + 1) + "</th>\n" +
                    "<th align=\"center\">" + students_infromation[i].number + "</th>\n" +
                    "<th align=\"center\" id=\"three\">" + students_infromation[i].name + "</th>\n" +
                    "<th align=\"center\" id=\"four\">" + students_infromation[i].college + "</th>\n" +
                    "<th align=\"center\" id=\"five\">" + students_infromation[i].study + "</th>\n" +
                    "<th align=\"center\" id=\"six\">" + students_infromation[i].gade + "</th>\n" +
                    "<th align=\"center\" id=\"seven\">" + students_infromation[i].class + "</th>\n" +
                    "<th align=\"center\" id=\"eight\">" + students_infromation[i].old + "</th>\n" +
                    "<th align=\"center\" id=\"nine\">" +
                    "<span class='float_left text_css' onclick='see_information(" + i + ")'>查看</span>" +
                    "&nbsp&nbsp<span class='float_right text_css' onclick='change_information(" + i + ")'>修改</input></th>\n" +
                    "</tr>\n"
            }


        }
        document.getElementById("tab1").innerHTML = dagit;
        var record = " 第" + currentPage + "页" + ",共" + num + "条,(每页显示10条)";
    } else {
        dagit+="<tr><td colspan='10' style='text-align: center;color: red'>暂无数据!!!!</td></tr>";
        document.getElementById("tab1").innerHTML = dagit;
        // document.getElementById("tab1").innerHTML = "<div style='text-align: center;font-size: 20px'>暂无数据!!!!</div>";
        currentPage = 1;
        var record = " 第" + 1 + "页" + ",共" + 0 + "条,(每页显示10条)";
    }


    var tempStr = "";
    tempStr += "<button href=\"#\" onClick=\"goPage(" + (currentPage - 1) + "," + psize + ")\" class='last'>上一页</button>"
    tempStr += "<button href=\"#\" onClick=\"goPage(" + (currentPage + 1) + "," + psize + ")\" class='next'>下一页</button>";

    document.getElementById("record_button").innerHTML = tempStr;
    document.getElementById("record").innerHTML = record;
}
