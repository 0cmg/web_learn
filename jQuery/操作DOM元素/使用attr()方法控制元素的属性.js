/*
attr()�����������û򷵻�Ԫ�ص�����
attr(������)�ǻ�ȡԪ����������ֵ
attr(����ֵ,������)������������ֵ
*/
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>����Ԫ������</title>
    <script src="http://libs.baidu.com/jquery/2.0.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>attr()��������Ԫ������</h3>
    <a href="http://127.0.0.1" id="a1">���Ҿͱ�</a>
    <div>�Ҹı��ĵ�ַ�ǣ�<span id="tip"></span></div>
    <script type="text/javascript">
        $("#a1").attr("href","http://www.google.com");
        var $url = $("#a1").attr("href");
        $("#tip").html($url);
    </script>
</body>
</html>

/*
���н����
���Ҿͱ�
�Ҹı��ĵ�ַ�ǣ�http://www.google.com
*/