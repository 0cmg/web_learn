/*
read()ʱ��������onLoad()�¼�����ǰ��ֻҪҳ���DOm�ṹ���غ�����
���߱����ڶ���ȫ��Ԫ�ؼ��سɹ��ų���
read()����д�������˳��ִ��
$(document).ready(function(){})====$(function(){})
*/
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>ready()�¼�</title>
<script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>ҳ������ʱ����ready()�¼�</h3>
    <div id="tip"></div>
    <input id="btntest" type="button" value="������" />
    <script type="text/javascript">
        $(function() {
            $("#btntest").bind("click", function () {
                $("#tip").html("�ұ�����ˣ�");
            });
        });
    </script>
</body>
</html>
