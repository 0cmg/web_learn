//�����������ı����뿪ʱ������onblur �¼�������message()������
<!DOCTYPE HTML>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title> ʧ���¼� </title>
<script type="text/javascript">
  function message(){
    alert("��ȷ����������������ƿ�!"); }
</script>    
</head>
<body>
  <form>
   �û�:<input name="username" type="text" value="�������û�����" >
   ����:<input name="password" type="text" value="���������룡" onblur="message()">
  </form>
</body>
</html>
