//����������������������������
<!DOCTYPE html>
<html>
 <head>
  <title> �¼�</title>  
  <script type="text/javascript">
   function count(){
       
    //��ȡ��һ��������ֵ
    var value1=document.getElementById("txt1").value;
	//��ȡ�ڶ���������ֵ
    var value2=document.getElementById("txt2").value;
	//��ȡѡ����ֵ
    var Selection=document.getElementById("select").value;
	//��ȡͨ����������ѡ���ֵ���ı�Ӽ��˳������㷨��
    var value3="";
    switch(Selection){
        case "+": value3=parseInt(value1)+parseInt(value2);
                   break;
        case "-": value3=parseInt(value1)-parseInt(value2);;
                   break;
        case "*": value3=parseInt(value1)*parseInt(value2);;
                   break;
        case "/": value3=parseInt(value1)/parseInt(value2);
    }
    //���ý��������ֵ 
    document.getElementById("fruit").value=value3;
   }
  </script> 
 </head> 
 <body>
   <input type='text' id='txt1' /> 
   <select id='select'>
		<option value='+'>+</option>
		<option value="-">-</option>
		<option value="*">*</option>
		<option value="/">/</option>
   </select>
   <input type='text' id='txt2' /> 
   <input type='button' value=' = ' onClick="count()"/> <!--ͨ�� = ��ť�����ô����ĺ������õ����--> 
   <input type='text' id='fruit' />   
 </body>
</html>

